using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;

namespace backend_TimeAttPlus.Models
{
   
    public class Request
    {
    [Key]
    public string LeaveNo { get; set; } = "";
    public string LeaveType { get; set; }
    public string EmployeeNo { get; set; } = "890343";
    public string LeaveOther { get; set; }

    public string Reason { get; set; }
    public DateTime LeaveDtTmFrom { get; set; }
        
    public DateTime LeaveDtTmTo { get; set; }
    public int? LeaveDay { get; set; } = 0;
    public int? LeaveHour { get; set; } = 0;
    public int? LeaveMin { get; set; } = 0;
    public string LeaveStatus { get; set; }

    public string CCReceiver { get; set; }
    public int? CurrentLeaveState { get; set; }

    public int? ProjectSiteCode { get; set; } = 0;

    public int? ProjectSiteAllowance { get; set; } = 0;
    public string SiteName { get; set; }
    public string EmployeeName { get; set; }
    public string ApproverNo { get; set; }

    public string StaffID { get; set; }

    public string SiteMasterCode { get; set; }
    public string SiteMasterDescription { get; set; }
    public string TotalDays { get; set; }

    
  }
    public class TypeLeave
    {
        [Key]
        public string LeaveType { get; set; }
        public string Description { get; set; }
        public string LeaveGroupCode { get; set; }
        public string SpecificGender { get; set; }


  }
}
