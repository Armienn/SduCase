using Case.Models;
using Case.Services;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllersWithViews();

builder.Services.Configure<DatabaseConfiguration>(builder.Configuration.GetSection("SduCaseDatabase"));

//builder.Services.AddSingleton<IStudentService>(new TestStudentService());
//builder.Services.AddSingleton<IStudentService>(new StudentService());
builder.Services.AddSingleton<IStudentService>(x => new StudentService(x.GetService<IOptions<DatabaseConfiguration>>()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment()) {
	app.UseExceptionHandler("/Home/Error");
	// The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
	app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
	name: "api",
	pattern: "api/{controller=Home}/{action=Index}/{id?}");
app.MapControllerRoute(
	name: "api-error",
	pattern: "api/{*url}",
	defaults: new { controller = "Home", action = "Error" });
app.MapControllerRoute(
	name: "default",
	pattern: "{*url}",
	defaults: new { controller = "Home", action = "Index" });

app.Run();
