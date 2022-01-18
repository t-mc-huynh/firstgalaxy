import { glossary } from "./data.js";

"use strict";

setTimeout(function() {
    var glossary_container = document.getElementById("parent-container");
    var term_container = glossary_container.children;
    for (let j = 0; j < term_container.length; j++) {
        if (term_container[j].classList.contains("glossary-key-header")) {
            for (let k = 1; k < glossary.length; k++) {
                if (glossary[k][0].toString().charAt(0) == term_container[j].firstElementChild.innerHTML) {
                    let temp = createList(glossary[k][0]);
                    term_container[j + 1].appendChild(temp);
                }
            }
        }
    }

    getLinks();
}, 1000);

function createList(term) {
    var list = document.createElement("li");
    list.classList.add("col");
    var link = document.createElement("a");
    var toggle = document.createAttribute("data-bs-toggle");
    toggle.value = "modal";
    var target = document.createAttribute("data-bs-target");
    target.value = "#DEFINITION_MODAL";
    link.innerHTML = term;
    link.setAttributeNode(toggle);
    link.setAttributeNode(target);
    list.appendChild(link);
    return list;
}

function getLinks() {
    var hyperlink = document.querySelectorAll(".glossary-term-container li a");
    hyperlink.forEach(function(clicked) {
        clicked.addEventListener("click", function() { infoModal(clicked) });
    });
}

function infoModal(clicked) {
    var modal_label = document.getElementById("DEFINITION_MODAL_LABEL");
    var modal_body = document.getElementById("DEFINITION_MODAL_BODY");

    var term = clicked.innerHTML.trim();
    for (let i = 1; i < glossary.length; i++) {
        if (glossary[i][0].trim() == term) {
            modal_label.innerHTML = glossary[i][0];
            modal_body.innerHTML = glossary[i][1];
        }
    }
    modal_label.style.fontWeight = "bold";
}