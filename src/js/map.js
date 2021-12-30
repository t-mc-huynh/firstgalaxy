var marker = L.marker([33.791489, -117.853104]).addTo(map);

function GetMap() {
    var map = new Microsoft.Maps.Map('#map', {
        center: new Microsoft.Maps.Location(33.774269, -117.937996),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 12
    });

    var location = new Microsoft.Maps.Location(33.835200, -117.819080);
    var color = new Microsoft.Maps.Color.fromHex('#d92e27');
    var pushpin = new Microsoft.Maps.Pushpin(location, {
        color: color
    });
    map.entities.push(pushpin);
}