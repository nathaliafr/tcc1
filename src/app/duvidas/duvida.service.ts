import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import 'rxjs/operator/map';

@Injectable()
export class DuvidaService {

  resourceName = 'duvida/';
  resourceUrl = environment.apiUrl + this.resourceName;
  searchUrl = environment.apiUrl + '/_search/duvida';
  duvidas: Object[] = [];

  constructor(private http: Http) {

  }
  getDuvidas() {
    this.http.get(`${this.resourceUrl}`).subscribe(duvidas => {
      this.duvidas = duvidas.json();
      console.log(this.duvidas);
    });
  }
}
