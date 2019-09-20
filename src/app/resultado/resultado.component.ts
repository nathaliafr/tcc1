import { Component, OnInit } from '@angular/core';
import {ResultadoService} from './resultado.service';


@Component({
  selector: 'mt-resultado',
  templateUrl: './resultado.component.html'
})
export class ResultadoComponent implements OnInit {

  constructor(private resultadoService: ResultadoService) {
    this.resultadoService.getDiagnosticos();
  }

  ngOnInit() {
  }

}
