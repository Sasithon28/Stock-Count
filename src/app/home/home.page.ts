import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private cal1:NavController ) {}

   GotoCal() {
    this.cal1.navigateForward('/cal')
   }

   gotomem(){
    this.cal1.navigateForward('/member')
   }
}
