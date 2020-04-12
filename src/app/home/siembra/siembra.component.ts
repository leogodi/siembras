import { Component, OnInit } from '@angular/core';
import {SiembrasService} from "../../shared/siembras.service";

@Component({
  selector: 'ns-siembra',
  templateUrl: './siembra.component.html',
  styleUrls: ['./siembra.component.css']
})
export class SiembraComponent implements OnInit {

  constructor(private siembrasService:SiembrasService) { }

  ngOnInit(): void {
    this.obtenerSiembras();
  }

  obtenerSiembras(){
    this.siembrasService.obtenerSiembras();
  }

}
