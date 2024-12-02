<?php

    require_once "config.db.php";
    $dataJSON = json_decode(file_get_contents('php://input'), true);
    $message = array();

    $id_product =$_GET['id_product'];

    $delete = "DELETE FROM `product` WHERE `product`.`id_product` = '$id_product'";
    $qr_delete = mysqli_query($conn, $delete);

    if($qr_delete){
        http_response_code(201);
        $message['status'] = "ลบข้อมูลสำเร็จ";
    }else{
        http_response_code(422);
        $message['status'] = "ลบข้อมูลไม่สำเร็จ";
    }
    echo json_encode($message);
    echo mysqli_error($conn);

?>