//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TimeAttPlus.Business
{
    using System;
    using System.Collections.Generic;
    
    public partial class tbl_LeaveApprovers
    {
        public string LeaveNo { get; set; }
        public string ApproverNo { get; set; }
        public int AppStateNo { get; set; }
        public Nullable<byte> Approved { get; set; }
        public Nullable<System.DateTime> ApprovedDate { get; set; }
        public string Reason { get; set; }
    }
}
