import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SimpleObkect } from './simpleObject';

@Injectable({
  providedIn: 'root'
})
export class ServiveService {

simpleObject!: SimpleObkect

  constructor(private http:HttpClient) { }
  private API_CREATE: string = "http://localhost:8080/restful/services/simple.SimpleObjects/actions/create/invoke";

  create(){
    const headers = new HttpHeaders();

    const url = `${this.API_CREATE}`;
    return this.http.post(url,this.simpleObject, { headers, responseType: 'text' as 'json' });
  }
  
}
