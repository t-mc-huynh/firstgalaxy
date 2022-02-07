"use strict";



$.getJSON("https://api.ipify.org?format=json", function(data) {
    $.getJSON("https://ipapi.co/" + data.ip + "/json/", function(response) {
        console.log(response.city, response.region_code);
    })
})