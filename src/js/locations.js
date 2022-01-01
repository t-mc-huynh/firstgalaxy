import { TOKEN } from './app-env.js';

$.ajax({
    url: "https://data.muni.org/resource/r3di-nq2j.json?state=CA&appraisalyear=2020",
    type: "GET",
    data: {
        "$limit": 5,
        "$$app_token": TOKEN.MUNI_TOKEN
    }
}).done(function(data) {
    var container = document.getElementById("details");
    for (var i = 0; i < 5; i++) {
        var div = document.createElement("div");
        div.innerHTML = data[i].parceladdress + ", " + data[i].state + " " + data[i].zip;
        container.appendChild(div);
        var div2 = document.createElement("div");
        div2.innerHTML = 'Bedrooms: ' + data[i].bedrooms + ' Full Bathrooms: ' + data[i].numfullbaths + ' Half Bathrooms: ' + data[i].numhalfbaths;
        container.appendChild(div2);
    }
    console.log(data);
});

$.ajax({
    url: "https://data.muni.org/resource/r3di-nq2j.json?state=CA&appraisalyear=2020",
    type: "GET",
    data: {
        "$limit": 10,
        "$$app_token": TOKEN.MUNI_TOKEN
    }
}).done(function(data) {
    console.log(data);
});