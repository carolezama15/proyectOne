import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agregar-amigos',
  templateUrl: './agregar-amigos.page.html',
  styleUrls: ['./agregar-amigos.page.scss'],
})
export class AgregarAmigosPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Próximamente estará disponible la manera de encontrar a tus amigos!',
      buttons: ['de acuerdo ']
    });
    await alert.present();
  }
  ngOnInit() {
  }

}
