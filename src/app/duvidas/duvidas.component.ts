import { Component, OnInit } from '@angular/core';
import {DuvidaService} from './duvida.service';

@Component({
  selector: 'mt-duvidas',
  templateUrl: './duvidas.component.html'
})
export class DuvidasComponent implements OnInit {

  constructor(private duvidaService: DuvidaService) {
    this.duvidaService.getDuvidas();
  }

  ngOnInit() {
  }

}
