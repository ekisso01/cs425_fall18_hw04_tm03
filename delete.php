<?php
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
