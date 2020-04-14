import { Component, OnInit } from '@angular/core';
import {SiembrasService} from "../../shared/siembras.service";
import { Siembras } from '~/app/model/siembras';
import { RouterExtensions} from 'nativescript-angular/router';
import { clear } from 'tns-core-modules/application-settings/application-settings';

@Component({
  selector: 'ns-siembra',
  templateUrl: './siembra.component.html',
  styleUrls: ['./siembra.component.css']
})
export class SiembraComponent implements OnInit {

  constructor(private siembrasService:SiembrasService, private routerExtensions: RouterExtensions) { }

  siembras: Array<Siembras>;

  ngOnInit(): void {
    this.obtenerSiembras();
  }

  obtenerSiembras(){
    return this.siembrasService.obtenerSiembras().subscribe(
      (result: any) => {
          this.siembras = result.siembras;
      }, (error) => {
        this.alert(error.error.message)
      }
    );
  }

  alert(message:string){
    return alert({title: "Ejemplo", okButtonText: "OK", message: message});
  }

  salir(){
    clear();
    this.routerExtensions.navigate(["/login"], {clearHistory: true});
  }

  irCamara()
  {   
    this.routerExtensions.navigate(["/home/camara"],{});
  }
}
