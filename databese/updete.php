<?php
    include_once("config.db.php");
    $dataJSON = json_decode(file_get_contents('php://input'), true);
    $message = array();

    $id_product = $dataJSON['id_product'];
    $product_name = $dataJSON['product_name'];
    $quantity = $dataJSON['quantity'];
    $price = $dataJSON['price'];

    $sql_update = "UPDATE `product` SET `id_product` = '$id_product',`product_photo` = '$product_photo', `product_name` = '$product_name', `quantity` = '$quantity', `price` = '$price' WHERE `product`.`id_product` = '$id_product';";
    $qr_update = mysqli_query($conn,$sql_update);

    if($qr_update){
        //เพิ่มข้อมูลได้
        http_response_code(201);
        $message['status'] = "แก้ไขข้อมูลสำเร็จ";
    }else{
        //เพิ่มข้อมูลไม่ได้
        http_response_code(422);
        $message['status'] = "แก้ไขข้อมูลไม่สำเร็จ";
    }
    //ส่งข้อมูลการดำเนินการกลับไป
    echo json_encode($message);
    echo mysqli_error($conn);

?>