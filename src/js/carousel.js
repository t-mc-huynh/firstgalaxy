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