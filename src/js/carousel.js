import { TOKEN } from './app-env.js';

import { result } from "./data.js";

$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 10,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
            600: {
                items: 4
            }
        }
    });
});

var IP = "23.240.76.211";

const nearbyCities = new Array();
nearbyCities.push(["City Name", "State", "Latitude", "Longitude", "Location Code", "Image"]);

// console.log(result);

$.getJSON("https://api.ipify.org/?format=json", function(data) {

    // Setting text of element P with id gfg
    // console.log(data.ip);
    IP = data.ip;
});

$.getJSON('https://api.techniknews.net/ipgeo/' + IP, function(input) {

    // Setting text of element P with id gfg
    // console.log(input);
    // console.log(Object.entries(input).length);
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
    for (let i = 0; i < nearbyCities.length; i++) {
        if (!(nearbyCities[i][5].length > 3)) {
            fetch("https://api.unsplash.com/photos/?client_id=" + TOKEN.UNSPLASH + "&page=1&per_page=2&query=" + nearbyCities[i][1], {
                    headers: {
                        Authorization: TOKEN.UNSPLASH
                    }
                })
                .then(resp => {
                    return resp.json()
                })
                .then(data => {
                    if (data[0].height > data[1].height) {
                        nearbyCities[i][5] = data[0].urls.full;
                    } else {
                        nearbyCities[i][5] = data[1].urls.full;
                    }
                })
        }
    }
    console.log(nearbyCities);
}