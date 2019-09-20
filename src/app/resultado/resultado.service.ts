import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class ResultadoService {

  resourceNameQuestionario = 'questionario/';
  resourceUrlQuestionario = environment.apiUrl + this.resourceNameQuestionario;
  resourceNameDiagnostico = 'diagnostico/';
  resourceUrlDiagnostico = environment.apiUrl + this.resourceNameDiagnostico;
  questionarios: Object[] = [];
  diagnosticos: Object[] = [];

  constructor(private http: Http) {

  }
  getQuestionario() {
    this.http.get(`${this.resourceUrlQuestionario}`).subscribe(questionarios => {
      this.questionarios = questionarios.json();
      console.log(this.questionarios);
    });
  }
  getDiagnosticos() {
    this.http.get(`${this.resourceUrlDiagnostico}`).subscribe(diagnosticos => {
      this.diagnosticos = diagnosticos.json();
      console.log(this.diagnosticos);
    });
  }
}
