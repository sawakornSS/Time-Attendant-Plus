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
    
    public partial class tblPosition
    {
        public int PositionNo { get; set; }
        public string pwPosition { get; set; }
        public string PositionAlias { get; set; }
        public string PositionName { get; set; }
        public Nullable<System.DateTime> PositionStartDate { get; set; }
        public Nullable<System.DateTime> PositionCancelDate { get; set; }
        public Nullable<byte> PositionLevel { get; set; }
        public string UpdateUser { get; set; }
        public Nullable<System.DateTime> UpdateDate { get; set; }
    }
}
