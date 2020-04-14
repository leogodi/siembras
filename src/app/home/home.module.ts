import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HomeComponent } from './home/home.component';
import { SiembraComponent } from './siembra/siembra.component';
import { CamaraComponent } from './camara/camara.component';


@NgModule({
  declarations: [HomeComponent, SiembraComponent, CamaraComponent],
  imports: [
    HomeRoutingModule,
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HomeModule { }
