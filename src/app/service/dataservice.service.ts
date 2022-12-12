import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InavbarConfig } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }
   apiUrl="http://localhost:3100/data/";
   
  // apiUrl="https://randomuser.me/api/?results=50" 
  getNavbarData():Observable<InavbarConfig[]>{
    // console.log(`${this.apiUrl}navbarData`)
    console.log(this.apiUrl)
    return this.http.get<InavbarConfig[]>(`${this.apiUrl}navbarData`);
    }
}
