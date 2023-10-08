import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiveService {

  constructor(private http: HttpClient) { }

  private API_CREATE: string = "http://localhost:8080/restful/services/simple.SimpleObjects/actions/create/invoke";

  // Función para crear cabeceras con autorización básica
  createBasicAuthHeaders(username: string, password: string): HttpHeaders {
    const base64Credentials = btoa(username + ":" + password);
    return new HttpHeaders({
      'Authorization': 'Basic ' + base64Credentials
    });
  }

  create(data: any): Observable<any> {
    const headers = this.createBasicAuthHeaders('sven', 'pass'); // Reemplaza con tus credenciales

    return this.http.post(this.API_CREATE, data, { headers, responseType: 'text' as 'json' });
  }
}
