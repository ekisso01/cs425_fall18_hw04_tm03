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
    marker.myCustomID= points[i].id;
  }

}

function getAllPoints() {
  var points = [{
    name: "to babe :)",
    x: 35.15546,
    y: 33.305926,
    id: 1
  }, {
    name: "condiom",
    x: 35.17051727551269,
    y: 33.382999087501524,
    id: 2
  }];
  return points;
}

function onMapClick(e) {

  $('#myModal').modal('show');
}

function markerOnClick(e) {
  var myid = e.target.myCustomID;
  var request = $.ajax({
    type: "POST",
    url: "api/get.php",
    data: {id : myid}
  });

  request.done(function( msg ) {
    var json = JSON.parse(msg)[0];
    console.log(json);
    $( "#name" ).val( json.name );
    $('#myModal').modal('show');
  });

}

$(document).ready(function() {
  initializeMap();

});