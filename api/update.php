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
	echo "edoooooooo";

	$sql = "UPDATE pv_table SET name=?, photo=?,address=?,x=?,y=?,operator=?,com_date=?,description=?,kWp=?,kWh=?,co2_avoided=?,reimbursement=?,spm=?,aa=?,ia=?,communication=?,inverter=?,sensors=? WHERE id=?";
	$stmt= $connection->prepare($sql);

	$name = "3";
	$photo = "3";
	$address = "3";
	$x = "2";
	$y = "2";
	$operator = "2";
	$com_date = "2018-11-27";
	$description = "2";
	$kWp = "2";
	$kWh = "2";
	$co2_avoided = "2";
	$reimbursement = "2";
	$spm = "2";
	$aa = "2";
	$ia = "2";
	$communication = "2";
	$inverter = "2";
	$sensors = "2";
	$id="3";
	$stmt->execute([$name,$photo,$address,$x,$y,$operator,$com_date,$description,$kWp,$kWh,$co2_avoided,$reimbursement,$spm,$aa,$ia,$communication,$inverter,$sensors,$id]);
	$arr = $stmt->errorInfo();

	print_r($arr);
	echo "edoooooooo";
?>
