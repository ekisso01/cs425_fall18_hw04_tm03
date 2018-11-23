<html lang="en">

  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Kissopoda Elena">

    <meta charset="UTF-8">

    <meta name="description" content="This is the form where the user can write the proper input and a add new PVs">

    <meta name="keywords" content="CS425, HTML, PVs system, Locations">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css"
      integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
      crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js"
   integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA=="
   crossorigin=""></script>
    <script src="js/index.js"></script>
    <link rel="stylesheet" href="css/index.css"/>
    <link rel="shortcut icon" href="favicon/favicon.ico">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    </head>



  <body>
    <?php
    if($_SERVER['REQUEST_METHOD']=="GET"){
    ?>
      <form class="vertical-center" method="post">
      <button class="btn btn-primary">Enter Site</button>
      </form>
    <?php } else {?>
      <?php
        include("form.html");
      ?>
      <div id="map">
      </div>

    <?php } ?>
  </body>

</html>