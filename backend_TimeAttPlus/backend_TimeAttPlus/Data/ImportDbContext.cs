using backend_TimeAttPlus.Models;
using Microsoft.EntityFrameworkCore;

namespace backend_TimeAttPlus.Data
{
  public class ImportDbContext : DbContext
  {
    public ImportDbContext(DbContextOptions options) : base(options)
    { }
    //Dbset

    public DbSet<ImportTime> tbl_ImportTimes { get; set; }
    public DbSet<ImportTimeDetail> tbl_ImportTimesDetail { get; set; }
    
  }

}
