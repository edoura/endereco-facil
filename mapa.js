var map, marker, geocoder;

function MapaApp() {
  var mapElement = document.getElementById('mapa'),
    mapsButton = document.getElementById('btnMaps'),
    region = 'BR',
    googleMaps = google.maps,
    geocoder = window.geocoder,
    map = window.map,
    marker = window.marker,
    latlng = new googleMaps.LatLng(-18.8800397, -47.05878999999999),
    options = {
      zoom: 5,
      center: latlng,
      mapTypeId: googleMaps.MapTypeId.ROADMAP
    },
    bind = function () {
      mapsButton.onclick = handleMapsButtonClick;
    },
    carregarNoMapa = function (localization) {
      geocoder.geocode(localization, function (results, status) {
        if (status == googleMaps.GeocoderStatus.OK) {
          if (results[0]) {
            var geometryLocation = results[0].geometry.location,
              latitude = geometryLocation.lat(),
              longitude = geometryLocation.lng();

            // U.setValueById('txtLatitude', latitude);
            // U.setValueById('txtLongitude', longitude);

            var localization = new googleMaps.LatLng(latitude, longitude);

            marker.setPosition(localization);
            map.setCenter(localization);
            map.setZoom(16);
          }
        }
      });
    },
    handleMapsButtonClick = function () {
      var logradouro = U.getValueById('logradouro'),
        numero = U.getValueById('numero'),
        bairro = U.getValueById('bairro'),
        cidade = U.getValueById('cidade'),
        uf = U.getValueById('uf'),
        pais = 'Brasil',
        endereco = logradouro + ', ' + numero + ' - ' + bairro + ', ' + cidade + ' - ' + uf + ', ' + pais;

      console.log(endereco);

      carregarNoMapa({
        'address': endereco,
        'region': region
      }); // Esse parte. De passar como parametro.
    };

  geocoder = new googleMaps.Geocoder();
  map = new googleMaps.Map(mapElement, options);
  marker = new googleMaps.Marker({
    map: map,
    draggable: true,
    position: latlng
  });

  bind();
}

$(document).ready(function () {
  var mapaApp = new MapaApp();
});
