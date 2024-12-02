import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.page.html',
  styleUrls: ['./cal.page.scss'],
})
export class CalPage implements OnInit {

  constructor(private link:NavController) { }

  gotocal(){
    this.link.navigateBack('/cal')
  }
  gotocalmon (){
    this.link.navigateBack('/calmoney')
  }
  gotopro(){
    this.link.navigateBack('/product')
  }
  gotohis(){
    this.link.navigateBack('/history')
  }
  gotohome(){
    this.link.navigateBack('/home')
  }

  ngOnInit() {
  }

}
