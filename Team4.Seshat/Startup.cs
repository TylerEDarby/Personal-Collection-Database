using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Team4.Seshat.Model;

namespace Team4.Seshat
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        private string ConnectionString { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options => options.AddPolicy("ApiCorsPolicy", builder =>
            {
                builder.WithOrigins("http://localhost:4200", 
                                    "https://localhost:4200",
                                    "https://team4-seshat.azurewebsites.net",
                                    "http://team4-seshat.azurewebsites.net"
                                   ).AllowAnyMethod().AllowAnyHeader();
            }));

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Team4.Seshat", Version = "v1" });
            });

            services.AddDbContext<SeshatDataContext>(options => options.UseSqlServer(ConnectionString));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                ConnectionString = "Server=localhost; Database=Seshat; Trusted_connection=true";
            } 
            else
            {
                ConnectionString = "Server=tcp:franklin-team4-seshat.database.windows.net,1433;Initial Catalog=Seshat;Persist Security Info=False;User ID=team4admin;Password=Team4Database!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";
            }

            // In the Real World™ you'd want to keep the following 3 lines in the IsDevelopment() check above because it's not good practice to expose:
            //    Swagger because it gives hackers an easy way to bypass the UI and shows them exactly what the API is like
            //    Developer Exception Page because it will show the stack on screen when an exception occurs (again you don't want hackers to see that)
            // But since this is just a class and these are really helpful, I just moved them out of the check
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "Team4.Seshat v1"));

            app.UseCors("ApiCorsPolicy");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
