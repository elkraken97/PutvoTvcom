import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormulariosService } from '../servicios/formularios.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder,private formularioService:FormulariosService) {
    this.registroForm = this.fb.group({
      nombre: [''],
      email: [''],
      contrasena: ['']
    });
  }

  onSubmit(){
    this.formularioService.registrarUsuario(this.registroForm.value).subscribe(response => {
      console.log('Usuario registrado', response);
    }, error => {
      console.error('Error al registrar usuario', error);
    });
  }
}
