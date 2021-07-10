import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent, data: { titulo: 'Pagina principal' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule {}
