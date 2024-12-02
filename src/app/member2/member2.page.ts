import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-member2',
  templateUrl: './member2.page.html',
  styleUrls: ['./member2.page.scss'],
})
export class Member2Page implements OnInit {

  constructor(private home:NavController) { }

  gotohome() {
    this.home.navigateBack('/home')
  }

  ngOnInit() {
  }

}
