using Domain;
using MediatR;
using Persistence;

namespace Application.Products
{
    public class Details
    {
        public class Query : IRequest<Product>
        {
            public Guid Id { get; set; }
        }   

        public class Handler : IRequestHandler<Query, Product>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }
            public async Task<Product> Handle(Query request, CancellationToken cancellationToken)
            {
                return await this.context.Products.FindAsync(request.Id);
            }
        }
    }
}