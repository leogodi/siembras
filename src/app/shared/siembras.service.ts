import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ServiceBaseService } from './service-base.service';

@Injectable({
  providedIn: 'root'
})

export class SiembrasService extends ServiceBaseService {

  constructor(public http: HttpClient) {
    super(http);
  }

  obtenerSiembras(){
    return this.metodoGet("LecturaSiembras", true)
  }

  encenderLucesSiembras(encender:boolean){
    if(encender){
      return this.metodoPostPy("",{"state":"1"},false );
    }
    return this.metodoPostPy("",{"state":"0"},false );
  }
}
