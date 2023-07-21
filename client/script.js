
function initialize() {
    const input = document.getElementById('autocomplete');
    const options = {
        componentRestrictions: { country: ["us"]},
        fields: ["name"],
        types: ["school"]
    }
    const autocomplete = new google.maps.places.Autocomplete(input, options);

      google.maps.event.addListener(autocomplete, 'place_changed', function () {
          var place = autocomplete.getPlace();

          if(!place.geometry){}
          document.getElementById('city2').value = place.name;
          document.getElementById('cityLat').value = place.geometry.location.lat();
          document.getElementById('cityLng').value = place.geometry.location.lng();
      });
  }
  window.addEventListener('load', initialize);

