import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RequestAll } from '../models/request.model';
import { RequestService } from '../services/request.service';




@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent  {

  requests : RequestAll[]=[];
 
  

  constructor(private requestservice:RequestService) { }
  ngOnInit(): void {
    this.requestservice.GetRequestApprover()
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
