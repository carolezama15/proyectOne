import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

@Component({
  selector: 'tab1.page',
  templateUrl: 'tab1.page.html',
})
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {
  constructor(public alertController: AlertController) {}

  async login() {
    const alert = await this.alertController.create({
      header: 'LOGIN',
      subHeader: 'BIENVENIDO',
      message: 'Ya puedes conectarte con tus amigos ',
      buttons: ['CONTINUAR']
    });

    await alert.present();
  }
}
