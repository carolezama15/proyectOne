import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-listado-amigos',
  templateUrl: './listado-amigos.page.html',
  styleUrls: ['./listado-amigos.page.scss'],
})
export class ListadoAmigosPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Próximamente estará disponible el listado de amigos!',
      buttons: ['parece genial! ']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
