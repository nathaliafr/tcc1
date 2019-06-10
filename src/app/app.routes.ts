import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {DependenteComponent} from './dependente/dependente.component';
import {DuvidasComponent} from './duvidas/duvidas.component';
import {QuestionarioComponent} from './questionario/questionario.component';
import {ResultadoComponent} from './resultado/resultado.component';
import {LoginComponent} from './login/login.component';
import {UsuarioComponent} from './usuario/usuario.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'cadastro', component: CadastroComponent},
  {path: 'dependente', component: DependenteComponent},
  {path: 'duvidas', component: DuvidasComponent},
  {path: 'questionario', component: QuestionarioComponent},
  {path: 'resultado', component: ResultadoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'usuario', component: UsuarioComponent}
  ];
