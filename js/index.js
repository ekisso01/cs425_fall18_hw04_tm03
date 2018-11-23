function initializeMap() {

  if ($("#map").length == 0) {
    return;
  }
  var map = L.map('map').setView([35.15546, 33.305926], 13);
  map.on('click', onMapClick);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> cdiomi01 ekisso01'
  }).addTo(map);

  var points = getAllPoints();

  for (i in points) {
    var marker = L.marker([points[i].x, points[i].y]);
    marker.addTo(map);
    marker.on('click', markerOnClick);
    marker.bindPopup(points[i].name);
    marker.on('mouseover', function(e) {
      this.openPopup();
    });
    marker.on('mouseout', function(e) {
      this.closePopup();
    });
    marker.myCustomID = points[i].id;
  }

}

function getAllPoints() {

  var response = $.ajax({
    type: "POST",
    url: "api/list.php",
    async: false,
    data: {
      token: $("#token").val(),
      username : $("#username").val()
    },
    success: function(result) {
      return true;
    }
  }).responseText;
  var points = JSON.parse(response);
  return points;
}

function onMapClick(e) {

console.log(e);
  $("#changebtn").hide()
  $("#savebtn").hide();
  $("#deletebtn").hide();
  $("#createbtn").show();

  $( "#name" ).val( "" );
  $("#name").prop("readonly", false);

  $( "#adr" ).val( "" );
  $("#adr").prop("readonly", false);

  $( "#pvid" ).val( "" );
  $( "#x-cord" ).val( e.latlng.lat );
  $( "#y-cord" ).val( e.latlng.lng );

  $( "#operator" ).val( "" );
  $("#operator").prop("readonly", false);

  $( "#com-Date" ).val( "" );
  $("#com-Date").prop("readonly", false);

  $( "#dcr" ).val( "" );
  $("#dcr").prop("readonly", false);

  $( "#kWp" ).val( "" );
  $("#kWp").prop("readonly", false);

  $( "#kWh" ).val( "" );
  $("#kWh").prop("readonly", false);

  $( "#co2" ).val( "" );
  $("#co2").prop("readonly", false);

  $( "#rmt" ).val( "" );
  $("#rmt").prop("readonly", false);

  $( "#spm" ).val( "" );
  $("#spm").prop("readonly", false);

  $( "#aa" ).val( "" );
  $("#aa").prop("readonly", false);

  $( "#ia" ).val( "" );
  $("#ia").prop("readonly", false);

  $( "#comm" ).val( "" );
  $("#comm").prop("readonly", false);

  $( "#inverter" ).val( "" );
  $("#inverter").prop("readonly", false);

  $( "#sensors" ).val( "" );
  $("#sensors").prop("readonly", false);




  $('#myModal').modal('show');
}

function markerOnClick(e) {
   $("#createbtn").hide();
   $("#savebtn").hide();
   $("#deletebtn").show();
   $("#changebtn").show();
  var myid = e.target.myCustomID;
  var request = $.ajax({
    type: "POST",
    url: "api/get.php",
    data: {
      id: myid,
      token: $("#token").val(),
      username : $("#username").val()
    }
  });

  request.done(function(msg) {
    var json = JSON.parse(msg)[0];
    console.log(json);

    $( "#name" ).val( json.name );
    $("#name").prop("readonly", true);

    $( "#adr" ).val( json.address );
    $("#adr").prop("readonly", true);

    $( "#pvid" ).val( json.id );
    $( "#x-cord" ).val( json.x );
    $( "#y-cord" ).val( json.y );

    $( "#operator" ).val( json.operator );
    $("#operator").prop("readonly", true);

    $( "#com-Date" ).val( json.com_date );
    $("#com-Date").prop("readonly", true);

    $( "#dcr" ).val( json.description );
    $("#dcr").prop("readonly", true);

    $( "#kWp" ).val( json.kWp );
    $("#kWp").prop("readonly", true);

    $( "#kWh" ).val( json.kWh );
    $("#kWh").prop("readonly", true);

    $( "#co2" ).val( json.co2_avoided );
    $("#co2").prop("readonly", true);

    $( "#rmt" ).val( json.reimbursement );
    $("#rmt").prop("readonly", true);

    $( "#spm" ).val( json.spm );
    $("#spm").prop("readonly", true);

    $( "#aa" ).val( json.aa );
    $("#aa").prop("readonly", true);

    $( "#ia" ).val( json.ia );
    $("#ia").prop("readonly", true);

    $( "#comm" ).val( json.communication );
    $("#comm").prop("readonly", true);

    $( "#inverter" ).val( json.inverter );
    $("#inverter").prop("readonly", true);

    $( "#sensors" ).val( json.sensors );
    $("#sensors").prop("readonly", true);

    $('#myModal').modal('show');
  });

}

