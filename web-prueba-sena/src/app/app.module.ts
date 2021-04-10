import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponentes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './secciones/header/header.component';
import { FooterComponent } from './secciones/footer/footer.component';
import { LoginComponent } from './vistas/login/login.component';
/*import { UsuariosComponent } from './vistas/usuarios/usuarios.component';
import { NuevoUsuarioComponent } from './vistas/nuevo-usuario/nuevo-usuario.component'; */

@NgModule({
  declarations: [
    AppComponent,
    routingComponentes,
     HeaderComponent,
    FooterComponent,
    LoginComponent,
    /*UsuariosComponent,
    NuevoUsuarioComponent */
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
