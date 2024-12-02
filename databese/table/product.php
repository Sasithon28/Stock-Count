<?php

include('../config.db.php');

$tableEmplo = "CREATE TABLE product(
    id_product INT AUTO_INCREMENT COMMENT 'รหัสสินค้า',
    product_photo VARCHAR(255) COMMENT 'รูปสินค้า (URL หรือ path)',
    product_name VARCHAR(100) COMMENT 'ชื่อสินค้า',
    quantity INT COMMENT 'จำนวน',
    price DECIMAL(10, 2) COMMENT 'ราคา',
    PRIMARY KEY (id_product)
)";

if($conn->query($tableEmplo) === TRUE){
    echo "สร้างได้";
 }else{
     echo "สร้างไมได้".$conn->error;
 }
 
 $conn->close();

?>