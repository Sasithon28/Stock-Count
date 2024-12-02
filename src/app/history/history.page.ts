import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

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


  result=[
    {
      id:1,
      cal:"คำนวณสินค้า/เงิน",
      resu:"ผลลัพธ์"
    },
    {
      id:2,
      cal:"คำนวณสินค้า/เงิน",
      resu:"ผลลัพธ์"
    },
    {
      id:3,
      cal:"คำนวณสินค้า/เงิน",
      resu:"ผลลัพธ์"
    },
    {
      id:4,
      cal:"คำนวณสินค้า/เงิน",
      resu:"ผลลัพธ์"
    },
    {
      id:5,
      cal:"คำนวณสินค้า/เงิน",
      resu:"ผลลัพธ์"
    },
    {
      id:6,
      cal:"คำนวณสินค้า/เงิน",
      resu:"ผลลัพธ์"
    },
    {
      id:7,
      cal:"คำนวณสินค้า/เงิน",
      resu:"ผลลัพธ์"
    },
    {
      id:8,
      cal:"คำนวณสินค้า/เงิน",
      resu:"ผลลัพธ์"
    }
  ]

  ngOnInit() {
  }

}
