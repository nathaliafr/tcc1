import { Component, OnInit } from '@angular/core';
import {DependenteService} from './dependente.service';

@Component({
  selector: 'mt-dependente',
  templateUrl: './dependente.component.html'
})
export class DependenteComponent implements OnInit {

  constructor(private dependenteService: DependenteService) {
    this.dependenteService.getCriancas();
  }

  ngOnInit() {
  }

}
