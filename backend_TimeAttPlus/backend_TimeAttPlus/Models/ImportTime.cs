using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;



namespace backend_TimeAttPlus.Models
{
  public class ImportTime
  {
    [Key]
    public int? ImportID { get; set; }
    public string UploadBy { get; set; } = "890341";
    public DateTime? UploadDate { get; set; }
    public int? CurrentLeaveState { get; set; }
    public string LeaveStatus { get; set; }
    public List<ImportTimeDetail> data { get; set; }


  }
  public class ImportTimeDetail
  {
    [Key]
    public int? DetailID { get; set; }
    public int? ImportID { get; set; }
    
    public string EmployeeID { get; set; } = "890343";
    public string LeaveNo { get; set; }
    public string EmployeeName { get; set; }
    public DateTime? WorkDate { get; set; }
    public string WorkOnSiteStart { get; set; }
    public string WorkOnSiteStop { get; set; }
    public string SiteStartTime { get; set; }
    public string SiteStopTime { get; set; }
    public string ProjectName { get; set; }




  }
}
