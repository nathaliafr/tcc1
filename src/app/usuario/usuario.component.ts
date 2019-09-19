import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario.model';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {UsuarioService} from './usuario.service';


@Component({
  selector: 'mt-usuario',
  templateUrl: './usuario.component.html'
})
export class UsuarioComponent implements OnInit {

  usuarioArray: Usuario[] = [];
  usuario: Usuario;
  private subscription: Subscription;
  constructor(private route: ActivatedRoute,
              private usuarioService: UsuarioService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.load(params['id']);
    });
    console.log(this.usuarioArray);
  }
  load(id) {
    this.usuarioService.findUsuario(id).subscribe((usuario) => {
      this.usuarioArray.push(usuario);
    });
  }
}
