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
  
  ServiceAddPreview(AddImportTime: ImportTime):Observable<ImportTime>{
   
    return this.http.post<ImportTime>(this.baseApiUrl + 'api/Import/AddImportTime',
    AddImportTime);

  }
}
