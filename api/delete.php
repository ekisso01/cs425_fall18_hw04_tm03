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

	$sql = "DELETE FROM pv_table WHERE id = ?";
	$stmt= $connection->prepare($sql);

	$id= "2";

	$stmt->execute([$id]);
	$arr = $stmt->errorInfo();

	print_r($arr);
	echo "edoooooooo";
?>
