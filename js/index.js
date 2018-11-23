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
    marker._icon.id = points[i].id;
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


  console.log("randomSpot");
  console.log(e);
}

function markerOnClick(e) {
  console.log("marker");
  var el = $(e.srcElement || e.target);
  var id = el.attr('id');
  console.log(e);
  console.log(id);
}

$(document).ready(function() {
  initializeMap();

});