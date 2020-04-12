import { Component, OnInit } from '@angular/core';
import { RouterExtensions} from 'nativescript-angular/router'
import {Usuario} from "../model/usuario"
import {LoginService} from "../shared/login.service";
import {setString} from "tns-core-modules/application-settings";

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  constructor(private routerExtensions: RouterExtensions, private loginService:LoginService) { 
    this.usuario = new Usuario();
  }

  ngOnInit(): void {

  }

  ingresar(){
    if(!this.usuario.email || !this.usuario.password)
    {
      this.alert("Debe Ingresar Correo y password");
      return;
    }
    this.loginService.autenticar({email: this.usuario.email,password:this.usuario.password}).subscribe(
      (result:any) => {
         setString("Token", result.token.access_token);
          this.routerExtensions.navigate(["/home"], {clearHistory: true});
      }, (error) =>{
        this.alert(error.error.message)
      });
    
  }

  alert(message:string){
    return alert({title: "Ejemplo", okButtonText: "OK", message: message});
  }

}
