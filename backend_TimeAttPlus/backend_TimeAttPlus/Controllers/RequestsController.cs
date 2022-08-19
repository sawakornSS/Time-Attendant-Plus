using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using backend_TimeAttPlus.Data;
using backend_TimeAttPlus.Models;
using TimeAttPlus.Business;

namespace backend_TimeAttPlus.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RequestsController : Controller
    {
        private readonly RequestDbContext _requestDbcontext;
        

    public RequestsController(RequestDbContext context)
        {
            _requestDbcontext = context;
        }
        

        // GET: Requests
        [HttpGet]
        public async Task<IActionResult> GetAllLeaveRecord()
        {
   
         var request =  await _requestDbcontext.tbl_LeaveRecords.ToListAsync();
          return Ok(request);
        }

        // GET: Leavetype
       [HttpGet]
       [Route("GetLeaveType")]
       public async Task<IActionResult> GetAllTypeLeave()
      {
          var typeleave = await _requestDbcontext.tbl_LeaveType.ToListAsync();
            return Ok(typeleave);
        }

        [HttpPost]
        [Route("AddRequest")]
        public async Task<IActionResult> AddLeave([FromBody]Request LeaveRequest) 
        {
            
            await _requestDbcontext.tbl_LeaveRecords.AddAsync(LeaveRequest);
            await _requestDbcontext.SaveChangesAsync();

            return Ok(LeaveRequest);
        }



    }
}
