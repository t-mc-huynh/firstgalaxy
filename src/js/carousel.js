import { TOKEN } from './app-env.js';

import { result } from "./data.js";

var IP = "23.240.76.211";

const nearbyCities = new Array();
nearbyCities.push(["City Name", "State", "Latitude", "Longitude", "Location Code", "Image"]);

// console.log(result);

$.getJSON("https://api.ipify.org/?format=json", function(data) {

    // Setting text of element P with id gfg
    // console.log(data.ip);
    IP = data.ip;
});

$.getJSON("http://getnearbycities.geobytes.com/GetNearbyCities?callback=?&radius=100&locationcode=" + IP, function(data) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            let temp = new Array();
            temp.push(data[i][1]);
            temp.push(data[i][2]);
            temp.push(data[i][8]);
            temp.push(data[i][10]);
            temp.push(data[i][9]);
            temp.push("");
            nearbyCities.push(temp);
            break;
        }
    }
    getPictures();
});

setTimeout(result.push(["City Info", nearbyCities]), 5000);


function getPictures() {
    for (let i = 1; i < nearbyCities.length; i++) {
        let index = rndIndex();
        console.log(index);
        if (!(nearbyCities[i][5].length > 3)) {
            fetch("https://api.unsplash.com/collections/461370/photos/?client_id=" + TOKEN.UNSPLASH + "&page=1&per_page=10", {
                    headers: {
                        Authorization: TOKEN.UNSPLASH
                    }
                })
                .then(resp => {
                    return resp.json();
                })
                .then(data => {
                    console.log(data);
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