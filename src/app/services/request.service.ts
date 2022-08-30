import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaveType, Request } from '../models/request.model';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  GetAllRequest() : Observable<Request[]>{
    
    return this.http.get<Request[]>(this.baseApiUrl + 'api/Requests/GetAllRequest');
  }
  GetLeaveType() : Observable<LeaveType[]>{
    return this.http.get<LeaveType[]>(this.baseApiUrl + 'api/Requests/GetLeaveType');
  }
  addLeave(AddLeaveRequest: Request):Observable<Request>{
   
    return this.http.post<Request>(this.baseApiUrl + 'api/Requests/AddRequest',
    AddLeaveRequest);
  }
}
