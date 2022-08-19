import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";
import { LeaveType } from '../models/request.model';
import { Request } from '../models/request.model';
import { RequestService } from '../services/request.service';
import { Router } from '@angular/router';
import * as moment from 'moment';


@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit {
  requests : Request[] = [];
  leavetype : LeaveType[] = [];
  constructor(private requestservice:RequestService,private router:Router) { }
  onSubmit() {
    this.router.navigate(['/request-management']); 
  }
  AddLeaveRequest: Request = {
    leaveNo : "22/00818" ,
    leaveType : "AL",
    reason : "",   
    // RangeDateTime : "" + moment().format(),
    // leaveDtTmTo : "" + moment().format(),
    RangeDateTime : "" ,
    leaveDtTmFrom : "",
    leaveDtTmTo : "",
    leaveStatus : "WT",
    EmployeeNo : "890343"
    
    
  };
  ngOnInit(): void {
    this.requestservice.GetLeaveType()
    .subscribe({
      next: (leavetype) => {
        this.leavetype = leavetype;
        //console.log(leavetype)
      },
      error: (response) =>{
        console.log(response);
      }
    });
  }
  AddLeave(){
    this.AddLeaveRequest.leaveDtTmFrom = this.AddLeaveRequest.RangeDateTime[0]
    this.AddLeaveRequest.leaveDtTmTo = this.AddLeaveRequest.RangeDateTime[1]
    this.requestservice.addLeave(this.AddLeaveRequest)
    .subscribe({
      next: (request) =>{
        console.log(request);
      }
    })
    console.log(this.AddLeaveRequest);
    //console.log(this.AddLeaveRequest);
  }
  

}
