import { agents } from './data.js';

"use strict";

var filterOptions = document.getElementById("myDropdown");

/**
 * Shows filter selection
 */
var filterBtn = document.getElementById("filterBtn");
filterBtn.addEventListener("click", function() {
    filterOptions.classList.toggle("show");
});

var fnameFilter = document.getElementById("fname");
var lnameFilter = document.getElementById("lname");


/**
 * Filters by first name A-Z
 */
fnameFilter.addEventListener("click", function() {
    let i, cards, name, approve, switching = true;

    while (switching) {

        cards = document.querySelectorAll("#agent-container > div");
        name = document.querySelectorAll("div > div > div > h4");

        // by default, the loop only executes once
        switching = false;
        approve = false;
        // all cards get looked through
        for (i = 0; i < (cards.length - 1); i++) {

            console.log(cards);
            // Checks if the first letter of the first name holds a greater value
            if (name[i].innerHTML.toLowerCase() > name[i + 1].innerHTML.toLowerCase()) {
                // if so, it is earlier on in the alphabet and the switch gets approved
                approve = true;
                break;
            }
        }

        if (approve) {
            // The cards get switched and all the cards get checked again
            cards[i].parentElement.insertBefore(cards[i + 1], cards[i]);
            switching = true;
        } else {
            // if the cards did not move, all changes have finished
            switching = false;
        }
    }

    toggleFilterMenu();
});


/**
 * Filters by last name A-Z
 */
lnameFilter.addEventListener("click", function() {
    let i, cards, name, approve, switching = true;
    let lastName = new Array();

    while (switching) {

        cards = document.querySelectorAll("#agent-container > div");
        name = document.querySelectorAll("div > div > div > h4");

        lastName = [];
        name.forEach(function(items) {
            lastName.push(items.innerHTML.split(" ")[1]);
        })
        console.log(lastName);
        switching = false;

        for (i = 0; i < (cards.length - 1); i++) {
            approve = false;

            if (lastName[i].toLowerCase() > lastName[i + 1].toLowerCase()) {
                approve = true;
                break;
            }
        }

        if (approve) {
            cards[i].parentElement.insertBefore(cards[i + 1], cards[i]);
            switching = true;
        } else {
            switching = false;
        }
    }
    toggleFilterMenu();
});

/**
 * Shows and hides the filter menu
 */
function toggleFilterMenu() {
    filterOptions.classList.toggle("show");
}

/**
 * Hides filter options when clicked outside
 */
document.addEventListener("click", (evt) => {
    let userClick = evt.target;

    do {
        if (userClick == filterOptions || userClick == filterBtn) {
            return;
        }
        userClick = userClick.parentNode;

    } while (userClick);
    if (filterOptions.classList.contains("show")) {
        filterOptions.classList.toggle("show");
    }
});

/**
 * Dynamically create agent cards
 */
setTimeout(function() {
    var agent_display = document.getElementById("agent-container");
    for (let i = 1; i < agents.length; i++) {
        var card = document.createElement("div");
        card.classList.add("col-lg-3");
        card.classList.add("col-md-6");
        card.classList.add("d-flex");
        card.classList.add("align-items-stretch");

        var member = document.createElement("div");
        member.classList.add("member");
        card.appendChild(member);

        var image = document.createElement("div");
        image.classList.add("member-img");
        member.appendChild(image);

        var picture = document.createElement("img");
        var source = document.createAttribute("src");
        source.value = "src/images/placeholder.jpg";
        picture.setAttributeNode(source);
        picture.classList.add("img-fluid");
        image.appendChild(picture);

        var socials = document.createElement("div");
        socials.classList.add("social");

        var mail_link = document.createElement("a");
        mail_link.innerHTML = "<i class=\"bi-envelope-fill\"></i>";
        var hyperlinkToMail = document.createAttribute("href");
        hyperlinkToMail.value = "mailto:" + agents[i][6];
        mail_link.setAttributeNode(hyperlinkToMail);
        socials.appendChild(mail_link);

        var phone_link = document.createElement("a");
        phone_link.innerHTML = "<i class=\"bi-telephone-fill\"></i>";
        var hyperlinkToCall = document.createAttribute("href");
        hyperlinkToCall.value = "tel:" + agents[i][2];
        phone_link.setAttributeNode(hyperlinkToCall);
        socials.appendChild(phone_link);

        image.appendChild(socials);

        var info = document.createElement("div");
        info.classList.add("member-info");
        var name = document.createElement("h4");
        name.innerHTML = agents[i][0];
        info.appendChild(name);

        var role = document.createElement("span");
        role.innerHTML = agents[i][1];
        info.appendChild(role);

        var license = document.createElement("code");
        license.innerHTML = "BRE # " + agents[i][3];
        info.appendChild(license);

        member.appendChild(info);

        agent_display.appendChild(card);
    }
}, 500);