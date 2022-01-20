import { TOKEN } from './app-env.js';

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
nearbyCities.push(["City Name", "State", "Latitude", "Longitude", "Location Code"]);

$.getJSON("https://api.ipify.org/?format=json", function(data) {

    // Setting text of element P with id gfg
    console.log(data.ip);
    IP = data.ip;
});

$.getJSON('https://api.techniknews.net/ipgeo/' + IP, function(input) {

    // Setting text of element P with id gfg
    console.log(input);
    console.log(Object.entries(input).length);
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
            nearbyCities.push(temp);
            break;
        }
    }
    console.log(nearbyCities);
});