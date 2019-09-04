import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'mt-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  usuarios: Object[] = [];
  constructor(http: Http) {
    http.get('http://localhost:8080/usuario/').subscribe(usuarios => {
      this.usuarios = usuarios.json();
      console.log(this.usuarios);
    });
/*    http.get('http://localhost:8080/pergunta/')
      .subscribe(perguntas => {
        this.perguntas = perguntas.json();
        console.log(this.perguntas);
    });*/
}

  ngOnInit() {
  }

}
