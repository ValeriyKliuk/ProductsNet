using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Products.CountAsync().Result == 0)
            {
                var products = new List<Product>
                {
                    new Product
                    {
                        Name = "Product 1",
                        ShortName = "P1",
                        Description = "Description of Product 1",
                        ShortDescription = "Short Description of Product 1",
                        Price = 100,
                        Category = "Category 1",
                        Image = "image1.jpg",
                        Height = 10,
                        Width = 10,
                        Depth = 10,
                        Weight = 10,
                        Quantity = 10,
                        Rating = 5,
                        Color = "Red",
                        Shipping = "Shipping 1",
                        Date = DateTime.UtcNow.AddMonths(-2)
                    },
                    new Product
                    {
                        Name = "Product 2",
                        ShortName = "P2",
                        Description = "Description of Product 2",
                        ShortDescription = "Short Description of Product 2",
                        Price = 200,
                        Category = "Category 2",
                        Image = "image2.jpg",
                        Height = 20,
                        Width = 20,
                        Depth = 20,
                        Weight = 20,
                        Quantity = 20,
                        Rating = 4,
                        Color = "Blue",
                        Shipping = "Shipping 2",
                        Date = DateTime.UtcNow.AddMonths(-1)
                    },
                    new Product
                    {
                        Name = "Product 3",
                        ShortName = "P3",
                        Description = "Description of Product 3",
                        ShortDescription = "Short Description of Product 3",
                        Price = 300,
                        Category = "Category 3",
                        Image = "image3.jpg",
                        Height = 30,
                        Width = 30,
                        Depth = 30,
                        Weight = 30,
                        Quantity = 30,
                        Rating = 3,
                        Color = "Green",
                        Shipping = "Shipping 3",
                        Date = DateTime.UtcNow.AddMonths(1)
                    }
                };

                await context.Products.AddRangeAsync(products);
                await context.SaveChangesAsync();
            }
        }
    }
}