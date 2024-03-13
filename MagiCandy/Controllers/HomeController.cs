using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using MagiCandy.Models;

namespace MagiCandy.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
    public IActionResult Cuenta()
    {
        return View();
    }
    public IActionResult Nosotros()
    {
        return View();
    }
    public IActionResult Productos()
    {
        return View();
    }
    public IActionResult Contacto()
    {
        return View();
    }
    public IActionResult Ingreso()
    {
        return View();
    }

    public IActionResult RegistroInsumo ()
    {
        return View();
    }

}