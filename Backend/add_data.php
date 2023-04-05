<?php
require 'config.php';
header("Access-Control-Allow-Origin: http://localhost:3000");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: Content-Type, Authorization");
 
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
     
    $rollno = $request->rollno;
    $name = $request->name;
    $dob = $request->dob;
    $contact = $request->contact;
    $address = $request->address;
	$details = $request->details;
    $sql = "INSERT INTO students (rollno,name,dob,contact,address,details) VALUES ('$rollno','$name','$dob','$contact','$address','$details')";
    if(mysqli_query($db,$sql)){
        http_response_code(201);
		echo "Successfully inserted!";
    }
    else{
         http_response_code(422); 
    }
         
}
?>