using System.Globalization;
using System.Text.Json;
using SobakaBackend.Controllers;
using SobakaBackend.Models;

namespace SobakaBackend;

public static class DogApiHandler
{
    public static List<Dog> Dogs = new List<Dog>();

    public static async Task<List<DogApi>?> ReadFromDogApiJson()
    {
        string fileName = "breeds.json";
        using FileStream openStream = File.OpenRead(fileName);
        List<DogApi> dogApis = await JsonSerializer.DeserializeAsync<List<DogApi>>(openStream);
        for (int i = 0; i < dogApis?.Count; i++)
        {
            Console.WriteLine($"imperial: {dogApis[i].Height.Imperial}, id: {dogApis[i].Id}");
            Console.WriteLine($"metric: {dogApis[i].Height.Metric}, id: {dogApis[i].Id}");
        }
        Console.WriteLine(dogApis?.Count);

        return dogApis;
    }

    public static List<Dog> ParseToDog(List<DogApi> dogApis)
    {
        Func<string?, IEnumerable<float>?> toFloat = s =>
            s.Split(new char[] { '-', ' ', '–' }, StringSplitOptions.RemoveEmptyEntries)
                .Where(w => float.TryParse(w, NumberStyles.AllowDecimalPoint, CultureInfo.InvariantCulture, out _) &&
                            !float.IsNaN(float.Parse(w, NumberStyles.AllowDecimalPoint, CultureInfo.InvariantCulture)))
                .Select(w => float.Parse(w, NumberStyles.AllowDecimalPoint, CultureInfo.InvariantCulture));
        
        Func<string?, IEnumerable<int>?> toInt = s =>
            s.Split(new char[] { '-', ' ', '–' }, StringSplitOptions.RemoveEmptyEntries)
                .Where(w => int.TryParse(w, out _)).Select(int.Parse);
            
        List<Dog> dogs = new List<Dog>();
        for (int i = 0; i < dogApis.Count; i++)
        {
            var impWeights = toFloat(dogApis[i].Weight?.Imperial)?.ToList();

            var mWeights = toFloat(dogApis[i].Weight?.Metric)?.ToList();
            
            var impHeights = toFloat(dogApis[i].Height?.Imperial)?.ToList();
            
            var mHeights = toFloat(dogApis[i].Height?.Metric)?.ToList();
            
            var ages = toInt(dogApis[i].LifeSpan)?.ToList();
            
            var dog = new Dog
            {
                Id = dogApis[i].Id,
                Name = dogApis[i].Name,
                Description = new Info(dogApis[i].Description, dogApis[i].Temperament, dogApis[i].Origin),
                ShortInfo = dogApis[i].Description?.Split('.').FirstOrDefault(),
                Image = dogApis[i].Image,
                Breed = new Breed(dogApis[i].BreedGroup, dogApis[i].BredFor),
                Weight = new Weight(impWeights?.FirstOrDefault(1) ?? 1, impWeights?.LastOrDefault(1) ?? 1,
                    mWeights?.FirstOrDefault(1) ?? 1, mWeights?.LastOrDefault(1) ?? 1),
                Height = new Height(impHeights?.FirstOrDefault(1) ?? 1, impHeights?.LastOrDefault(1) ?? 1,
                    mHeights?.FirstOrDefault(1) ?? 1, mHeights?.LastOrDefault(1) ?? 1),
                Age = new Age(ages?.FirstOrDefault(1) ?? 1, ages?.LastOrDefault(1) ?? 1)
            };

            dogs.Add(dog);
        }
        return dogs;
    }
}