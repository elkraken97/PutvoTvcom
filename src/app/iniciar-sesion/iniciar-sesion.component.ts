import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InicioSesionServiceService } from '../servicios/inicio-sesion-service.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {

  InicioSesionForm: FormGroup;

  constructor(private fb: FormBuilder,private InicioSesionService:InicioSesionServiceService,private cookieSvc:CookieService) {
    this.InicioSesionForm = this.fb.group({
      email: [''],
      contrasena: ['']
    });
  }

 


  IniciarSesion(){
     this.InicioSesionService.IniciarSesion(this.InicioSesionForm.value).subscribe(response => {
      console.log('Usuario logedo correctamente', response);
     }, error => {
       console.error('Error al IniciarSesion usuario', error);
     });
     
    console.log("datos recolectados:"+JSON.stringify(this.InicioSesionForm.value))

    const valor: string = this.cookieSvc.get('csrftoken');
    console.log(valor)
  }




}
