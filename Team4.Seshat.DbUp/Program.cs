using DbUp;
using System;
using System.Linq;
using System.Reflection;

namespace Team4.Seshat.DbUp
{
    class Program
    {
        static int Main(string[] args)
        {
            // "Server=tcp:franklin-team4-seshat.database.windows.net,1433;Initial Catalog=Seshat;Persist Security Info=False;User ID=team4admin;Password=Team4Database!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            var connectionString =
                args.FirstOrDefault()
                ?? "Server=localhost; Database=Seshat; Trusted_connection=true";
            EnsureDatabase.For.SqlDatabase(connectionString);

            var upgrader =
                DeployChanges.To
                    .SqlDatabase(connectionString)
                    .WithScriptsEmbeddedInAssembly(Assembly.GetExecutingAssembly())
                    .LogToConsole()
                    .Build();

            var result = upgrader.PerformUpgrade();

            if (!result.Successful)
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine(result.Error);
                Console.ResetColor();
#if DEBUG
                Console.ReadLine();
#endif
                return -1;
            }

            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Success!");
            Console.ResetColor();
            return 0;
        }
    }
}
