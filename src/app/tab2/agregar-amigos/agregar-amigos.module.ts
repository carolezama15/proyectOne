import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarAmigosPageRoutingModule } from './agregar-amigos-routing.module';

import { AgregarAmigosPage } from './agregar-amigos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarAmigosPageRoutingModule
  ],
  declarations: [AgregarAmigosPage]
})
export class AgregarAmigosPageModule {}
