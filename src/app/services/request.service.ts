import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaveType, Request, RequestAll } from '../models/request.model';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  GetAllRequest() : Observable<RequestAll[]>{
    let EmpNo = new HttpParams().set('EmpNo',"890343");
    return this.http.get<RequestAll[]>(this.baseApiUrl + 'api/Requests/GetAllRequest'+ "?"+ EmpNo);
  }
  GetRequestApprover() : Observable<RequestAll[]>{
    //https://localhost:44343/api/Requests/GetRequestApprover?Approver=560961&LeaveStatus=WT
    let Approver = new HttpParams().set('Approver',"560961");
    let LeaveStatus = new HttpParams().set('LeaveStatus',"WT");
    return this.http.get<RequestAll[]>(this.baseApiUrl + 'api/Requests/GetRequestApprover'+ "?"+ Approver +"&" + LeaveStatus);
  }

  GetLeaveType() : Observable<LeaveType[]>{
    //https://localhost:44343/api/Requests/GetLeaveTypeEmp?EmpNo=890343
    let EmpNo = new HttpParams().set('EmpNo',"890343");
    return this.http.get<LeaveType[]>(this.baseApiUrl + 'api/Requests/GetLeaveTypeEmp'+ "?"+ EmpNo);
  }
  addLeave(AddLeaveRequest: Request):Observable<Request>{
   
    return this.http.post<Request>(this.baseApiUrl + 'api/Requests/AddRequest',AddLeaveRequest);
  }
  GetEmployeeSite() : Observable<RequestAll[]>{
    let StaffID = new HttpParams().set('StaffID',"560961");
    return this.http.get<RequestAll[]>(this.baseApiUrl + 'api/Requests/GetEmployeeSite'+ "?"+ StaffID);
  }
  UpdateStatus(leaveNo : RequestAll) :Observable<RequestAll> {
   //https://localhost:44343/api/Requests/UpdateStatus?LeaveNo=22%2F00817
   let ls = this.baseApiUrl + 'api/Requests/UpdateStatus?LeaveNo=' +leaveNo.leaveNo
    console.log(this.baseApiUrl + 'api/Requests/UpdateStatus?LeaveNo=' ,leaveNo.leaveNo)
    return this.http.put<RequestAll>(ls ,leaveNo.leaveNo);
  }
}
