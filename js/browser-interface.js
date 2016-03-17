var apiKey = require('./../.env').apiKey;
var initMap = require('./../js/map.js').initMap;

$(document).ready(function(){
  event.preventDefault();
  google.maps.event.addDomListener(window, 'load', initMap);
});
