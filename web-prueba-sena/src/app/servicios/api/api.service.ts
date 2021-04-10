import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ListaUsuariosI} from '../../modelos/listaUsuarios.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string="https://localhost:44331/api/";
  constructor(private http:HttpClient) { }

  getAllUsuarios():Observable<ListaUsuariosI[]>{
    let url=this.url+"usuarios";
    return  this.http.get<ListaUsuariosI[]>(url);

  }
}
