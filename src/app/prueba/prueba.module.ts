import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { PruebaRoutingModule } from './prueba.routes';



@NgModule({
  declarations: [
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }
