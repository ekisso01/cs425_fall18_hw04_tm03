<?php
	include("token.php");
	if(!isset($_POST["username"]) or !isset($_POST["token"])){
		echo "You are not authorized to access this data";
		die();
	}
	validatetoken($_POST["username"],$_POST["token"]);

	$dsn = "mysql:dbname=phpmyadmin;host=34.216.143.96";
	$dbuser = "phpmyadmin2";
	$dbuserpw = "password";
	try{
		$connection = new PDO($dsn, $dbuser, $dbuserpw);
	}
	catch (PDOException $e){
		echo 'There was a problem connecting to the database: ' . $e->getMessage();
	}
	$sql = "INSERT INTO pv_table(name,photo,address,x,y,operator,com_date,description,kWp,kWh,co2_avoided,reimbursement,spm,aa,ia,communication,inverter,sensors) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
	$stmt= $connection->prepare($sql);

	$name = $_POST["name"];
	$photo = $_POST["photo"];
	$address = $_POST["address"];
	$x = $_POST["x"];
	$y = $_POST["y"];
	$operator = $_POST["operator"];
	$com_date = $_POST["com_date"];
	$description = $_POST["description"];
	$kWp = $_POST["kWp"];
	$kWh = $_POST["kWh"];
	$co2_avoided = $_POST["co2_avoided"];
	$reimbursement = $_POST["reimbursement"];
	$spm = $_POST["spm"];
	$aa = $_POST["aa"];
	$ia = $_POST["ia"];
	$communication = $_POST["communication"];
	$inverter = $_POST["inverter"];
	$sensors = $_POST["sensors"];
	$stmt->execute([$name,$photo,$address,$x,$y,$operator,$com_date,$description,$kWp,$kWh,$co2_avoided,$reimbursement,$spm,$aa,$ia,$communication,$inverter,$sensors]);
	$arr = $stmt->errorInfo();
	print_r($arr);

?>
