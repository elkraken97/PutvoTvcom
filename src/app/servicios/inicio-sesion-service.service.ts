import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionServiceService {
  private apiUrl = "http://127.0.0.1:8000/PutoTvApp/Login/";
  constructor(private http: HttpClient) { }

  IniciarSesion(datos:any): Observable<any> {
   
    return this.http.post(this.apiUrl, datos,{withCredentials:true});
  }

tokenUrl='http://127.0.0.1:8000/PutoTvApp/get_csrf_token/'

getCSRFToken(): Observable<any> {
  return this.http.get(this.tokenUrl);
}
}

