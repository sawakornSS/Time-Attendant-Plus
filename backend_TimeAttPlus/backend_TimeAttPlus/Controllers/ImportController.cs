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
using System.Xml.Serialization;
using System.IO;
using System.Text;

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

    [HttpPost]
    [Route("AddImportTime")]
    public string AddImportTime(ImportTime imt)
    {

      string template_xml = "<row EmployeeID='{0}' EmployeeName='{1}' WorkDate='{2:yyyy-MM-dd}' TimeIn='{3:HH:mm}' TimeOut='{4:HH:mm}' SiteStart='{5:HH:mm}' SiteStop='{6:HH:mm}' ProjectName='{7}'/>";
      StringBuilder data_xml = new StringBuilder();
      for (int i =0 ; i < imt.data.Count ; i++)
      {
        ImportTimeDetail rowexcel = imt.data[i];

        data_xml.AppendFormat(template_xml, rowexcel.EmployeeID, rowexcel.EmployeeName,
                  rowexcel.WorkDate, rowexcel.WorkOnSiteStart, rowexcel.WorkOnSiteStop,
                  rowexcel.SiteStartTime, rowexcel.SiteStopTime, rowexcel.ProjectName);
      }

      //data_xml = '<Root>' + data_xml + '</Root>';
      data_xml.Insert(0, "<Root>");
      data_xml.Append("</Root>");
      
      Console.WriteLine(data_xml.ToString());

      string msg = string.Empty;

      try
      {
        Console.WriteLine("123");
        SqlCommand com = new SqlCommand("sp_AddImportTime", con);
        com.CommandType = CommandType.StoredProcedure;

        com.Parameters.AddWithValue("@xml", data_xml.ToString());
        com.Parameters.AddWithValue("@ImportID", imt.ImportID);
        com.Parameters.AddWithValue("@UploadBy", "Sawakorn Test");
        com.Parameters.AddWithValue("@UploadDate", imt.UploadDate);
        com.Parameters.AddWithValue("@CurrentLeaveState", 4);
        com.Parameters.AddWithValue("@LeaveStatus", "WT");
    

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
    }//POST

    [HttpPost]
    [Route("DeleteImportTimeByID")]
    public string DeleteImportByID(ImportTime imt)
    {
      Console.WriteLine(imt);
      string msg = string.Empty;

      try
      {
        SqlCommand com = new SqlCommand("sp_DeleteImportTime", con);
        com.CommandType = CommandType.StoredProcedure;

        com.Parameters.AddWithValue("@ImportID", imt.ImportID);


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
    }//POST










  }



}
