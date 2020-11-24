using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Web;


namespace WebApplication1.Models
{
  public class IniciarSesion
  {
    public string ContraseñaUsuario { get; set; }
    public string EmailUsuario { get; set; }
  }
}
