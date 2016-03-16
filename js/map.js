exports.initMap = function(){
  var mapProp = {
    center: {lat: 45.5200, lng: 122.6819},
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map"),mapProp);
};
