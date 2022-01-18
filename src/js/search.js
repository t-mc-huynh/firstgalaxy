import { school, cities } from "./data.js";

"use strict";

var found = false;

var tooltip = document.querySelector(".tooltip");
var search_links = document.querySelector("#sub-section-links");
// Prevents form submission for debugging purposes
var form = document.getElementById("search-form");
var submitBtn = document.querySelector(".main-button");

function handleForm(evt) {
    evt.preventDefault();
}
form.addEventListener("submit", handleForm);

form.addEventListener("keydown", runSearches, true);
submitBtn.addEventListener("click", runSearches, true);

function runSearches(e) {
    if (e.which == 8) {
        search_links.classList.add("d-none");
    } else {
        // Need to update links
    }
    tooltip.classList.remove("show");
    if (window.event) {
        // User still typing
        console.log(e.which);
        var input = document.querySelector(".searchText").value;

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
                    search_links.classList.remove("d-none");
                    // and update links to correct info
                }
            } else {
                tooltip.classList.add("show");
            }
        }
    }
}

function searchCity(input) {
    for (let i = 0; i < cities.length; i++) {
        if (cities[i][0].toLowerCase().includes(input)) {
            console.log("City found in LA or OC county");
            found = true;
        }
    }
}

function searchSchoolData(input) {
    for (let i = 1; i < school.length; i++) {
        if (school[i][5].toLowerCase().includes(input) || input == school[i][6].toLowerCase().includes(input)) {
            found = true;
            //console.log("Input found is district or school list");
            if (school[i][6].toLowerCase().includes(input)) {
                // prints the district of the school
                console.log(school[i][5] + " is the district of the inputted school");
                break;
            } else {
                // prints all schools in that district with the type of school it is
                console.log(school[i][6] + " - " + school[i][14]);
            }
        }
    }
}