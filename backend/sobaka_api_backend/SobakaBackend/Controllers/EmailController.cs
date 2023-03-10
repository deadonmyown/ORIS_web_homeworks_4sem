using System.Text.Json;
using Microsoft.AspNetCore.Mvc;
using SobakaBackend.Models;
using SobakaBackend.Services;

namespace SobakaBackend.Controllers;

[ApiController]
[Route("[controller]")]
public class EmailController : ControllerBase
{
    private readonly IEmailService _emailService;

    public EmailController(IEmailService emailService)
    {
        _emailService = emailService;
    }
    
    [HttpPost("sendEmail")]
    public async void EmailPost([FromBody] EmailMessage emailMessage)
    {
        await _emailService.SendEmailAsync(emailMessage.Email, emailMessage.Subject, emailMessage.Message);
    }
    
    [HttpPost("sendReview")]
        public async void ReviewPost([FromBody] ReviewMessage reviewMessage)
        {
            await _emailService.SendReviewAsync(reviewMessage.Subject, reviewMessage.Message);
        }
}