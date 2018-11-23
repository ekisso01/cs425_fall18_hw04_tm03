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

	$id = $_POST["id"];
	$sql = "SELECT * FROM pv_table WHERE id=".$id;
	$stmt= $connection->query($sql);
	$stmt->setFetchMode(PDO::FETCH_ASSOC);

	$arr = $stmt->errorInfo();

	$myArray=array();

	while ($row = $stmt->fetch()):
		array_push($myArray,$row);

        endwhile;
	$myJSON=json_encode($myArray);
	echo $myJSON;

?>
