using SobakaBackend;
using SobakaBackend.Models;
using SobakaBackend.Services;

var dogApis = await DogApiHandler.ReadFromDogApiJson();
DogApiHandler.Dogs = DogApiHandler.ParseToDog(dogApis!);

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddTransient<IEmailService, EmailService>();
builder.Services.Configure<EmailConfig>(builder.Configuration.GetSection("SmtpSettings"));

var  myAllowSpecificOrigins = "_myAllowSpecificOrigins";  

builder.Services.AddCors(options =>  
{  
    options.AddPolicy(name: myAllowSpecificOrigins,  
        policy  =>  
        {  
            policy.WithOrigins("http://localhost:3000",  
                "http://www.contoso.com").AllowAnyMethod().AllowAnyHeader().AllowAnyOrigin(); // add the allowed origins  
        });  
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpLogging();

app.UseHttpsRedirection();

app.UseCors(myAllowSpecificOrigins);

app.UseAuthorization();

app.MapControllers();

app.Run();