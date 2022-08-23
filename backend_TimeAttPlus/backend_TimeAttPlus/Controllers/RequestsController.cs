using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using backend_TimeAttPlus.Data;
using backend_TimeAttPlus.Models;
using Microsoft.Data.SqlClient;
using System.Data;

namespace backend_TimeAttPlus.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class RequestsController : Controller
  {
    SqlConnection con = new SqlConnection("server=.;database=mydb;User ID=sa;Password=12345678");
    private readonly RequestDbContext _requestDbcontext;


    public RequestsController(RequestDbContext context)
    {
      _requestDbcontext = context;
    }


    // GET: Requests
    [HttpGet]
    public async Task<IActionResult> GetAllLeaveRecord()
    {

      var request = await _requestDbcontext.tbl_LeaveRecords.ToListAsync();
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
    public void AddLeave([FromBody] Request req)
    {
      string msg = "";
      if (req != null)
      {
        SqlCommand com = new SqlCommand("sp_LeaveRecord_Insert", con);
        com.CommandType = CommandType.StoredProcedure; 
        com.Parameters.AddWithValue("@EmployeeNo", req.EmployeeNo);
        com.Parameters.AddWithValue("@Reason", req.Reason);
        com.Parameters.AddWithValue("@LeaveType", req.LeaveType);
        com.Parameters.AddWithValue("@LeaveDtTmFrom", req.LeaveDtTmFrom);
        com.Parameters.AddWithValue("@LeaveDtTmTo", req.LeaveDtTmTo);
       

        con.Open();
        int i = com.ExecuteNonQuery();
        con.Close();

        if (i > 0)
        {
          msg = "data has been inserted";
        }
        else
        {
          msg = "error";
        }
      }




      //await _requestDbcontext.tbl_LeaveRecords.AddAsync(LeaveRequest);
      //await _requestDbcontext.SaveChangesAsync();

      // return Ok(LeaveRequest);
    }

    // POST api/values
    

  }
  }


