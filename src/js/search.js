import { school, cities } from "./data.js";

"use strict";

var found = false;

var tooltip = document.querySelector(".tooltip");
var icon_section = document.querySelector("#sub-section-links");
var searching_results = document.querySelector("#searching-links");
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
    console.log(data_found);
    if (e.which == 8 && icon_section.classList.contains("d-none") == false) {
        icon_section.classList.add("d-none");
    } else {
        // Need to update links
    }
    tooltip.classList.remove("show");
    if (window.event) {
        // User still typing
        console.log(e.which);
        var input = document.querySelector(".searchText").value;

        // 

        if (e.which == 13 || e.which == 1) {
            if (input.length > 0) {
                // User pressed enter or hit submit
                input = input.toLowerCase();
                input = input.trim();
                if (input.includes("school district")) {
                    input = input.replace("school district", "");
                    input = input.trim();
                } else if (input.includes(",")) {
                    let temp = input.split(",");
                    input = temp[0];
                    input = input.trim();
                }
                searchCity(input);
                searchSchoolData(input);

                // Done running all the searches 
                if (found == false) {
                    console.log("User input was not found in our data");
                } else {
                    // Input found
                    // icon_section.classList.remove("d-none");
                    console.log(input);
                    console.log(data_found);
                    populateSearchResults(input);
                    // and update links to correct info
                }
            } else {
                tooltip.classList.add("show");
            }
        }
    }
}

function searchCity(input) {
    var found_cities = [];
    for (let i = 0; i < cities.length; i++) {
        if (cities[i][0].toLowerCase().startsWith(input)) {
            console.log("City found in LA or OC county");
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
            //console.log("Input found is district or school list");
            if (school[i][6].toLowerCase().startsWith(input)) {
                // prints the district of the school
                found_schools.push(school[i][6]);
            } else if (school[i][5].toLowerCase().startsWith(input)) {
                // prints all schools in that district with the type of school it is
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