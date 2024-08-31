import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
{path:'',redirectTo:'Inicio',pathMatch:"full"},
{path:'Inicio',component:InicioComponent},
{path:'IniciarSesion',component:IniciarSesionComponent},
{path:'Registrarse',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
