import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAmigosPageRoutingModule } from './listado-amigos-routing.module';

import { ListadoAmigosPage } from './listado-amigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAmigosPageRoutingModule
  ],
  declarations: [ListadoAmigosPage]
})
export class ListadoAmigosPageModule {}
