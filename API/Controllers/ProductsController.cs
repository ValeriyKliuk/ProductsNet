using Microsoft.AspNetCore.Mvc;
using Domain;
using Persistence;
using Microsoft.EntityFrameworkCore;


namespace API.Controllers
{
    public class ProductsController: BaseAPIController
    {
        private readonly DataContext context;
        public ProductsController(DataContext context)
        {
            this.context = context;
        }

        [HttpGet] //api/products
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await context.Products.ToListAsync();
        }

        [HttpGet("{id}")] //api/products/{id}
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            return await context.Products.FindAsync(id);
        }
    }
}