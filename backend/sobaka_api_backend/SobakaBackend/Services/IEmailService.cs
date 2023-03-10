namespace SobakaBackend.Services;

public interface IEmailService
{
    Task SendEmailAsync(string email, string subject, string message);
    
    Task SendReviewAsync(string subject, string message);
}