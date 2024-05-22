import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../model/api-response.model';
import { MapelModel } from '../model/mapel.model';

@Injectable({
  providedIn: 'root'
})
export class MapelService {

  private url = environment.apiUrl+"mapel";

  constructor(private httpClient: HttpClient) { }

  getDataAll(): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.url+"/all");
  }

  getDataDash(): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.url+"/dash");
  }

  getDataComboBox(): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.url+"/list-combo-box");
  }

  getDataById(id: string): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(this.url+"?id="+id);
  }

  saveData(data: MapelModel):Observable<ApiResponse>{
    return this.httpClient.post<ApiResponse>(this.url+"/save", data);
   }

  deleteDataById(id: string): Observable<ApiResponse>{
    return this.httpClient.post<ApiResponse>(this.url+"/delete?id="+id, null);
  }

}
