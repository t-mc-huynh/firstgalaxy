import { agents } from './data.js';

console.log(agents);

"use strict";
var list = document.getElementById("card");

setTimeout(function() {
    for (let i = 1; i < agents.length; i++) {
        var agent = document.createElement("li");
        agent.classList.add("col");
        agent.classList.add("agent");
        var image = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = "src/images/placeholder.jpg";
        image.setAttributeNode(source);
        image.classList.add("float-start");
        image.classList.add("agent-picture");
        agent.appendChild(image);
        var info = document.createElement("div");
        info.classList.add("agent-information");
        info.classList.add("float-end");
        agent.appendChild(info);
        var name = document.createElement("h2");
        name.innerHTML = agents[i][0];
        info.appendChild(name);
        var role = document.createElement("p");
        role.innerHTML = agents[i][1];
        info.appendChild(role);
        var cell = document.createElement("p");
        var areaCode = agents[i][2].toString().substring(0, 3);
        var firstNums = agents[i][2].toString().substring(3, 6);
        var lastNums = agents[i][2].toString().substring(6, 10);
        cell.innerHTML = "<i class=\"bi-telephone-fill\"></i>" + "(" + areaCode + ") " + firstNums + " - " + lastNums;
        cell.style.margin = "0";
        var hyperlinkToCall = document.createAttribute("href");
        hyperlinkToCall.value = "tel:" + agents[i][2];
        cell.setAttributeNode(hyperlinkToCall);
        info.appendChild(cell);
        var mail = document.createElement("p");
        mail.innerHTML = "<i class=\"bi-inbox-fill\"></i>" + agents[i][6];
        var hyperlinkToMail = document.createAttribute("href");
        hyperlinkToMail.value = "mailto:" + agents[i][6];
        mail.setAttributeNode(hyperlinkToMail);
        info.appendChild(mail);
        var lic = document.createElement("small");
        lic.innerHTML = "BRE #: " + agents[i][3];
        info.appendChild(lic);
        console.log(agent);
        list.appendChild(agent);
    }
}, 1000);

var filterBtn = document.querySelector("#filterBtn");
filterBtn.onclick = function() {
    document.getElementById("myDropdown").classList.toggle("show");
};

var filterAZ = document.querySelector("#byAZ");

filterAZ.onclick = function() {
    var i, switching, a, b, shouldSwitch, dir, switchcount = 0;
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        a = list.getElementsByTagName("li");
        b = list.getElementsByTagName("h2");
        // Loop through all list-items:
        for (i = 0; i < (a.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should switch place with the current item,
            based on the sorting direction (asc or desc): */
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically lower than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically higher than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            a[i].parentNode.insertBefore(a[i + 1], a[i]);
            switching = true;
            // Each time a switch is done, increase switchcount by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = false;
            }
        }
    }
    toggle();
};

var filterZA = document.querySelector("#byZA");

filterZA.onclick = function() {
    var i, switching, a, b, shouldSwitch, dir, switchcount = 0;
    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
    // Make a loop that will continue until no switching has been done:
    while (switching) {
        // start by saying: no switching is done:
        switching = false;
        a = list.getElementsByTagName("li");
        b = list.getElementsByTagName("h2");
        // Loop through all list-items:
        for (i = 0; i < (a.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /* check if the next item should switch place with the current item,
            based on the sorting direction (asc or desc): */
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically lower than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    /* if next item is alphabetically higher than current item,
                    mark as a switch and break the loop: */
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            a[i].parentNode.insertBefore(a[i + 1], a[i]);
            switching = true;
            // Each time a switch is done, increase switchcount by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "desc") {
                dir = "desc";
                switching = false;
            }
        }
    }
    toggle();
};

function toggle() {
    document.getElementById("myDropdown").classList.toggle("show");
}

document.addEventListener("click", (evt) => {
    const options = document.getElementById("myDropdown");
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement == options || targetElement == filterBtn) {
            // This is a click inside. Do nothing, just return.
            return;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    if (options.classList.contains("show")) {
        options.classList.toggle("show");
    }
});