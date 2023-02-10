"use strict";

const nearbyCities = new Array();
nearbyCities.push(["City Name", "Distance", "Image"]);
var cityImages = new Object();

var geoloc = new Boolean(false);
var geo_location = new Array();

window.onload = function() {

    spanTitle();

    imageObject();

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(success, showError, options);


    /* Checking if the user has granted permission to use their location. */
    navigator.permissions.query({ name: 'geolocation' }).then(function geoState(result) {
        if (result.state == 'granted') {
            geoloc = true;
        } else if (result.state == 'denied') {
            geoloc = false;
        }
        result.onchange = function() {
            console.log(result.state);
        }
    });
}

$(window).resize(spanTitle);

/**
 * If the window width is less than 583px, change the text of the span element to "Communities"
 */
function spanTitle() {
    if ($(window).width() < 583) {
        var span = document.querySelector(".owl-carousel .section-title span");
        span.innerHTML = "Communities";
    }
}

/**
 * It makes an AJAX call to the Pantry API and stores the response in a variable called cityImages
 */
function imageObject() {
    /* A variable that is used to make an AJAX call to the Pantry API. */
    var settings = {
        "url": "https://getpantry.cloud/apiv1/pantry/18c13523-e895-4e43-977d-e30fde678a6b/basket/cityImages",
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
    };

    $.ajax(settings).done(function(response) {
        cityImages = response;
        // console.log(cityImages);
    })
}

/**
 * The function gets the user's current location, and then makes an AJAX call to the geocode.xyz API to
 * get the user's city, state, country, and zip code.
 * @param position - The position object returned by the geolocation API.
 */
function success(position) {
    var crd = position.coords;

    var coord = (`${crd.latitude}, ${crd.longitude}`);

    geo_location.push(coord);

    /* Making an AJAX call to the geocode.xyz API. */
    fetch("https://geocode.xyz/" + `${crd.latitude}` + "," + `${crd.longitude}` + "?geoit=json")
        .then(response => response.json())
        .then(result => {
            // console.log(Object.values(result));
            geo_location.push(Object.values(result)[18]);
            geo_location.push(Object.values(result)[6]);
            geo_location.push(Object.values(result)[4]);
            geo_location.push(Object.values(result)[13]);
        });
    getNearbyCities(position);
}



function showError(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
    defaultCities();
}

/**
 * It takes the latitude and longitude of the user's location, and uses the geonames API to find nearby
 * cities
 */
function defaultCities() {
    let radius = 25;
    let lat1 = 33.7982368;
    let lon1 = -117.9010208;
    let responseStyle = "short";
    let maxRows = 15;
    let citySize = "cities15000";

    let final_url = "https://secure.geonames.org/findNearbyPlaceNameJSON?lat=" + lat1 + "&lng=" + lon1 + "&style=" + responseStyle + "&cities=" + citySize + "&radius=" + radius + "&maxRows=" + maxRows + "&username=" + "tmch";

    /* Making an AJAX call to the geonames API. */
    $.getJSON(final_url, function(data) {

        for (let i = 0; i < data.geonames.length; i++) {
            nearbyCities.push([data.geonames[i].name, data.geonames[i].distance, ""])
        }

        getImages();

        console.log(nearbyCities);
        createAndLoadCarousel();
    })
}

/**
 * It takes the user's current location, and uses it to make an AJAX call to the geonames API to get a
 * list of nearby cities.
 * @param position - the position object returned by the geolocation API
 */
function getNearbyCities(position) {
    // radius in KM
    let radius = 25;
    let lat1 = position.coords.latitude;
    let lon1 = position.coords.longitude;
    let responseStyle = "short"; // length of the response
    let maxRows = 13; // max # of rows to retrieve
    let citySize = "cities15000"; // the min # of citizens a city must have

    let final_url = "https://secure.geonames.org/findNearbyPlaceNameJSON?lat=" + lat1 + "&lng=" + lon1 + "&style=" + responseStyle + "&cities=" + citySize + "&radius=" + radius + "&maxRows=" + maxRows + "&username=" + "tmch";

    /* Making an AJAX call to the geonames API. */
    $.getJSON(final_url, function(data) {

        for (let i = 0; i < data.geonames.length; i++) {
            nearbyCities.push([data.geonames[i].name, data.geonames[i].distance, ""])
        }

        getImages();

        // console.log(nearbyCities);
        createAndLoadCarousel();
    })
}

/**
 * It loops through the nearbyCities array, and for each city, it loops through the cityImages object,
 * and if the city name matches the key in the object, it sets the third element in the nearbyCities
 * array to the value of the key
 */
function getImages() {
    for (let i = 1; i < nearbyCities.length; i++) {
        for (const [key, value] of Object.entries(cityImages)) {
            if (nearbyCities[i][0].toString().toLowerCase() == key.toString().toLowerCase()) {
                nearbyCities[i][2] = value;
            }
        }
    }
}


function createAndLoadCarousel() {
    for (let i = 1; i < nearbyCities.length; i++) {
        createCarousel(nearbyCities[i]);
    }

    loadCarousel();
}

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
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            240: {
                items: 1
            },
            992: {
                items: 3
            },
            1200: {
                items: 5
            },
            2400: {
                items: 7
            }
        }
    });
}

export { geo_location, geoloc, nearbyCities };