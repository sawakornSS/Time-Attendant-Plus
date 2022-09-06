import { Component, OnInit, ViewChild, ElementRef,Input , NgModule} from '@angular/core';
import * as XLSX from 'xlsx';
import { ImportService} from '../services/import.service';
import { ImportTime, ImportTimeDetail } from '../models/import.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import {SelectionModel} from '@angular/cdk/collections';
import { from } from 'rxjs';

import {ImportTimeAttendantClass} from './import-time-attendant';
import fa from '@mobiscroll/angular/dist/js/i18n/fa';

@Component({
  selector: 'app-import-time-attendant',
  templateUrl: './import-time-attendant.component.html',
  styleUrls: ['./import-time-attendant.component.css'],
  
})

export class ImportTimeAttendantComponent implements OnInit {

  // import api variable
  imports : ImportTime[] = [];

  @ViewChild('fileUpload', { static: false }) fileUploadElement: ElementRef;

  // DataTable
  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort !: MatSort;

  displayedColumns: string[] = ['importID', 'uploadBy', 'uploadDate', 'leaveStatus', 'action'];
    dataSource :any;
  // DataTable
  
  // let data: any[][] = [[],[]];
  data:any; // raw_excel_data;
  dataImport : Array<ImportTimeAttendantClass> = new Array<ImportTimeAttendantClass>();


  // Config Column_Idx of Excel;
  amount_Column_Excel_Data_for_Import : number = 7;

  idx_Column_EmpID : number = 0; // 0 => Column "A"
  idx_Column_employeeFullName : number = 1; // 0 => Column "A"
  idx_Column_WorkDate : number = 2; // 2 => Column "C"
  idx_Column_workOnSiteStart : number = 3; // 2 => Column "C"
  idx_Column_workOnSiteStop : number = 4; // 2 => Column "C"
  idx_Column_siteStartTime : number = 5; // 2 => Column "C"
  idx_Column_siteStopTime : number = 6; // 2 => Column "C"
  idx_Column_projectName : number = 7; // 2 => Column "C"


  tempData: any;
  constructor(
    fileUploadElement: ElementRef ,
    private importservice:ImportService
  ) { 

    this.fileUploadElement = fileUploadElement;
  }

  // add preview Data
   AddImportTime : ImportTime = {
    importID : 0,
    uploadBy : "Sawakorn S.",
    uploadDate : "",
    currentLeaveState : 4,
    leaveStatus : "WT",
    
  };
  // add preview Data

  ngOnInit(): void {
    // get Import data from api service
    this.importservice.GetAllImport()
    .subscribe({
      next: (imports : any) => {
        this.imports = imports;

        this.dataSource = new MatTableDataSource<ImportTime>(this.imports);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.selection = new SelectionModel<ImportTime>(true, []);

        console.log(imports);
      },
      error: (response) =>{
        console.log(response);
      }
    })

  }

  Filterchange(event : Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  } 
  getrow(row : any){
    // console.log(row);
  }
  AprooveData(importID : any){
    console.log(importID);
  }

  onFileChang(evt: any){
    // let data:any;
    console.log("Read!s");
    const target: DataTransfer = <DataTransfer>(evt.target);

    if(target.files.length !== 1) throw new Error('1 File 1 Request Import');

    // read data in Excel File.
    const reader: FileReader = new FileReader();
    this.data = {};
    
    reader.onload = (e : any) => {
      // bstr = BinaryString, wb = Workbook, wsnamr = WorkSheetName
      const bstr: any = e.target.result; 

      const wb: XLSX.WorkBook = XLSX.read(bstr ,{type: 'binary'}); 
    
      const wsname: string = wb.SheetNames[0]; 

      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      console.log(ws)

      this.tempData = (XLSX.utils.sheet_to_json(ws, {header: 1, raw: false}));

      

      console.log(this.data);
    };

    reader.onloadend = (e: any) => {
      this.fileUploadElement.nativeElement.labels[0].innerText = this.fileUploadElement.nativeElement.files[0].name;
    }

    reader.readAsBinaryString(target.files[0]);
  }

  onPreviewClick(evt:any){
    
    this.data = this.tempData;
    this.ValidateDataExcel(false);
   
    console.log("==== Preview Data Click data(show first)->dataImport(show second) ====");
    console.log(this.data);
    console.log(this.dataImport);

  }

