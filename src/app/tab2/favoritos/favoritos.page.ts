import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Próximamente estará disponible el listado de amigos!',
      buttons: ['de acuerdo ']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
