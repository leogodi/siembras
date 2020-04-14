import { Component, OnInit } from '@angular/core';
import { RouterExtensions} from 'nativescript-angular/router'
import {Usuario} from "../model/usuario"
import {LoginService} from "../shared/login.service";
import {setString} from "tns-core-modules/application-settings";
import { Page } from "tns-core-modules/ui/page";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData } from "tns-core-modules/data/observable";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  isBusy: boolean = false;


  constructor(private routerExtensions: RouterExtensions, private loginService:LoginService, private page:Page) { 
    this.usuario = new Usuario();
    this.page.actionBarHidden = true;
  }

  ngOnInit(): void {

  }

  ingresar(){
    this.isBusy=true;
    if(!this.usuario.email || !this.usuario.password)
    {
      this.isBusy=false;  
      this.alert("Debe Ingresar Correo y password");
  
      return;
    }

    this.loginService.autenticar({email: this.usuario.email, password: "leonardoGomez"}).subscribe(
      (result:any) => {
         setString("Token", result.token.access_token);
         this.isBusy=false;
         this.routerExtensions.navigate(["/home"], {clearHistory: true});
      }, (error) =>{
        this.alert(error.error.message)
        this.isBusy=false;    
      });
    
  }

  alert(message:string){
    return alert({title: "Ejemplo", okButtonText: "OK", message: message});
  }

  onBusyChanged(args: EventData) {
    let indicator: ActivityIndicator = <ActivityIndicator>args.object;
    console.log("indicator.busy changed to: " + indicator.busy);
  }

}
