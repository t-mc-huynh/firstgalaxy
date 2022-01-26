const nearbyCities = new Array();
nearbyCities.push(["City Name", "Distance", "Image"]);

function success(position) {
    var crd = position.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getNearbyCities(position);
}

function showError(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
}

function report(state) {
    console.log('Permission ' + state);
}

window.onload = function() {

    navigator.permissions.query({ name: 'geolocation' }).then(function(result) {

        if (result.state == 'granted') {
            report(result.state);
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            navigator.geolocation.getCurrentPosition(success, showError, options);
        } else if (result.state == 'prompt') {
            report(result.state);
        } else if (result.state == 'denied') {
            report(result.state);
        }
        result.onchange = function() {
            report(result.state);
        }
    })
}


function getNearbyCities(position) {
    // radius in KM
    let radius = 25;
    let lat1 = position.coords.latitude;
    let lon1 = position.coords.longitude;
    let responseStyle = "short"; // length of the response
    let maxRows = 12; // max # of rows to retrieve
    let citySize = "cities15000"; // the min # of citizens a city must have

    let base_url = "https://api.geonames.org/findNearbyPlaceNameJSON?lat=";
    let final_url = base_url + +lat1 + "&lng=" + lon1 + "&style=" + responseStyle + "&cities=" + citySize + "&radius=" + radius + "&maxRows=" + maxRows + "&username=" + "tmch";

    $.getJSON(final_url, function(data) {

        for (let i = 0; i < data.geonames.length; i++) {
            nearbyCities.push([data.geonames[i].name, data.geonames[i].distance, ""])
        }
        //getPictures();

        console.log(nearbyCities);
        createAndLoadCarousel();
    })


}


// Temp functions to bypass photos function
function createAndLoadCarousel() {
    for (let i = 1; i < nearbyCities.length; i++) {
        createCarousel(nearbyCities[i]);
    }

    loadCarousel();
}

/*

function getPictures() {
    let base_url = "https://api.unsplash.com/collections/461370/photos/?client_id=";
    let final_url = base_url + configuration.UNSPLASH + "&page=1&per_page=" + nearbyCities.length;

    for (let i = 1; i < nearbyCities.length; i++) {
        let index = rndIndex();
        console.log(index);
        if (nearbyCities[i][2] == "") {

            // create table w chosen photos to use in database
            fetch(final_url, {
                    headers: {
                        Authorization: configuration.UNSPLASH
                    }
                })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    nearbyCities[i][2] = data[i].urls.full;
                    createCarousel(nearbyCities[i]);
                })
        }
    }
    loadCarousel();
    console.log(nearbyCities);
}

function rndIndex() {
    return Math.round(Math.random() * 10);
}
*/

function createCarousel(data) {
    var section = document.querySelector(".owl-stage");


    var slide = document.createElement("div");
    slide.classList.add("owl-item");
    var photo = document.createElement("img");
    var source = document.createAttribute("src");
    source.value = data[2];
    photo.setAttributeNode(source);
    var button = document.createElement("button");
    button.innerHTML = data[0];

    // button needs an hyperlink to the search page for the corresponding city
    var type = document.createAttribute("type");
    type.value = "button";
    button.setAttributeNode(type);
    slide.appendChild(photo);
    slide.appendChild(button);
    section.appendChild(slide);
}

function loadCarousel() {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            600: {
                items: 4
            }
        }
    });
}
