using Microsoft.AspNetCore.Mvc;
using Movie_Application.Models;
using Movie_Application.Models.Errors;



namespace Movie_Application.Controllers


{

    [ApiController]
    [Route("[controller]")]
    public class CategoryController : ControllerBase
    {
        [HttpGet("{id}")]
        public IActionResult GetCategoryById(int id)
        {
            Category? CategoryToReturn = DataBase.DataBase.Categories.FirstOrDefault(c => c.Id == id);
            if (CategoryToReturn is null)
                return NotFound(new CustomError()
                {
                    StatusCode = "404",
                    Message = "Category not found"
                });
            return Ok(CategoryToReturn);

        }
        [HttpGet]
        public IActionResult GetAllCategories() => Ok(DataBase.DataBase.Categories);

        [HttpPost]
        public IActionResult PostSingleCategory([FromQuery] String name)
        {
            if (name is not null)
            {
                Category CToInsert = new Category()
                {
                    Name = name,
                    Id = DataBase.DataBase.Categories.Count() + 1
                };
                DataBase.DataBase.Categories.Add(CToInsert);
                return Ok(CToInsert);

            }
            else
            {


                return BadRequest();
            }

        }
        [HttpDelete("{id}")]
        public IActionResult DeleteCategoryById(int id)
        { foreach ( var cta in DataBase.DataBase.Categories)
            {
                if(cta.Id == id)
                {
                    DataBase.DataBase.Categories.Remove(cta);
                    return Ok(cta);
                }
              
            }
          return BadRequest();
           

        }


    }
}
