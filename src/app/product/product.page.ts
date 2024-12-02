import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { DataapiService } from '../dataapi.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  Product: any =[]; //ประกาศตัวแปรมารับค่า

  constructor(private link:NavController,
    private actionSheetCtrl: ActionSheetController,
    public dataapi: DataapiService,
    private route:Router,
    private http:HttpClient
    ) { 
      this.loadDataPro();
    }

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
  gotoedit(){
    this.link.navigateBack('/edit')
  }


  public alertButtons = ['ตกลง'];
  public alertInputs = [
    {
      placeholder: 'ชื่อสินค้า',
    },
    {
      placeholder: 'จำนวนสินค้า',
      attributes: {
        maxlength: 50,
      },
    },
    {
      placeholder: 'ราคาสินค้า',
      attributes: {
        maxlength: 50,
      },
    }
  ];


  

  ngOnInit() {
    this.loadDataPro(); //เรียกใช้งาน ฟังก์ชัน การดึงข้อมูล
  }

  loadDataPro(){
    this.dataapi.listProduct().subscribe({
      next: (res:any) => {
        console.log('ดึงได้');
        this.Product = res;
      },
      error: (error: any) => {
        console.log('ดึงไม่ได้',error);
      }
    });
  }

  //ลิ้งค้ไปหน้า edit2
  edit(dataPro: any){
    this.dataapi.data_detailPro = dataPro;
    console.log(dataPro);
    this.link.navigateForward('/edit2')
  }


  //สำหรับลบข้อมูล
  delPro(idPro:any){
    // console.log("ค่าที่กรอก",data);
    this.dataapi.delProduct(idPro).subscribe({
      next: (res: any) => {
        console.log('ลบข้อมูลได้',res);
      },
      error: (error: any) => {
        console.log('ไม่สามารถลบได้',error);
      },
    });
    this.loadDataPro(); //เรียกใช้ฟังก์การดึงข้อมูล
  }
}
