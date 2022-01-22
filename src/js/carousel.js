import { TOKEN } from './app-env.js';

import { result } from "./data.js";

var IP = "23.240.76.211";

const nearbyCities = new Array();
nearbyCities.push(["City Name", "State", "Latitude", "Longitude", "Location Code", "Image"]);

function processResponse(position) {
    var crd = position.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
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

function getNearbyCities(radius = 100) {

}

function distance(lat1, lon1, lat2, lon2) {
    // convert degrees to radians
    lon1 = lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;

    let a = Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));
    // radius of earth in miles
    let r = 3956;

    return (c * r);
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