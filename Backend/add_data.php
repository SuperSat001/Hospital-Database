<?php
include_once('config.php');
if($_SERVER['REQUEST_METHOD'] == "POST"){
	// Get data from the REST client
	$rollno = isset($_POST['rollno']) ? mysqli_real_escape_string($conn, $_POST['rollno']) : "";
	$name = isset($_POST['name']) ? mysqli_real_escape_string($conn, $_POST['name']) : "";
	$contact = isset($_POST['contact']) ? mysqli_real_escape_string($conn, $_POST['contact']) : "";
    $address = isset($_POST['address']) ? mysqli_real_escape_string($conn, $_POST['address']) : "";
    $details = isset($_POST['details']) ? mysqli_real_escape_string($conn, $_POST['details']) : "";
    $dob = isset($_POST['dob']) ? mysqli_real_escape_string($conn, $_POST['dob']) : "";
	// Insert data into database
	$sql = "INSERT INTO backend.students (rollno, name, contact, address, details, dob) VALUES ('$rollno', '$name', '$contact', '$address', '$details', '$dob');";
	$post_data_query = mysqli_query($conn, $sql);
	if($post_data_query){
		$json = array("status" => 1, "Success" => "Patient has been added successfully!");
	}
	else{
		$json = array("status" => 0, "Error" => "Error adding patient! Please try again!");
	}
}
else{
	$json = array("status" => 0, "Info" => "Request method not accepted!");
}
@mysqli_close($conn);
// Set Content-type to JSON
header('Content-type: application/json');
echo json_encode($json);