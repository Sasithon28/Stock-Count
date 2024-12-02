<?php

 include('config.db.php');
 $dataJSON = json_decode(file_get_contents('php://input'), true);
 $message = array();

  //ประกาศตัวแปร สำหรับเพิ่มข้อมูล
  $id_product = $dataJSON['id_product'];
  $product_photo = $dataJSON['product_photo'];
  $product_name = $dataJSON['product_name'];
  $quantity = $dataJSON['quantity'];
  $price = $dataJSON['price'];

  //เขียนคำสั่งในการเพิ่มข้อมูล
  $sql = "INSERT INTO product (id_product, product_photo, product_name, quantity, price) 
  VALUES('$id_product', '$product_photo', '$product_name', '$quantity', '$price')";

  //รันคำสั่ง
  $qr_insert = mysqli_query($conn,$sql);

  if($qr_insert){
     //เพิ่มข้อมูลได้
    http_response_code(201);
    $message['status'] = "เพิ่มข้อมูลสำเร็จ";
  }else{
    //เพิ่มไม่ได้
    http_response_code(422);
    $message['status'] = "เพิ่มข้อมูลไม่สำเร็จ";
  }

  //ส่งข้อมูลการดำเนินการกลับไป
  echo json_encode($message);
  echo mysqli_error($conn);


?>