using Microsoft.AspNetCore.Mvc;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.Data.SqlClient;
using backend_TimeAttPlus.Data;
using backend_TimeAttPlus.Models;
using System.Data;
using System.Collections.Generic;
using System;
using Newtonsoft.Json;


namespace backend_TimeAttPlus.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class RequestsController : Controller
  {
    private readonly RequestDbContext _requestDbcontext;
    SqlConnection con = new SqlConnection("server=.;database=mydb;User ID=sa;Password=12345678");

    public RequestsController(RequestDbContext context)
    {
      _requestDbcontext = context;
    }
    [HttpGet]
    [Route("GetAllRequest")]
    public List<Request> GetAllRequest()
    {
      SqlDataAdapter adapter = new SqlDataAdapter("sp_LeaveRecord_LoadAllColumn", con);
      DataTable dt = new DataTable();



      adapter.Fill(dt);
      List<Request> lstreq = new List<Request>();
      if (dt.Rows.Count > 0)
      {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
          Request request = new Request();


          request.LeaveNo = dt.Rows[i]["LeaveNo"].ToString();
          request.LeaveType = dt.Rows[i]["LeaveType"].ToString();
          request.EmployeeNo = dt.Rows[i]["EmployeeNo"].ToString();
          request.Reason = dt.Rows[i]["Reason"].ToString();
          request.LeaveDtTmFrom = Convert.ToDateTime(dt.Rows[i]["LeaveDtTmFrom"]);
          request.LeaveDtTmTo = Convert.ToDateTime(dt.Rows[i]["LeaveDtTmTo"]);
          request.LeaveStatus = dt.Rows[i]["LeaveStatus"].ToString();
          request.LeaveDay = Convert.ToInt32(dt.Rows[i]["LeaveDay"]);
          request.LeaveHour = Convert.ToInt32(dt.Rows[i]["LeaveHour"]);
          request.LeaveMin = Convert.ToInt32(dt.Rows[i]["LeaveMin"]);

          lstreq.Add(request);
        }
      }
      if (lstreq.Count > 0)
      {
        return lstreq;
      }
      else
      {
        return null;
      }



    }//getall

    // GET: Requests
    // [HttpGet]
    //    public async Task<IActionResult> GetAllLeaveRecord()
    //    {

    //     var request =  await _requestDbcontext.tbl_LeaveRecords.ToListAsync();
    //        return Ok(request);
    //    }

    // GET: Leavetype
    [HttpGet]
    [Route("GetLeaveType")]
    public async Task<IActionResult> GetAllTypeLeave()
    {
      var typeleave = await _requestDbcontext.tbl_LeaveType.ToListAsync();
      return Ok(typeleave);
    }

   // [HttpPost]
   // [Route("AddRequest")]
   // public async Task<IActionResult> AddLeave([FromBody] Request LeaveRequest)
   // {

   //  await _requestDbcontext.tbl_LeaveRecords.AddAsync(LeaveRequest);
   //   await _requestDbcontext.SaveChangesAsync();

   //   return Ok(LeaveRequest);
   // }

    [HttpPost]
    [Route("AddRequest")]
    public string AddRequest(Request req)
    {
      string msg = string.Empty;
      try
      {
        SqlCommand com = new SqlCommand("sp_LeaveRecord_Insert", con);
        com.CommandType = CommandType.StoredProcedure;

        com.Parameters.Clear();

        com.Parameters.AddWithValue("@EmployeeNo", req.EmployeeNo);
        com.Parameters.AddWithValue("@LeaveType", req.LeaveType);
        com.Parameters.AddWithValue("@Reason", req.Reason);
        com.Parameters.AddWithValue("@LeaveDtTmFrom", req.LeaveDtTmFrom);
        com.Parameters.AddWithValue("@LeaveDtTmTo", req.LeaveDtTmTo);
        com.Parameters.AddWithValue("@ProjectSiteCode", req.ProjectSiteCode);
        com.Parameters.AddWithValue("@ProjectSiteAllowance", req.ProjectSiteAllowance);
        con.Open();
        com.ExecuteNonQuery();
        con.Close();
        msg = "SUCCESS";
      }
      catch (Exception ex)
      {
        msg = ex.Message;
      }
      finally
      {
        if (con.State == (ConnectionState.Open))
        {
          con.Close();
        }
      }
      return msg;
    }


  }
    
}
