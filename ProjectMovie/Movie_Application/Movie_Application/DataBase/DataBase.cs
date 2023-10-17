using Movie_Application.Models;

namespace Movie_Application.DataBase
{
    public static class DataBase
    {
        public static List<Category> Categories = new List<Category>()
        {
            new Category() { Id = 1, Name = "Action" },
            new Category() { Id = 2, Name = "Terror" }
        };
    }
}

