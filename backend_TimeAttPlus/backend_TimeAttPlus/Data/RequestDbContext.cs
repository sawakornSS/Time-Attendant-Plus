using backend_TimeAttPlus.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_TimeAttPlus.Data
{
    public class RequestDbContext : DbContext
    {
        public RequestDbContext(DbContextOptions options) : base(options)
        {

        }
    //Dbset
    public DbSet<Request> tbl_LeaveRecords { get; set; }
    public DbSet<TypeLeave> tbl_LeaveType { get; set; }
        

        

    }
}
