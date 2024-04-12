using Microsoft.AspNetCore.Mvc;
using Domain;
using Application.Products;

namespace API.Controllers
{
    public class ProductsController: BaseAPIController
    {
        [HttpGet] //api/products
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")] //api/products/{id}
        public async Task<ActionResult<Product>> GetProduct(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id = id});
        }

        [HttpPost] //api/products
        public async Task<ActionResult> CreateProduct(Product product)
        {
            await Mediator.Send(new Create.Command{Product = product});

            return Ok();
        }

        [HttpPut("{id}")] //api/products/{id}
        public async Task<ActionResult> EditProduct(Guid id, Product product)
        {
            product.Id = id;
            await Mediator.Send(new Edit.Command{Product = product});

            return Ok();
        }
    }
}