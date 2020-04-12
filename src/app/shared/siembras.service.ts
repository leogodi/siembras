import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ServiceBaseService } from './service-base.service';
import { Siembras } from '../model/siembras';


@Injectable({
  providedIn: 'root'
})

export class SiembrasService extends ServiceBaseService {
  siembras: Array<Siembras>;

  constructor(public http: HttpClient) {
    super(http);
  }

  obtenerSiembras(){
    return this.metodoGet("siembras", false).subscribe(
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
}
