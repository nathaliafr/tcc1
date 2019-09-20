import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class DependenteService {

  resourceName = 'crianca/';
  resourceUrl = environment.apiUrl + this.resourceName;
  searchUrl = environment.apiUrl + '/_search/crianca';
  criancas: Object[] = [];

  constructor(private http: Http) {

  }
  getCriancas() {
    this.http.get(`${this.resourceUrl}`).subscribe(criancas => {
      this.criancas = criancas.json();
      console.log(this.criancas);
    });
  }
}
