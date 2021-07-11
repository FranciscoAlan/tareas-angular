import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { PruebaRoutingModule } from './prueba.routes';
import { PolindromosComponent } from './components/polindromos/polindromos.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    PolindromosComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }
