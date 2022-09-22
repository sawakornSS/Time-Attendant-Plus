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
    public List<Request> GetAllRequest(string EmpNo)
    {
      SqlDataAdapter da = new SqlDataAdapter("sp_LeaveRecord_Load", con);
      da.SelectCommand.CommandType = CommandType.StoredProcedure;
      da.SelectCommand.Parameters.AddWithValue("@EmployeeNo", EmpNo);
      
      DataTable dt = new DataTable();

      da.Fill(dt);
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
          request.SiteName = dt.Rows[i]["SiteName"].ToString();
          request.EmployeeName = dt.Rows[i]["EmployeeName"].ToString();
          request.TotalDays = dt.Rows[i]["TotalDays"].ToString();
       
          //  request.LeaveDay = Convert.ToInt32(dt.Rows[i]["LeaveDay"]);
          //  request.LeaveHour = Convert.ToInt32(dt.Rows[i]["LeaveHour"]);
          //  request.LeaveMin = Convert.ToInt32(dt.Rows[i]["LeaveMin"]);

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

    [HttpGet]
    [Route("GetRequestApprover")]
    public List<Request> GetRequestApprover(string Approver, string LeaveStatus)
    {
      SqlDataAdapter da = new SqlDataAdapter("sp_LeaveRecord_Load", con);
      da.SelectCommand.CommandType = CommandType.StoredProcedure;
      da.SelectCommand.Parameters.AddWithValue("@ApproverNo", Approver);
      da.SelectCommand.Parameters.AddWithValue("@LeaveStatus", LeaveStatus);
      DataTable dt = new DataTable();



      da.Fill(dt);
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
          request.SiteName = dt.Rows[i]["SiteName"].ToString();
          request.EmployeeName = dt.Rows[i]["EmployeeName"].ToString();
          //  request.LeaveDay = Convert.ToInt32(dt.Rows[i]["LeaveDay"]);
          //  request.LeaveHour = Convert.ToInt32(dt.Rows[i]["LeaveHour"]);
          //  request.LeaveMin = Convert.ToInt32(dt.Rows[i]["LeaveMin"]);

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



    }//GetRequestApprover

    
    [HttpGet]
    [Route("GetLeaveType")]
    public async Task<IActionResult> GetAllTypeLeave()
    {
      var typeleave = await _requestDbcontext.tbl_LeaveType.ToListAsync();
      return Ok(typeleave);
    }

    [HttpGet]
    [Route("GetLeaveTypeEmp")]
    public List<TypeLeave> GetTypeLeaveEmp(string EmpNo)
    {
      SqlDataAdapter da = new SqlDataAdapter("sp_LeaveType_LoadLeaveTypeCollection", con);
      da.SelectCommand.CommandType = CommandType.StoredProcedure;
      da.SelectCommand.Parameters.AddWithValue("@EmployeeNo", EmpNo);
      DataTable dt = new DataTable();
      da.Fill(dt);
      List<TypeLeave> lstreq = new List<TypeLeave>();
      if (dt.Rows.Count > 0)
      {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
          TypeLeave Typeleave = new TypeLeave();
          Typeleave.LeaveType = dt.Rows[i]["LeaveType"].ToString();
          Typeleave.Description = dt.Rows[i]["Description"].ToString();
          lstreq.Add(Typeleave);
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

    }//GetTypeLeaveEmp

    [HttpPost]
    [Route("AddRequest")]
    public string AddRequest(Request req)
    {
      string msg = string.Empty;
      try
      {
        SqlCommand com = new SqlCommand("sp_LeaveRecord_Insert", con);
        com.CommandType = CommandType.StoredProcedure;


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

    [HttpGet]
    [Route("GetEmployeeSite")]
    public List<Request> GetEmployeeSite(string StaffID)
    {
      SqlDataAdapter da = new SqlDataAdapter("sp_Request_LoadEmployeeSite_Combo", con);
      da.SelectCommand.CommandType = CommandType.StoredProcedure;
      da.SelectCommand.Parameters.AddWithValue("@StaffID", StaffID);
      DataTable dt = new DataTable();
      da.Fill(dt);
      List<Request> lstreq = new List<Request>();
      if (dt.Rows.Count > 0)
      {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
          Request request = new Request();
          request.SiteMasterCode = dt.Rows[i]["SiteMasterCode"].ToString();
          request.SiteMasterDescription = dt.Rows[i]["SiteMasterDescription"].ToString();
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

    }//GetEmployeeSite

    //PUT

    [HttpPut]
    [Route("UpdateStatus")]
    public String UpdateStatusCancel(string LeaveNo)
    {
      string msg = "";
      if(LeaveNo != null)
      {
        SqlCommand da = new SqlCommand("sp_LeaveRecord_Cancel", con);
        da.CommandType = CommandType.StoredProcedure;
        da.Parameters.AddWithValue("@LeaveNo", LeaveNo);
        con.Open();
        int i = da.ExecuteNonQuery();
        con.Close();
        if(i > 0)
        {
          msg = "data has been updated";
        }
        else
        {
          msg = "error";
        }
      }
      return msg;
     

    }//updatestatus
  }
    
}
