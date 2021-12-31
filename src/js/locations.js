fetch('src/data/OC LA Homes For Sale.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        appendData(data);
    })
    .catch(function(err) {
        console.log('error: ' + err);
    });

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Title: ' + data[i].Title + ' ' + data[i].Status;
        mainContainer.appendChild(div);
    }
}