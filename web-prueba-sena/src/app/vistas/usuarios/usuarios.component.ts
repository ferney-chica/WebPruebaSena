import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaUsuariosI } from 'src/app/modelos/listaUsuarios.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any[]=[];
  constructor(private api:ApiService, private router:Router) { 
    this.usuarios=[];
  }

  ngOnInit(): void {
    this.api.getAllUsuarios().subscribe(data=>{
      console.log(data);
      this.usuarios=data;
    });

  }

}
