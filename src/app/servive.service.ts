import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SimpleObkect } from './simpleObject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiveService {

simpleObject!: SimpleObkect

  constructor(private http:HttpClient) { }
  private API_CREATE: string = "http://localhost:8080/restful/services/simple.SimpleObjects/actions/create/invoke";

  

  

  create(data:any):Observable<any>{
    const headers = new HttpHeaders();

    // const url = `${this.API_CREATE}`;
    // return this.http.post(url,{ headers, responseType: 'text' as 'json' });
    return this.http.post(this.API_CREATE,data, { headers, responseType: 'text' as 'json' });
  }
  
}
