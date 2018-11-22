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
	
	$id="1";
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
