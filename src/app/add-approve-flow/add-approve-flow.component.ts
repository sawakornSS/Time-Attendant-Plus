import { Component, OnInit } from '@angular/core';
import { Request } from '../models/request.model';
import { RequestService } from '../services/request.service';
import * as moment from 'moment';
import { approveflow } from '../models/approving.model';
import { ApproveService } from '../services/approve.service';

@Component({
  selector: 'app-add-approve-flow',
  templateUrl: './add-approve-flow.component.html',
  styleUrls: ['./add-approve-flow.component.css']
})
export class AddApproveFlowComponent implements OnInit {

approveflow : approveflow[] = [];
constructor(private approveservice:ApproveService) { }

  ngOnInit(): void {
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
