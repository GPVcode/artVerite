// autocomplete handler
let autocomplete;
function initialize() {
    const input = document.getElementById('autocomplete');
    const options = {
        componentRestrictions: { 'country': ["us"]},
        fields: ["name"],
        types: ["school"]
    };
    autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', onPlaceChanged);

}

// handles what happens when autocomplete option is clicked
function onPlaceChanged(){
    // get info about selected school
    const place = autocomplete.getPlace();
    console.log("place", place.name)

        // display details about the valid place
        document.getElementById('details').innerHTML = place.name;

}

window.addEventListener('load', initialize);

