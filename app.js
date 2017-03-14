var DirectionsService =

DirectionsService.route(){
  origin: LatLng | String | google.maps.Place,
  destination: LatLng | String | google.maps.Place,
  travelMode: travelMode,
  drivingOptions: DrivingOptions,
  unitSytem: UnitSystem,
  waypoints[]: DirectionsWaypoint,
  optimizeWaypoints: Boolean,
  provideRouteAlternatives: Boolean,
  avoidHighways: Boolean,
  avoidTolls: Boolean,
  region: String
}

{
  origin: 'Seattle, WA',
  destination: 'Tacoma, WA'
  waypoints: [
    {
      location: 'Joplin, MO',
      stopover: false
    },{
      location: 'Oklahoma City, OK',
      stopover:true
    }],
    provideRouteAlternatives: false,
    travelMode: 'DRIVING',
    drivingOptions: {
      departureTime: new Date(),
      trafficModel: 'pessimistic'
    },
    unitSytem: google.maps.UnitSytem.IMPERIAL
  }

  {
    departureTime: Date,
    trafficModelL trafficModel
  }
