
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { approveflow } from '../models/approving.model';
@Injectable({
  providedIn: 'root'
})
export class ApproveService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  GetApproveflow() : Observable<approveflow[]>{
    //https://localhost:44343/api/Approve/GetApproveflow?EmpNo=890343
    //https://localhost:44343/api/Approve/GetApproveflow/EmpNo=890343 
    let EmpNo = new HttpParams().set('EmpNo',"890343");
    return this.http.get<approveflow[]>(this.baseApiUrl + 'api/Approve/GetApproveflow'+ "?"+ EmpNo);
  }
  
  // addLeave(AddLeaveRequest: Request):Observable<Request>{
   
  //   return this.http.post<Request>(this.baseApiUrl + 'api/Requests/AddRequest',
  //   AddLeaveRequest);
  // }
}
