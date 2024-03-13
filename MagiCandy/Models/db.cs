using System;
using MySql.Data.MySqlClient;

class Conexion
{
    static void Main()
    {
        string connectionString = "Server=localhost;Database=MagiCandy_datos;Uid=root;Pwd=;";

        MySqlConnection connection = new MySqlConnection(connectionString);

        try
        {
            connection.Open();
            Console.WriteLine("Conexión exitosa.");

            // Aquí puedes ejecutar consultas, comandos, etc.

            connection.Close();
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error de conexión: " + ex.Message);
        }
    }
}
