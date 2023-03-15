import { Component, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() product_id?: any;
  @Input() product_name?: string;
  @Input() product_image?: string;
  @Input() category?: string;
  
  constructor(
    private alertController: AlertController
  ){

  }

  async delete_confirmation() {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      subHeader: "Are you sure want to delete?",
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          
          },
        },
        {
          text: 'Delete now!',
          role: 'confirm',
          handler: () => {
            // this.handlerMessage = 'Alert confirmed';
          },
        },
      ],
    });
    await alert.present();
  }
}
