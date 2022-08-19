using backend_TimeAttPlus.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_TimeAttPlus.Data
{
    public class RequestDbContext : DbContext
    {
        public RequestDbContext(DbContextOptions options) : base(options)
        {

        }
    public RequestDbContext CreateDbContext(string[] args)
    {
      var optionsBuilder = new DbContextOptionsBuilder<RequestDbContext>();
      optionsBuilder.UseSqlServer("server=.;database=mydb;User ID=sa;Password=12345678");

      return new RequestDbContext(optionsBuilder.Options);
    }
    //Dbset
    public DbSet<Request> tbl_LeaveRecords { get; set; }
    public DbSet<TypeLeave> tbl_LeaveType { get; set; }
        

        

    }
}
