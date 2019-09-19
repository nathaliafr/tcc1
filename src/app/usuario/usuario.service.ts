import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Http, Response} from '@angular/http';
import {Usuario} from './usuario.model';
import {Observable} from 'rxjs';


@Injectable()
export class UsuarioService {

  resourceName = '/usuario';
  resourceUrl = environment.apiUrl + this.resourceName;
  searchUrl = environment.apiUrl + '/_search/usuario';

  constructor(private http: Http) {
  }
  findUsuario(id: number): Observable<Usuario> {
    return this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
      const jsonResponse = res.json();
      return this.convertItemFromServer(jsonResponse);
    });
  }
  private convertItemFromServer(json: any): Usuario {
    const entity: Usuario = Object.assign(new Usuario(), json);
    return entity;
  }
}
