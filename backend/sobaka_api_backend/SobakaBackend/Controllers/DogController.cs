using Microsoft.AspNetCore.Mvc;
using SobakaBackend.Models;

namespace SobakaBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class DogController : ControllerBase
{
    [HttpGet]
    public IEnumerable<ShortDog> GetAll()
    {
        return DogApiHandler.Dogs.Select(dog => new ShortDog()
            { Id = dog.Id, Name = dog.Name, ShortInfo = dog.ShortInfo, Image = dog.Image, Breed = dog.Breed});
    }
    
    [HttpGet("{id}")]
    public IActionResult GetById([FromRoute]int id)
    {
        var dog = DogApiHandler.Dogs.FirstOrDefault(d => d.Id == id);
        return dog == null ? BadRequest("can't find id") : Ok(dog);
    }
}

public class ShortDog
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? ShortInfo { get; set; } 
    public Image? Image { get; set; }
    public Breed? Breed { get; set; }
}