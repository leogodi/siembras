import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {getString} from "tns-core-modules/application-settings";


@Injectable({
  providedIn: 'root'
})

export class ServiceBaseService {
  public serverUrl = "https://api-siembras-v3.herokuapp.com/api/";

  constructor(public http: HttpClient) { 
  }

  private crearRequestHeader(conSeguridad: boolean){
      if(conSeguridad){
        return new HttpHeaders({
          "Content-Type":"application/json",
          "Authorization":"Bearer "+ getString("Token")
        });
      } 

     return new HttpHeaders({ "Content-Type":"application/json"});
  }

  metodoPost(url: string, data:any, tieneSeguridad:boolean){
    let headers = this.crearRequestHeader(tieneSeguridad);
    return this.http.post(this.serverUrl+url, data, {headers: headers});
  }

  metodoGet(url:string,tieneSeguridad:boolean){
    let headers = this.crearRequestHeader(tieneSeguridad);
    return this.http.get(this.serverUrl+url, {headers: headers});
  }
}
