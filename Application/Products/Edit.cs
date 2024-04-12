using Domain;
using MediatR;
using Persistence;

namespace Application.Products
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Product Product { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task Handle(Command request, CancellationToken cancellationToken)
            {
                var product = await _context.Products.FindAsync(request.Product.Id);

                if(product == null)
                    throw new Exception("Could not find product");

                product.Name = request.Product.Name ?? product.Name;
                product.Description = request.Product.Description ?? product.Description;
                product.ShortName = request.Product.ShortName ?? product.ShortName;
                product.ShortDescription = request.Product.ShortDescription ?? product.ShortDescription;

                await _context.SaveChangesAsync();
            }
        }
    }
}