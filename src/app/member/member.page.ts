import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  constructor( private mem2:NavController) { }

  gotomem2(){
    this.mem2.navigateForward('/member2')
  }


  ngOnInit() {
  }

}
