using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;

namespace backend_TimeAttPlus.Models
{
   
    public class Request
    {
        [Key]
        public string LeaveNo { get; set; }
        public string LeaveType { get; set; }

        public DateTime CreateDate { get; set; } = DateTime.Now;
        public string Reason { get; set; }
        public DateTime LeaveDtTmFrom { get; set; }
        
        public DateTime LeaveDtTmTo { get; set; }
        public string LeaveStatus { get; set; }
    }
    public class TypeLeave
    {
        public string LeaveType { get; set; }
        public string Des { get; set; }
        
    }
}
