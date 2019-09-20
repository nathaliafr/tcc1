import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DependenteComponent } from './dependente/dependente.component';
import { ResultadoComponent } from './resultado/resultado.component';
import { DuvidasComponent } from './duvidas/duvidas.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {ROUTES} from './app.routes';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import {UsuarioService} from './usuario/usuario.service';
import {DependenteService} from './dependente/dependente.service';
import {DuvidaService} from './duvidas/duvida.service';
import {ResultadoService} from './resultado/resultado.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CadastroComponent,
    DependenteComponent,
    ResultadoComponent,
    DuvidasComponent,
    QuestionarioComponent,
    HomeComponent,
    AboutComponent,
    UsuarioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [UsuarioService, DependenteService, DuvidaService, ResultadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
