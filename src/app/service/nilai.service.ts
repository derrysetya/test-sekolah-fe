import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api-response.model';
import { NilaiModel } from '../model/nilai.model';

@Injectable({
  providedIn: 'root'
})
export class NilaiService {

  private url = environment.apiUrl+"nilai";

  constructor(private httpClient: HttpClient) { }

  getDataAll(): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.url+"/all");
  }

  getDataDash(): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.url+"/dash");
  }

  getDataById(id: string): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.url+"?id="+id);
  }

  saveData(data: NilaiModel):Observable<ApiResponse>{
    return this.httpClient.post<ApiResponse>(this.url+"/save", data);
   }

  deleteDataById(id: string): Observable<ApiResponse>{
    return this.httpClient.post<ApiResponse>(this.url+"/delete?id="+id, null);
  }

}
