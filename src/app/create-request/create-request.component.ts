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
  
  AddLeaveRequest: Request = {
    leaveNo : "" ,
    leaveType : "",
    reason : "",   
    RangeDateTime : "" ,
    leaveDtTmFrom : "",
    leaveDtTmTo : "",
    leaveStatus : "",
    EmployeeNo : "890343",
    leaveDay : 0,
    leaveHour : 0,
    leaveMin : 0,
    ccreceiver : "",
    currentLeaveState :0,
    projectSiteCode : 0,
    ProjectSiteAllowance : 0,
    
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
    this.router.navigateByUrl('/request-management');
    //console.log(this.AddLeaveRequest);
  }
  // onSubmit():void {
  //   //this.router.navigate(['request-management']); 
  //   this.requestservice.addLeave(this.AddLeaveRequest).subscribe({
  //     next: (request) =>{
        
  //     }
  //   })
    
  // }
  

}