  reset(evt:any){
    // console.log("----------- Cancel -------------")
    this.fileUploadElement.nativeElement.labels[0].innerText = "Choose file";
    this.data = [];
    this.tempData = [];

    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  AddImport(evt: any){
    alert("Save Progress");
    console.log(this.tempData);
    // this.AddLeaveRequest.leaveDtTmFrom = this.AddLeaveRequest.RangeDateTime[0]
    // this.AddLeaveRequest.leaveDtTmTo = this.AddLeaveRequest.RangeDateTime[1]

    if (this.ValidateDataExcel(true) == false) return;

    var dataListForImport : Array<ImportTimeDetail> = new Array<ImportTimeDetail>();
    var importdata : ImportTime;


    // this.dataImport => dataListForImport     For loop add data 

    // importdata = ImportTime{ importID : null,
    //     uploadBy : null,
    //     uploadDate : null,
    //     currentLeaveState : null,
    //     leaveStatus : null,
    //     data:  dataListForImport });

    // let importdata = { importID : null,
    //   uploadBy : null, 
    //   uploadDate : null,
    //   currentLeaveState : null,
    //   leaveStatus : null,
    //   data:  dataListForImport };

    // this.importservice.ServiceAddPreview(importdata)
    // .subscribe({
    //   next: (request) =>{
    //     console.log(request);
    //   }
    // })
    
    console.log(this.AddImportTime);
    // this.router.navigateByUrl('/request-management');
    //console.log(this.AddLeaveRequest);
  }

  formatTime(value : any){
    var time_array = value.split(":");
    if (time_array.length != 2) return "";
    else {
      return time_array[0].padStart(2,'0') + ":" + time_array[1].padStart(2,'0');
    }

  }

  ValidateDataExcel( IsAlertError: boolean ){

    //this.tempData
    let isValidatePass : boolean = true;

    this.dataImport = new Array<ImportTimeAttendantClass>();


    console.log("==== ValidDataExcel ====");
    for (let i = 1; i < this.tempData.length; i++) {
      var row = this.tempData[i];

      if (row.length < this.amount_Column_Excel_Data_for_Import) continue;

      var _rowds : ImportTimeAttendantClass = new ImportTimeAttendantClass();

      console.log(row);

      // condition check column Employee ID
      if (row[this.idx_Column_EmpID] == undefined
        || row[this.idx_Column_EmpID] == null
        || row[this.idx_Column_EmpID] == "")
      {
        _rowds.employeeID = "";
        _rowds.employeeID_ErrorMsg = "Employee ID is required.";
        _rowds.isError = true;
        isValidatePass = false;
      }
      else {
        _rowds.employeeID = row[this.idx_Column_EmpID];
      }
      // condition check column Employee ID
      if (row[this.idx_Column_EmpID] == undefined
        || row[this.idx_Column_EmpID] == null
        || row[this.idx_Column_EmpID] == "")
      {
        _rowds.employeeFullName = "";
        _rowds.employeeFullName_ErrorMsg = "Employee Name is required.";
        _rowds.isError = true;
        isValidatePass = false;
      }
      else {
        _rowds.employeeFullName = row[this.idx_Column_employeeFullName];
      }
      // condition check column WorkDate
      if (row[this.idx_Column_WorkDate] == undefined
        || row[this.idx_Column_WorkDate] == null
        || row[this.idx_Column_WorkDate] == "")
      {
        _rowds.workDate = "";
        _rowds.workDate_ErrorMsg = "Date is required.";
        _rowds.isError = true;
        isValidatePass = false;
      }
      else {
        _rowds.workDate = row[this.idx_Column_WorkDate];
      }
      // condition check column WorkOnSiteStart
      if (row[this.idx_Column_workOnSiteStart] == undefined
        || row[this.idx_Column_workOnSiteStart] == null
        || row[this.idx_Column_workOnSiteStart] == "")
      {
        _rowds.workOnSiteStart = "";
        _rowds.workOnSiteStart_ErrorMsg = "Time In is required.";
        _rowds.isError = true;
        isValidatePass = false;
      }
      else {
        _rowds.workOnSiteStart = row[this.idx_Column_workOnSiteStart];
      }
      // condition check column workOnSiteStop
      if (row[this.idx_Column_workOnSiteStop] == undefined
        || row[this.idx_Column_workOnSiteStop] == null
        || row[this.idx_Column_workOnSiteStop] == "")
      {
        _rowds.workOnSiteStop = "";
        _rowds.workOnSiteStop_ErrorMsg = "Time Out is required.";
        _rowds.isError = true;
        isValidatePass = false;
      }
      else {
        _rowds.workOnSiteStop = row[this.idx_Column_workOnSiteStop];
      }
      // condition check column siteStartTime
      if (row[this.idx_Column_siteStartTime] == undefined
        || row[this.idx_Column_siteStartTime] == null
        || row[this.idx_Column_siteStartTime] == "")
      {
        _rowds.siteStartTime = "";
        _rowds.siteStartTime_ErrorMsg = "siteStartTime is required.";
        _rowds.isError = true;
        isValidatePass = false;
      }
      else {
        _rowds.siteStartTime = row[this.idx_Column_siteStartTime];
      }
      // condition check column siteStopTime
      if (row[this.idx_Column_siteStopTime] == undefined
        || row[this.idx_Column_siteStopTime] == null
        || row[this.idx_Column_siteStopTime] == "")
      {
        _rowds.siteStopTime = "";
        _rowds.siteStopTime_ErrorMsg = "siteStopTime is required.";
        _rowds.isError = true;
        isValidatePass = false;
      }
      else {
        _rowds.siteStopTime = row[this.idx_Column_siteStopTime];
      }
      // condition check column projectName
      if (row[this.idx_Column_projectName] == undefined
        || row[this.idx_Column_projectName] == null
        || row[this.idx_Column_projectName] == "")
      {
        _rowds.projectName = "";
        _rowds.projectName_ErrorMsg = "projectName ID is required.";
        _rowds.isError = true;
        isValidatePass = false;
      }
      else {
        _rowds.projectName = row[this.idx_Column_projectName];
      }

      this.dataImport.push(_rowds);

 
    }

    if (IsAlertError && !isValidatePass) {
      alert("ข้อมูลภายยังไม่ถูกต้องกรุณาตรวจสอบข้อมูลภายในไฟล์อีกรั้ง");
    }

    return isValidatePass;
    
  }
 
}

