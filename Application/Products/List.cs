using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Products
{
    public class List
    {
        public class Query: IRequest<List<Product>> {}

        public class Handler : IRequestHandler<Query, List<Product>>
        {
            private readonly DataContext context;
            public Handler(DataContext context)
            {
                this.context = context;
            }
           
            public async Task<List<Product>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await this.context.Products.ToListAsync();
            }
        }
    }
}