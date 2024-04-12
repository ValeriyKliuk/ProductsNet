using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Products
{
    public class List
    {
        public class Query: IRequest<List<Product>> {}

        public class Handler : IRequestHandler<Query, List<Product>>
        {
            private readonly DataContext _context;
            public ILogger<List> _logger { get; }
            public Handler(DataContext context, ILogger<List> logger)
            {
                _logger = logger;
                _context = context;
            }
           
            public async Task<List<Product>> Handle(Query request, CancellationToken cancellationToken)
            {
                try
                {
                    cancellationToken.ThrowIfCancellationRequested();
                    await Task.Delay(1000, cancellationToken);
                    _logger.LogInformation("Getting products... Task has completed!");
                }
                catch (Exception)
                {
                    _logger.LogInformation("Task was cancelled");
                }
                return await _context.Products.ToListAsync();
            }
        }
    }
}