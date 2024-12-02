import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.page.html',
  styleUrls: ['./edit2.page.scss'],
})
export class Edit2Page implements OnInit {
  product: any = []; //ประกาศมาเพื่อไปรับค่าจาก service
  id_product: any;
  product_photo: any;
  product_name: any;
  quantity: any;
  price: any;

  constructor(
    public dataapi: DataapiService,
    private route: Router
  ) { }

  ngOnInit() {
    //สั่งให้ทำงานพร้อมเปิดหน้าเพจ
    this.product = this.dataapi.data_detailPro;
  }

  editProduct(){
    let dataEdit = {
      id_product: this.product.id_product,
      product_name: this.product.product_name,
      product_photo: this.product.product_photo,
      quantity: this.product.quantity,
      price: this.product.price,
    };
    //console.log('ค่าที่กรอก',data);
    this.dataapi.editProduct(dataEdit).subscribe({
      next: (res: any) => {
        console.log('แก้ไขได้',res);
      },
      error: (error: any) => {
        console.log('แก้ไขไม่ได้',error);
      }
    });
    this.route.navigateByUrl('/product');
  }

}
