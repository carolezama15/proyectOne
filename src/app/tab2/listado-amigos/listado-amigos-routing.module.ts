import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAmigosPage } from './listado-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoAmigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoAmigosPageRoutingModule {}
