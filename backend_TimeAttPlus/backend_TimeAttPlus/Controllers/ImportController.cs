using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using TimeAttPlus.Business;
using System.Threading.Tasks;

namespace backend_TimeAttPlus.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ImportController : Controller
  {

    // GET: Requests
    [HttpGet]
    public async Task<IActionResult> GetAllImport()
    {
      tbl_TimeAttendantImport import = new tbl_TimeAttendantImport();

      Class1 class1 = new Class1();

      var a = await Task.Run(() =>
      {
        return Ok(class1.getdata());
      });

      return a;

    }

  }
}
