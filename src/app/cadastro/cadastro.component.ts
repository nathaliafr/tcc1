import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'mt-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {
  perguntas:Object[] = [];

  constructor(http: Http) {
    http.get ('http://localhost:8080/pergunta/')
    .subscribe(perguntas => {
      this.perguntas  = perguntas.json();
      console.log(this.perguntas);
    } );
  }

  ngOnInit() {


  }

}
