import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Request } from '../models/request.model';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseApiUrl: string = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  GetAllRequest() : Observable<Request[]>{
    return this.http.get<Request[]>(this.baseApiUrl + 'api/Requests');
  }
}
