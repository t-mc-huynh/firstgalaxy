var map = L.map('map').setView([33.791489, -117.853104], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'sk.eyJ1IjoidC1tYy1odXluaCIsImEiOiJja3hyN2M0NnA1cmszMnVxaGg3MnBncnFsIn0._-FYvZDwwPpf8l2FfFqgIA'
}).addTo(map);

var marker = L.marker([33.791489, -117.853104]).addTo(map);