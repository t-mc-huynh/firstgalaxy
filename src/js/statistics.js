"use strict";
var image_container = document.getElementsByClassName("nar-images")[0];
console.log(image_container);

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFuntion(this);
    }
};
xhttp.open("GET", "src/data/snapshots", true);
xhttp.send();

const filePaths = new Array();

/**
 * Gets the file path for all files in the snapshots folder
 * @param {*} xml 
 */
function myFuntion(xml) {
    var parser = new DOMParser();
    var htmlDoc = parser.parseFromString(xml.responseText, 'text/html');
    var preList = htmlDoc.getElementsByTagName("li");
    for (let i = 1; i < preList.length; i++) {
        console.log(preList[i].firstChild.getAttribute("href"));
        filePaths.push(preList[i].firstChild.getAttribute("href"));
    }
    uploadImage();
}

console.log(filePaths);

/**
 * Uploads to NAR Section
 */
function uploadImage() {
    for (let i = 0; i < filePaths.length; i++) {
        var filePath = filePaths[i].toString();
        var image = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = filePath;
        image.setAttributeNode(source);
        image_container.appendChild(image);
        console.log("yes");
    }
}