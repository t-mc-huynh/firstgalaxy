import { school, cities } from "./data.js";

"use strict";

var found = false;

var tooltip = document.querySelector(".tooltip");
var icon_section = document.querySelector("#sub-section-links");
var searching_results = document.querySelector("#searching-links");
var inputField = document.querySelector(".searchText");
var user_typing = "";
inputField.addEventListener("keyup", function() {
    user_typing = inputField.value.toLowerCase().trim();

    if (user_typing.includes("school district")) {
        user_typing = user_typing.replace("school district", "");
        user_typing = user_typing.trim();
    } else if (user_typing.includes(",")) {
        let temp = user_typing.split(",");
        user_typing = temp[0];
        user_typing = user_typing.trim();
    }
});

// Prevents form submission for debugging purposes
var form = document.getElementById("search-form");
var submitBtn = document.querySelector(".main-button");

var data_found = [
    ["City", "School", "District"]
];

function handleForm(evt) {
    evt.preventDefault();
}
form.addEventListener("submit", handleForm);

form.addEventListener("keydown", runSearches, true);

submitBtn.addEventListener("click", runSearches, true);

function runSearches(e) {
    data_found = [
        ["City", "School", "District"]
    ];
    if (e.which == 8 && icon_section.classList.contains("d-none") == false) {
        icon_section.classList.add("d-none");
    }
    if (user_typing.length == 0) {
        searching_results.classList.add("d-none");
    }
    tooltip.classList.remove("show");
    if (window.event) {
        if (user_typing.length > 0) {

            searchCity(user_typing);
            searchSchoolData(user_typing);
            console.log(user_typing);
            console.log(data_found);

            for (let i = 1; i < data_found.length; i++) {
                if (data_found[i].length > 0) {
                    // User searching
                    populateSearchResults(data_found[i]);
                    searching_results.classList.remove("d-none");
                }
            }

            if (e.which == 13 || e.which == 1) {
                // User submitted intentionally
                for (let i = 0; i < data_found[1].length; i++) {
                    if (data_found[1][i].toLowerCase().includes(user_typing)) {
                        // need to pull info from that city for icon_section
                        searching_results.classList.add("d-none");
                        icon_section.classList.remove("d-none");
                        console.log("found");
                    }
                }
            }
        }
    }
}

function searchCity(input) {
    var found_cities = [];
    for (let i = 0; i < cities.length; i++) {
        if (cities[i][0].toLowerCase().startsWith(input)) {
            found_cities.push(cities[i][0]);
            found = true;
        }
    }
    if (found == true) {
        data_found.push(uniq(found_cities));
    }
}

function searchSchoolData(input) {
    var found_districts = [];
    var found_schools = [];
    for (let i = 1; i < school.length; i++) {
        if (school[i][5].toLowerCase().startsWith(input) || school[i][6].toLowerCase().startsWith(input)) {
            found = true;
            if (school[i][6].toLowerCase().startsWith(input)) {
                found_schools.push(school[i][6]);
            } else if (school[i][5].toLowerCase().startsWith(input)) {
                found_districts.push(school[i][5]);
            }
        }
    }
    if (found == true) {
        data_found.push(uniq(found_schools));
        data_found.push(uniq(found_districts));
    }
}

function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
}

function populateSearchResults(input) {

}