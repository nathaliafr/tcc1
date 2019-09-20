import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {Http} from '@angular/http';
import 'rxjs/operator/map';



@Injectable()
export class UsuarioService {

  resourceName = 'usuario';
  resourceUrl = environment.apiUrl + this.resourceName;
  searchUrl = environment.apiUrl + '/_search/usuario';
  usuarios: Object[] = [];

  constructor(private http: Http) {

  }
  public getUsuarios() {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.resourceUrl}/`).subscribe(user => {
      // this.usuarios = user.json();
         resolve(user.json());
      });
    });
  }

/*     find(id: string): Observable<Usuario> {
        this.http.get(`${this.resourceUrl}/${id}`).map((res: Response) => {
          const jsonResponse = res.json();
        return this.convertItemFromServer(jsonResponse);
        });
      }
      private convertItemFromServer(json: any): Usuario {
        const entity: Usuario = Object.assign(new Usuario(), json)
        return entity;
      }*/
}
