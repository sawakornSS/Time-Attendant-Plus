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

    public string Reason { get; set; }
    public DateTime? LeaveDtTmFrom { get; set; }
        
    public DateTime? LeaveDtTmTo { get; set; }
    public string LeaveStatus { get; set; }
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
