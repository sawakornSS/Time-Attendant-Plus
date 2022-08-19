using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TimeAttPlus.Business
{
    public class Class1
    {

           public string EmpCode { get; set; }

           public List<tbl_TimeAttendantImport> getdata()
           {

             mydbEntities entities = new mydbEntities();

             return entities.tbl_TimeAttendantImport.ToList();

            }
    }
}
