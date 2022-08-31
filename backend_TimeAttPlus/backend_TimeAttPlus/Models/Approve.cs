using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
namespace backend_TimeAttPlus.Models
{
  public class Approve
  {

    public string AppStateNo { get; set; } 
    
    public string ApproverNo { get; set; } 
    public string ApproverName { get; set; }
    public string PositionAlias { get; set; }
    public  string AppStateCode { get; set; }

    public  string Description { get; set; }
    public string AppTypeCode { get; set; }
    public string OrgPrjCode { get; set; }

  }
}
