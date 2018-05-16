using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Azure.EventHubs;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace WebsocketService
{
    public class Program
    {
        private static EventHubClient eventHubClient;
        private const string EhConnectionString = "Endpoint=sb://slack2eventhub.servicebus.windows.net/;SharedAccessKeyName=slack2realeventhubpolicy;SharedAccessKey=BZPvsBZ/UczWflRPxB/KIJu5xUx6Mi+jaJBJPzv6vEM=;EntityPath=slack2realeventhub";

        public static void Main(string[] args)
        {
            MainAsync(args).GetAwaiter().GetResult();
            BuildWebHost(args).Run();
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();

         private static async Task MainAsync(string[] args)
        {
            eventHubClient = EventHubClient.CreateFromConnectionString(EhConnectionString);

            await SendMessagesToEventHub(1);

            await eventHubClient.CloseAsync();
        }

        // Creates an event hub client and sends 100 messages to the event hub.
        private static async Task SendMessagesToEventHub(int numMessagesToSend)
        {
            for (var i = 0; i < numMessagesToSend; i++)
            {
                try
                {
                    var message = $"Message {i}";
                    Console.WriteLine($"Sending message: {message}");
                    await eventHubClient.SendAsync(new EventData(Encoding.UTF8.GetBytes(message)));
                }
                catch (Exception exception)
                {
                    Console.WriteLine($"{DateTime.Now} > Exception: {exception.Message}");
                }

                await Task.Delay(10);
            }

            Console.WriteLine($"{numMessagesToSend} messages sent.");
        }
    }
}
