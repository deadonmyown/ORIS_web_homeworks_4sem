namespace SobakaBackend.Models;

public class Dog
{
    public int Id { get; set; } //id
    public string? Name { get; set; } //name
    public Info? Description { get; set; } //description and temperament
    public string? ShortInfo { get; set; } //description parse to first '.' and bred_for 
    public Image? Image { get; set; }
    public Breed? Breed { get; set; } //breed_group bred_for
    public Weight? Weight { get; set; } //weight
    public Height? Height { get; set; }//height
    public Age? Age { get; set; }  //lifespan
    //public string? ReferenceImageId { get; set; }
}

public record Info(string? Description, string? Temperament, string? Origin);

public record Breed(string? BreedGroup, string? BredFor);

public record Weight(float ImperialMinWeight, float ImperialMaxWeight, float MetricMinWeight, float MetricMaxWeight);

public record Height(float ImperialMinHeight, float ImperialMaxHeight, float MetricMinHeight, float MetricMaxHeight);

public record Age(int MinAge, int MaxAge);