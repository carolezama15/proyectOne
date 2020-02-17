import { Component, OnInit } from '@angular/core';
import { AlertController} from '@ionic/angular'; 

@Component({
  selector: 'app-buscar-amigos',
  templateUrl: './buscar-amigos.page.html',
  styleUrls: ['./buscar-amigos.page.scss'],
})
export class BuscarAmigosPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Información',
      message: 'Próximamente estará disponible el radar buscador de amigos!',
      buttons: ['parece genial! ']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
