// See https://aka.ms/new-console-template for more information


using SobakaBackend;

var dogApis = await DogApiHandler.ReadFromDogApiJson();
Console.WriteLine("-------------------------------------");
var dogs = DogApiHandler.ParseToDog(dogApis);
