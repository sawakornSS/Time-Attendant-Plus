import { Component, OnInit } from '@angular/core';
import { Request } from '../models/request.model';
import { RequestService } from '../services/request.service';
import * as moment from 'moment';

@Component({
  selector: 'app-request-management',
  templateUrl: './request-management.component.html',
  styleUrls: ['./request-management.component.css']
})
export class RequestManagementComponent implements OnInit {


  requests : Request[] = [];
  constructor(private requestservice:RequestService) { }
  
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
    })
    
  }


}


