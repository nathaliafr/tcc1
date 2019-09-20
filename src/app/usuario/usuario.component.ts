import {Component, OnInit} from '@angular/core';

import {UsuarioService} from './usuario.service';



@Component({
  selector: 'mt-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {


  usuario: any;
  constructor( private usuarioService: UsuarioService) {
   this.usuarioService.getUsuarios().then((user) => {
     console.log(user);
     this.usuario = user;
   });

  }
  ngOnInit() {
  }

}
