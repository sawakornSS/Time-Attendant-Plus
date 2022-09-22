import { Component, OnInit } from '@angular/core';
import { Request, RequestAll } from '../models/request.model';
import { RequestService } from '../services/request.service';
import * as moment from 'moment';
import { approveflow } from '../models/approving.model';
import { ApproveService } from '../services/approve.service';
import { data } from 'jquery';

@Component({
  selector: 'app-request-management',
  templateUrl: './request-management.component.html',
  styleUrls: ['./request-management.component.css']
})
export class RequestManagementComponent implements OnInit {

  requests : RequestAll[] = [];
  approveflow : approveflow[] = [];
  updatestatus : RequestAll[] = [];
  constructor(private requestservice:RequestService,private approveservice:ApproveService) { }
  
  test(leaveNo : RequestAll){
    this.requestservice.UpdateStatus(leaveNo)
    .subscribe(
      response =>{
        //this.requestservice.GetAllRequest()
      }
    );
    console.log(leaveNo.leaveNo)
  }
  // UpdateStatus(leaveNo : RequestAll ){
    
  // }
  ngOnInit(): void {
    
    this.requestservice.GetAllRequest()
    .subscribe({
      next: (requests) => {
        
        this.requests = requests;
        
        console.log(requests)
      },
      error: (response) =>{
        console.log(response);
      }
    });
    this.approveservice.GetApproveflow()
    .subscribe({
      next: (approveflow) => {
        this.approveflow = approveflow;
        console.log(approveflow)
      },
      error: (response) =>{
        console.log(response);
      }
    });
    
  }


}


