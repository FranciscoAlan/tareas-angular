import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PolindromosComponent } from './components/polindromos/polindromos.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { BilletesComponent } from './components/billetes/billetes.component';
import { RefactorizacionComponent } from './components/refactorizacion/refactorizacion.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '',
    component: PrincipalComponent,
    data: { titulo: 'Pagina principal' },
    children: [
      { path: 'polindromos', component: PolindromosComponent, data: { titulo: 'Políndromos' } },
      { path: 'fibonacci', component: FibonacciComponent, data: { titulo: 'Fibonacci' } },
      { path: 'billetes', component: BilletesComponent, data: { titulo: 'Billetes' } },
      { path: 'refactorizacion', component: RefactorizacionComponent, data: { titulo: 'Re-Factorización' } },
      { path: '**', component: InicioComponent, data: { titulo: 'BIENVENIDO' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule {}
