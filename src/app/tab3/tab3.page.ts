import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public actionSheetController: ActionSheetController, public alertController: AlertController) { }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      buttons: [{
        text: 'Instagram',
        icon: 'logo-instagram',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Twiter',
        icon: 'logo-twitter',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Facebook',
        icon: 'logo-facebook',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Próximamente estará disponible tu perfil',
      buttons: ['entendido! ']
    });
    await alert.present();
  }

  async presentAlertWifi() {
    const alert = await this.alertController.create({
      header: 'Wifi',
      message: 'Buscando wifi...',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertBluetooth() {
    const alert = await this.alertController.create({
      header: 'Bluetooth',
      message: 'Buscando Bluetooth...',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertGPS() {
    const alert = await this.alertController.create({
      header: '¿Quieres activar tu GPS?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertNotificaciones() {
    const alert = await this.alertController.create({
      header: 'Notificaciones',
      message: 'Notificaciones activadas.',
      buttons: ['OK']
    });
    await alert.present();
  }



}


