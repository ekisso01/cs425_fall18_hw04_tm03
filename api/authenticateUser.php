<?php
	include("token.php");

	function authenticateUser($username,$password){
		$dsn = "mysql:dbname=phpmyadmin;host=34.216.143.96";
		$dbuser = "phpmyadmin2";
		$dbuserpw = "password";
		try{
			$connection = new PDO($dsn, $dbuser, $dbuserpw);
		}
		catch (PDOException $e){
			echo 'There was a problem connecting to the database: ' . $e->getMessage();
		}

		$sql = "SELECT * FROM pv_users WHERE username='$username'";
		$stmt= $connection->query($sql);
		$arr = $stmt->errorInfo();
		$stmt->setFetchMode(PDO::FETCH_ASSOC);

		$myArray=array();



		while ($row = $stmt->fetch()):
			if(password_verify($password,$row["password_hash"])){
				return generate_token($row['username']);
			}
	  endwhile;
		return "";
	}

	function create_hash($password){
		$options = [
			'cost' => 12,
		];
		return password_hash($password, PASSWORD_BCRYPT, $options);
	}
?>
