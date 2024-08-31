import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormulariosService {
  private apiUrl = "http://127.0.0.1:8000/PutoTvApp/Sesion/";
  constructor(private http: HttpClient) { }

  registrarUsuario(datos:any): Observable<any> {
    return this.http.post(this.apiUrl, datos);
  }


}

