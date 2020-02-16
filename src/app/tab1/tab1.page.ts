import { Component } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public actionSheetControler:ActionSheetController, alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.actionSheetControler.create({
      header: 'Bienvenido',
      subHeader: 'SOCLOSE',
      buttons: ['Continuar']
    });

    await alert.present();
  }

}
