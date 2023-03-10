using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Options;
using SobakaBackend.Models;

namespace SobakaBackend.Services;

public class EmailService : IEmailService
{
    private readonly EmailConfig ec;

    public EmailService(IOptions<EmailConfig> emailConfig)
    {
        this.ec = emailConfig.Value;
    }

    public async Task SendEmailAsync(string email, string subject, string message)
    {
        try
        {
            Console.WriteLine(ec.FromAddress);
            var from = new MailAddress(ec.FromAddress, ec.FromName);
            var to = new MailAddress(email);
            var mailMessage = new MailMessage(from, to);
            mailMessage.Subject = subject;
            mailMessage.Body = message;

            var mailMessage2 = new MailMessage(from, from);
            mailMessage2.Subject = subject;
            mailMessage2.Body = message;
            
            using (var client = new SmtpClient(ec.Server, ec.Port))
            {
                client.Credentials = new NetworkCredential(ec.FromAddress, ec.UserPassword);
                client.EnableSsl = true;
                await client.SendMailAsync(mailMessage);
                await client.SendMailAsync(mailMessage2);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
    
    public async Task SendReviewAsync(string subject, string message)
    {
        try
        {
            Console.WriteLine(ec.FromAddress);
            var from = new MailAddress(ec.FromAddress, ec.FromName);
            var mailMessage = new MailMessage(from, from);
            mailMessage.Subject = subject;
            mailMessage.Body = message;

            using (var client = new SmtpClient(ec.Server, ec.Port))
            {
                client.Credentials = new NetworkCredential(ec.FromAddress, ec.UserPassword);
                client.EnableSsl = true;
                await client.SendMailAsync(mailMessage);
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}