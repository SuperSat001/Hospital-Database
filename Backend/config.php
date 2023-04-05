// edit this file according to system database

<?php
$servername = "localhost";
$username = "root";
$password = "YOUR_PASSWORD_HERE";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
