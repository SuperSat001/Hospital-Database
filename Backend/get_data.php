<?php
	include_once('config.php');
	header("Access-Control-Allow-Origin: http://localhost:3000");
	header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
	header("Access-Control-Allow-Headers: Content-Type, Authorization");
	$sql = "SELECT * FROM backend.students;";
	$get_data_query = mysqli_query($db, $sql) or die(mysqli_error($db));
		if(mysqli_num_rows($get_data_query)!=0){
		$result = array();
		
		while($r = mysqli_fetch_array($get_data_query)){
			extract($r);
			$result[] = array("rollno" => $rollno, "name" => $name, "dob" => $dob, "contact" => $contact, "address" => $address, "details" => $details,);
		}
		$json = array("status" => 1, "info" => $result);
	}
	else{
		$json = array("status" => 0, "error" => "Patients not found!");
	}

header('Content-type: application/json');
echo json_encode($json);