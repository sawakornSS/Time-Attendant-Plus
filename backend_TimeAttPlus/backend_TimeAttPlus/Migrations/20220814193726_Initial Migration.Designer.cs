﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using backend_TimeAttPlus.Data;

namespace backend_TimeAttPlus.Migrations
{
    [DbContext(typeof(RequestDbContext))]
    [Migration("20220814193726_Initial Migration")]
    partial class InitialMigration
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.17")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("backend_TimeAttPlus.Models.Request", b =>
                {
                    b.Property<string>("LeaveNo")
                        .HasColumnType("nvarchar(450)");

                    b.Property<DateTime>("LeaveDtTmFrom")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("LeaveDtTmTo")
                        .HasColumnType("datetime2");

                    b.Property<string>("LeaveStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LeaveType")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("LeaveNo");

                    b.ToTable("tbl_LeaveRecords");
                });
#pragma warning restore 612, 618
        }
    }
}