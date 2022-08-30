import { Component, OnInit, ViewChild, ElementRef,Input , NgModule} from '@angular/core';
import * as XLSX from 'xlsx';
import { ImportService} from '../services/import.service';
import { ImportTime } from '../models/import.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

import {SelectionModel} from '@angular/cdk/collections';


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
  data:any;
  tempData: any;
  constructor(
    fileUploadElement: ElementRef ,
    private importservice:ImportService
  ) { 

    this.fileUploadElement = fileUploadElement;
  }

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

  // select datatable

  /** Whether the number of selected elements matches the total number of rows. */
  // isAllSelected() {
  //   const numSelected = this.dataSource.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // /** Selects all rows if they are not all selected; otherwise clear selection. */
  // toggleAllRows() {
  //   if (this.isAllSelected()) {
  //     this.dataSource.selection.clear();
  //     return;
  //   }

  //   this.dataSource.selection.select(...this.dataSource.data);
  // }

  
  // /** The label for the checkbox on the passed row */
  // checkboxLabel(row?: ImportTime): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.dataSource.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.importID + 1}`;
  // }

  // select datatable


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
    console.log(this.data);
  }

 
}

