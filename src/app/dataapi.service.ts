import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

//ประกาศตัวแปรแบบอาเรย์เพื่อรับค่าข้อมูล
    data_detailPro: any=[]; //ใช้คู่กับหน้า Product

  constructor(
    public http:HttpClient,
  ) { }

  
  //ฟังก์ชั่นการเพิ่มที่ส่งไปยัง api
  addProduct(data:any){
    console.log("ข้อมูลที่ส่งไปยัง api",data);
    return this.http.post('http://localhost/databese/insert.php',data);
  }

  //สร้างขึ้นมาเพื่อดึงข้อมูลมาจาก api
  listProduct(){
    return this.http.get('http://localhost/databese/listproduct.php');
  }

  //สำหรับแก้ไขข้อมูล
  editProduct(dataEdit: any){
    return this.http.put('http://localhost/databese/updete.php',dataEdit);
  }

  //สร้างสำหรับการลบข้อมูล
  delProduct(idPro:any){
    return this.http.delete('http://localhost/databese/delete.php?id_product='+idPro);
  }

}
