import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './pages/principal/principal.component';
import { PolindromosComponent } from './components/polindromos/polindromos.component';

const routes: Routes = [
  { path: '',
    component: PrincipalComponent,
    data: { titulo: 'Pagina principal' },
    children: [
      { path: 'polindromos', component: PolindromosComponent, data: { titulo: 'Políndromos' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule {}
