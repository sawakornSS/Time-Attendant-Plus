using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace backend_TimeAttPlus.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tbl_LeaveRecords",
                columns: table => new
                {
                    LeaveNo = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LeaveType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LeaveDtTmFrom = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LeaveDtTmTo = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LeaveStatus = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tbl_LeaveRecords", x => x.LeaveNo);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tbl_LeaveRecords");
        }
    }
}
