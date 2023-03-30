import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INoticeConfig } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:3000/";

  getNoticeData():Observable<INoticeConfig[]>{
    return this.http.get<INoticeConfig[]>(`${this.apiUrl}notice-config/active`)
  }
}
