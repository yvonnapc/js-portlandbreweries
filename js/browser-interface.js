// var apiKey = require('./../.env').apiKey;
var initMap = require('./../js/map.js').initMap;


$(document).ready(function(){
  google.maps.event.addDomListener(window, 'load', initMap);

  event.preventDefault();
});
