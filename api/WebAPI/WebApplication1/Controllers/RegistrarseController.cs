using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Models
{
    public class RegistrarseController : ApiController
    {
      public HttpResponseMessage Get()
      {
        string query = @"select * from usuarios";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["TextolandiaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return Request.CreateResponse(HttpStatusCode.OK, table);
      }

    public string Post(Registrarse user)
    {
      try
      {
        string query = @"INSERT INTO usuarios VALUES ('" + user.EmailUsuario + @"', '" + user.ContraseñaUsuario + @"')";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["TextolandiaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "El usuario fue agregado con exito.";
      }
      catch (Exception)
      {
        return "El usuario no fue agregado";
      }
    }

    public string Put(Registrarse user)
    {
      try
      {
        string query = @"
                    UPDATE Usuarios
                    SET EmailUsuario = '" + user.EmailUsuario + @"', ContraseñaUsuario = '" + user.ContraseñaUsuario + @"'
                    WHERE IDusuario = '" + user.IDusuario + @"'
                    ";

        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["TextolandiaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "El usuario fue modificado con exito.";
      }
      catch (Exception)
      {
        return "El usuario no fue modificado";
      }
    }

    public string Delete(int ID)
    {
      try
      {
        string query = @"
                    DELETE FROM Usuarios 
                    WHERE IDusuario ='" + ID + @"'
                    ";

        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["TextolandiaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "El usuario fue eliminado con exito.";
      }
      catch (Exception)
      {
        return "El usuario no fue eliminado";
      }
    }

  }
}
