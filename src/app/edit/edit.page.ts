import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  //ประกาศตัวแปรเพื่อรับค่าจากหน้า .html
  //dataProduct: any={};

  txtid_product: any;
  txtproduct_photo: any;
  txtproduct_name: any;
  txtquantity: any;
  txtprice: any;

  id_product: any;
  product_photo: any;
  product_name: any;
  quantity: any;
  price: any;


  constructor(
    public dataapi: DataapiService,
    private route:Router,
    private nav:NavController
  ) { }

  //ฟังก์ชั่นสำหรับเพิ่มข้อมูล
  addproduct(){
    let data = {
      id_product: this.txtid_product,
      product_photo: this.txtproduct_photo,
      product_name: this.txtproduct_name,
      quantity: this.txtquantity,
      price: this.txtprice
    }

    this.dataapi.addProduct(data).subscribe({
      next: (res: any) => {
        console.log("เพิ่มแล้ว",res);
      },
      error:(error: any) => {
        console.log("เพิ่มไม่ได้",error);
      }
    });

    this.nav.navigateBack('/product')
    this.clearForm();
  }

  //ฟังชั่นล้างข้อมูล
  clearForm(){
    this.txtid_product = "";
    this.txtproduct_photo = "";
    this.txtproduct_name = "";
    this.txtquantity = "";
    this.txtprice = "";
  }

  ngOnInit() {
  }

}
