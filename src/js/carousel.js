import { TOKEN } from './app-env.js';

import { result } from "./data.js";

var IP = "23.240.76.211";

const nearbyCities = new Array(12);
nearbyCities.push(["City Name", "State", "Latitude", "Longitude", "Location Code", "Image"]);

function processResponse(position) {
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
            navigator.geolocation.getCurrentPosition(processResponse, showError);
        } else if (result.state == 'prompt') {
            report(result.state);
        } else if (result.state == 'denied') {
            report(result.state);
        }
        result.onchange = function() {
            report(result.state)
        }
    });
}


// console.log(result);

function getNearbyCities(position) {
    // radius in KM
    let radius = 25;
    let lat1 = position.coords.latitude;
    let lon1 = position.coords.longitude;
    let responseStyle = "short"; // length of the response
    let maxRows = 12; // max # of rows to retrieve
    let username = TOKEN.GEONAMEUSER; // username of GeoNames account
    let citySize = "cities15000"; // the min # of citizens a city must have


    $.getJSON("http://api.geonames.org/findNearbyPlaceNameJSON?lat=" + lat1 + lon1 + responseStyle + citySize + radius + maxRows + username, function(data) {
        console.log(data);

        array.forEach(element => {
            //do something ???
        });
    });

}


// add into function after getting all cities + info
// getPictures();
setTimeout(result.push(["City Info", nearbyCities]), 5000);


function getPictures() {
    for (let i = 1; i < nearbyCities.length; i++) {
        let index = rndIndex();
        console.log(index);
        if (!(nearbyCities[i][5].length > 3)) {
            fetch("https://api.unsplash.com/collections/461370/photos/?client_id=" + TOKEN.UNSPLASH + "&page=1&per_page=" + nearbyCities.length, {
                    headers: {
                        Authorization: TOKEN.UNSPLASH
                    }
                })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    nearbyCities[i][5] = data[i].urls.full;
                    createCarousel(nearbyCities[i])
                })
        }
    }
    loadCarousel();
    console.log(nearbyCities);
}

function rndIndex() {
    return Math.round(Math.random() * 10);
}

function createCarousel(data) {
    var section = document.querySelector(".owl-stage");


    var slide = document.createElement("div");
    slide.classList.add("owl-item");
    var photo = document.createElement("img");
    var source = document.createAttribute("src");
    source.value = data[5];
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