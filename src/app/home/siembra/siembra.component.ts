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

  siembras: Array<any>;
  lucesEncendidas:boolean = false;

  ngOnInit(): void {
    this.obtenerSiembras();
  }

  obtenerSiembras(){
    return this.siembrasService.obtenerSiembras().subscribe(
      (result: any) => {
         console.log(result)
          this.siembras = result.lecturaSiembras;
      }, (error) => {
        this.alert(error.error.message)
      }
    );
  }

  obtener(){
    return this.siembrasService.obtenerSiembras().subscribe(
      (result: any) => {
          this.siembras = result.siembras;
      }, (error) => {
        this.alert(error.error.message)
      }
    );
  }

  alert(message:string){
    return alert({title: "Notificación", okButtonText: "OK", message: message});
  }

  salir(){
    clear();
    this.routerExtensions.navigate(["/login"], {clearHistory: true});
  }

  irCamara()
  {   
    this.routerExtensions.navigate(["/home/camara"],{});
  }

  encenderLuces(){
    this.lucesEncendidas = !this.lucesEncendidas;
    return this.siembrasService.encenderLucesSiembras(this.lucesEncendidas).subscribe(
      (result: any) => {
          if(this.lucesEncendidas){
            this.alert("Luces encendidas")
          }else{
            this.alert("Luces apagadas")
          }
      }, (error) => {
        this.alert(error.error.message)
      }
    );
  }
}