$(document).ready(function() {
  initializeMap();

  $( "#createbtn" ).click(function() {
  var request = $.ajax({
  type: "POST",
  url: "api/insert.php",
  data: {
  name:$( "#name" ).val(),
  address:$( "#adr" ).val(),
  x:$( "#x-cord" ).val(),
  y:$( "#y-cord" ).val(),

  operator:$( "#operator" ).val(),

  com_date:$( "#com-Date" ).val(),

  description:$( "#dcr" ).val(),

  kWp:$( "#kWp" ).val(),

  kWh:$( "#kWh" ).val(),

  co2_avoided:$( "#co2" ).val(),

  reimbursement:$( "#rmt" ).val(),

  spm:$( "#spm" ).val(),

  aa:$( "#aa" ).val(),

  ia:$( "#ia" ).val(),

  communication:$( "#comm" ).val(),

  inverter:$( "#inverter" ).val(),

  sensors:$( "#sensors" ).val(),

      token: $("#token").val(),
      username : $("#username").val()
    }
  });

  request.done(function(msg) {
  console.log(msg);
  });
  
});

$( "#changebtn" ).click(function() {
$("#createbtn").hide();
   $("#savebtn").show();
   $("#deletebtn").show();
   $("#changebtn").hide();
   $("#name").prop("readonly", false);
  $("#adr").prop("readonly", false);
  $("#operator").prop("readonly", false);
  $("#com-Date").prop("readonly", false);
  $("#dcr").prop("readonly", false);
  $("#kWp").prop("readonly", false);
  $("#kWh").prop("readonly", false);
  $("#co2").prop("readonly", false);
  $("#rmt").prop("readonly", false);
  $("#spm").prop("readonly", false);
  $("#aa").prop("readonly", false);
  $("#ia").prop("readonly", false);
  $("#comm").prop("readonly", false);
  $("#inverter").prop("readonly", false);
  $("#sensors").prop("readonly", false);
});

$( "#savebtn" ).click(function() {
  var request = $.ajax({
  type: "POST",
  url: "api/update.php",
  data: {
  id:$("#pvid").val(),
  name:$( "#name" ).val(),
  address:$( "#adr" ).val(),
  x:$( "#x-cord" ).val(),
  y:$( "#y-cord" ).val(),

  operator:$( "#operator" ).val(),

  com_date:$( "#com-Date" ).val(),

  description:$( "#dcr" ).val(),

  kWp:$( "#kWp" ).val(),

  kWh:$( "#kWh" ).val(),

  co2_avoided:$( "#co2" ).val(),

  reimbursement:$( "#rmt" ).val(),

  spm:$( "#spm" ).val(),

  aa:$( "#aa" ).val(),

  ia:$( "#ia" ).val(),

  communication:$( "#comm" ).val(),

  inverter:$( "#inverter" ).val(),

  sensors:$( "#sensors" ).val(),

      token: $("#token").val(),
      username : $("#username").val()
    }
  });

  request.done(function(msg) {
  console.log(msg);
  });
});
$( "#deletebtn" ).click(function() {
   var request = $.ajax({
    type: "POST",
    url: "api/delete.php",
    data: {
      id: $( "#pvid" ).val(),
      token: $("#token").val(),
      username : $("#username").val()
    }
  });

  request.done(function(msg) {

});
  
});
});