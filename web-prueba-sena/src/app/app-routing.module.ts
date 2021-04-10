import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import {NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component';
import { LoginComponent } from './vistas/login/login.component';

const routes: Routes = [

  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'usuarios', component:UsuariosComponent},
  {path:'nuevo-usuario', component:NuevoUsuarioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponentes=[UsuariosComponent,NuevoUsuarioComponent]