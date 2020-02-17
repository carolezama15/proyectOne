import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarAmigosPage } from './agregar-amigos.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarAmigosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarAmigosPageRoutingModule {}
