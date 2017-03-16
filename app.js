function initMap(){
  var directionsDisplay= new google.maps.DirectionsRenderer;
  var directionsService= new google.maps.directionsService;
  var map= new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 47.6181571, lng:  -122.3540385}
  });
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('right-panel'));

  var control= document.getElementById('floating-panel');
  control.style.display= 'block';
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(control);

  var onChangeHandler= function(){
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
  document.getElementById('start').addEventListener('change', onChangeHandler)
  document.getElementById('end').addEventListener('change', onChangeHandler);
}
function calculateAndDisplayRoute(directionsService, directionsDisplay){
  var start= document.getElementById('start').value;
  var end= document.getElementById('end').value;
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: 'DRIVING'
  }, function(response, status){
    if(status === 'OK'){
      directionsDisplay.setDirections(reponse);
    }else{
      window.alert('Directions request failed due to ' + status);
    }
  });
}
