var map = L.map('map').setView([33.791489, -117.853104], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoidC1tYy1odXluaCIsImEiOiJja3hyNzk1N2Y0aXJ1Mndva3F2eGFxYXA1In0.ftFKSKwU0CQrU0rwFvjETQ'
}).addTo(map);

var marker = L.marker([33.791489, -117.853104]).addTo(map);