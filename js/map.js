function initialize() {

  var latlng = new google.maps.LatLng(38.073349,23.792846);

  var settings = {
              zoom: 18,
              center: latlng,
              mapTypeControl:false,
              navigationControl: true,
              navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
              mapTypeId: google.maps.MapTypeId.ROADMAP };

  var map = new google.maps.Map(document.getElementById("map_canvas"), settings);

  var companyPos = new google.maps.LatLng(38.073349,23.792846);

  var companyLogo = new google.maps.MarkerImage('https://lh6.googleusercontent.com/-pl9DNj2qin4/USHEsniarHI/AAAAAAAAHGA/peJk1Y0KoCY/s128/1.png',
      new google.maps.Size(88,88),
      new google.maps.Point(0,0),
      new google.maps.Point(44,88)
  );

  var companyMarker = new google.maps.Marker({
      position: companyPos,
      map: map,
      icon: companyLogo,
      title:"Sohosquare"
  });

  var contentString = "000"

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  google.maps.event.addListener(companyMarker, 'click', function() {
                      infowindow.open(map,companyMarker);
                  });
  }