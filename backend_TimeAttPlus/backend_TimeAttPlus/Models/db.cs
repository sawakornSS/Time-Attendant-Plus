using Microsoft.Data.SqlClient;
using backend_TimeAttPlus.Models;
using System;
using System.Data;

namespace backend_TimeAttPlus.Models
{
  public class db
  {
    SqlConnection con = new SqlConnection("server=.;database=mydb;User ID=sa;Password=12345678");
    public string RequestOpt(Request req)
    {
      string msg = string.Empty;
      try
      {
        SqlCommand com = new SqlCommand("sp_GetLeaveRecord", con);
        com.CommandType = CommandType.StoredProcedure;
        
       
        com.Parameters.AddWithValue("@EmployeeNo", req.EmployeeNo);
        com.Parameters.AddWithValue("@LeaveType", req.LeaveType);
        com.Parameters.AddWithValue("@LeaveDtTmFrom", req.LeaveDtTmFrom);
        com.Parameters.AddWithValue("@LeaveDtTmTo", req.LeaveDtTmTo);
        com.Parameters.AddWithValue("@LeaveStatus", req.LeaveStatus);
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
        if (con.State==(ConnectionState.Open))
        {
          con.Close();
        }
      }
      return msg; 
    }
    //Get Record
    

  }
}
