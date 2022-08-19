import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-import-time-attendant',
  templateUrl: './import-time-attendant.component.html',
  styleUrls: ['./import-time-attendant.component.css']
})
export class ImportTimeAttendantComponent implements OnInit {


  @ViewChild('fileUpload', { static: false }) fileUploadElement: ElementRef;
  
  // let data: any[][] = [[],[]];
  data:any;
  tempData: any;
  constructor(
    fileUploadElement: ElementRef
  ) { 

    this.fileUploadElement = fileUploadElement;
  }

  ngOnInit(): void {
  }

  onFileChang(evt: any){
    // let data:any;
    alert("Read!s");
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
  }
}

