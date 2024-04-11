using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BaseAPIController : ControllerBase
    {
       private IMediator mediator;

       protected IMediator Mediator => this.mediator ??= HttpContext.RequestServices.GetService<IMediator>(); 
    }
}