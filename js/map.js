var apiKey = require('./../.env').apiKey;

exports.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.523452, lng: -122.676207},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();
    if (places.length === 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();

    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        title: place.name,
        position: place.geometry.location
      });

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }

        var contentInfo = '<div id="content">' +
                      '<div id="bodyContent">' + '<strong>' + place.name + '</strong>' +
                      '<p>' + place.formatted_address + '</p>' +
                      '<p>Rating:  ' + place.rating + ' / 5</p>' +
                      '<button id="addToList">Add To List</button>' +
                      '</div>' +
                      '</div>';

        var infoWindow = new google.maps.InfoWindow({
          content: contentInfo
        });


              google.maps.event.addListener(infoWindow, 'domready', function() {
                document.getElementById("addToList").addEventListener("click", function() {
                  $('#results').append("<li><strong>" + place.name + "</strong></li>" +
                                        "<ul><li>" + place.formatted_address + "</li></ul>");
                                        console.log(place);
          });
        });

        marker.addListener('click', function() {
          infoWindow.open(map, marker);
        });

        markers.push(marker);
    });
    map.fitBounds(bounds);
  });
};
