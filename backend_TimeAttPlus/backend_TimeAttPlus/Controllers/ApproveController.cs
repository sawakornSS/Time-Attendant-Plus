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
  public class ApproveController : Controller
  {
    SqlConnection con = new SqlConnection("server=.;database=mydb;User ID=sa;Password=12345678");
    Approve approve = new Approve();
    //get api/Approve/employee
    [HttpGet]
    [Route("GetApprove")]
    public List<Approve> GetApprove()
    {
      SqlDataAdapter da = new SqlDataAdapter("sp_SetApproveFlow_Load",con);
      DataTable dt = new DataTable();
      da.Fill(dt);
      List<Approve> listApprove = new List<Approve>();
      if (dt.Rows.Count > 0)
      {
        for (int i=0; i<dt.Rows.Count;i++)
        {
          Approve app = new Approve();
          app.AppStateNo = dt.Rows[i]["AppStateNo"].ToString();
          app.ApproverNo = dt.Rows[i]["ApproveNo"].ToString();        
          app.ApproverName = dt.Rows[i]["ApproverName"].ToString();
          app.PositionAlias = dt.Rows[i]["PositionAlias"].ToString();
          app.AppStateCode = dt.Rows[i]["AppStateCode"].ToString();
          app.Description = dt.Rows[i]["Description"].ToString();
          app.AppTypeCode = dt.Rows[i]["AppTypeCode"].ToString();
          app.OrgPrjCode = dt.Rows[i]["OrgPrjCode"].ToString();
          listApprove.Add(app);
        }
      }
      if(listApprove.Count > 0)
      {
        return listApprove;
      }
      else
      {
        return null;
      }

    }
    [HttpPost]
    [Route("GetApproveflow")]
    public List<Approve> GetApproveflow(string EmpNo)
    {
      SqlDataAdapter da = new SqlDataAdapter("sp_SetApproveFlow_Load", con);
      da.SelectCommand.CommandType = CommandType.StoredProcedure;
      da.SelectCommand.Parameters.AddWithValue("@EmployeeNo", EmpNo);
      DataTable dt = new DataTable();
      da.Fill(dt);
      Approve app = new Approve();
      if (dt.Rows.Count > 0)
      {
          app.AppStateNo = dt.Rows[0]["AppStateNo"].ToString();
          app.ApproverNo = dt.Rows[0]["ApproveNo"].ToString();
          app.ApproverName = dt.Rows[0]["ApproverName"].ToString();
          app.PositionAlias = dt.Rows[0]["PositionAlias"].ToString();
          app.AppStateCode = dt.Rows[0]["AppStateCode"].ToString();
          app.Description = dt.Rows[0]["Description"].ToString();
          app.AppTypeCode = dt.Rows[0]["AppTypeCode"].ToString();
          app.OrgPrjCode = dt.Rows[0]["OrgPrjCode"].ToString();
                 
      }
      if(EmpNo != null)
      {

        return null;

      }
      else
      {
        return null;
      }

    }

  }

}
