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
using System.Globalization;

namespace backend_TimeAttPlus.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class ImportController : Controller
  {
    //SqlConnection con = new SqlConnection("server=.;database=mydb;User ID=sa;Password=12345678");

    SqlConnection con = new SqlConnection(@"Data Source=192.168.12.35\sql2017i2;Initial Catalog=TimeAttdPlus;Persist Security Info=True;User ID=trainee;Password=trainee");
    ImportTime import = new ImportTime();



    // GET: Requests
    [HttpGet]
    [Route("GetAllImport")]
    public List<ImportTime> GetAllImport()
    {
      SqlDataAdapter adapter = new SqlDataAdapter("sp_GetTimeAttendantImport", con);
      DataTable dt = new DataTable();



      adapter.Fill(dt);
      List<ImportTime> lstImport = new List<ImportTime>();
      if (dt.Rows.Count > 0)
      {
        for (int i = 0; i < dt.Rows.Count; i++)
        {
          ImportTime import = new ImportTime();

          import.ImportID = Convert.ToInt32(dt.Rows[i]["ImportID"]);
          import.UploadBy = dt.Rows[i]["UploadBy"].ToString();   
          import.UploadDate = Convert.ToDateTime(dt.Rows[i]["UploadDate"]);
          import.CurrentLeaveState = Convert.ToInt32(dt.Rows[i]["CurrentLeaveState"]);
          import.LeaveStatus = dt.Rows[i]["LeaveStatus"].ToString();

          lstImport.Add(import);
        }
      }
      if (lstImport.Count > 0)
      {
        return lstImport;
      }
      else
      {
        return null;
      }



    }//getall











  }



}
