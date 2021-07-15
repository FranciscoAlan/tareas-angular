import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { PruebaRoutingModule } from './prueba.routes';
import { PolindromosComponent } from './components/polindromos/polindromos.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { FormsModule } from '@angular/forms';
import { BilletesComponent } from './components/billetes/billetes.component';
import { RefactorizacionComponent } from './components/refactorizacion/refactorizacion.component';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    PolindromosComponent,
    FibonacciComponent,
    BilletesComponent,
    RefactorizacionComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    PruebaRoutingModule
  ]
})
export class PruebaModule { }
