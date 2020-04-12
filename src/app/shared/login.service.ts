import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ServiceBaseService } from './service-base.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService extends ServiceBaseService {
  constructor(public http: HttpClient) {
    super(http);
  }

  autenticar(data:any){
    return this.metodoPost("Usuario/autenticar", data, false);
  }
}
