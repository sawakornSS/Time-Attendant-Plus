import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ImportTime, ImportTimeDetail } from '../models/import.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  GetAllImport() : Observable<ImportTime[]>{
    return this.http.get<ImportTime[]>(this.baseApiUrl + 'api/Import/GetAllImport');
  }
  // GetLeaveType() : Observable<LeaveType[]>{
  //   return this.http.get<LeaveType[]>(this.baseApiUrl + 'api/Requests/GetLeaveType');
  // }
  // addLeave(AddLeaveRequest: Request):Observable<Request>{
  //   // AddLeaveRequest.leaveDtTmTo = moment().format();
  //   // AddLeaveRequest.leaveDtTmFrom = moment().format();
  //   AddLeaveRequest.leaveType = 'AL'
  //   return this.http.post<Request>(this.baseApiUrl + 'api/Requests/AddRequest',
  //   AddLeaveRequest);
  // }
}
