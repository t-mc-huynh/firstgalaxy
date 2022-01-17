"use strict";

const result = new Array();
const school = new Array();
const glossary = new Array();
const cities = new Array();
var glossary_container;
$.get('glossary.html', null, function(div) {
    glossary_container = $(div).find('#parent-container')[0];
});

//console.log(result);
//console.log(school);
//console.log(glossary);


$(function() {
    /* set up XMLHttpRequest */
    var url = "src/data/datasets.xlsx";
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";

    oReq.onload = function(e) {
        var arraybuffer = oReq.response;

        var data = new Uint8Array(arraybuffer);

        var workbook = XLSX.read(data, { type: 'array' });
        //result.push(workbook.SheetNames);
        let i = 0;
        workbook.SheetNames.forEach(function(SheetNames) {
            var roa = XLSX.utils.sheet_to_json(workbook.Sheets[SheetNames], { header: 1 });
            // result.push(roa);
            result.push([workbook.SheetNames[i], roa]);
            i++;
        });

        for (let h = 0; h < result[0][1].length; h++) {
            school.push(result[0][1][h]);
        }

        for (let k = 0; k < result[1][1].length; k++) {
            glossary.push(result[1][1][k]);
        }

        for (let m = 0; m < result[2][1].length; m++) {
            cities.push(result[2][1][m]);
        }

        sortTerms(glossary_container);
        //console.log(result);
    }
    oReq.send();
});

function sortTerms(glossary_container) {
    let term_container = glossary_container.children;
    for (let j = 0; j < term_container.length; j++) {
        if (term_container[j].classList.contains("glossary-key-header")) {
            for (let k = 1; k < glossary.length; k++) {
                if (glossary[k][0].toString().charAt(0) == term_container[j].firstElementChild.innerHTML) {
                    term_container[j + 1].appendChild(createList(glossary[k][0]));
                }
            }
        }
    }
    getLinks();
}

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
    let links = document.querySelectorAll(".glossary-term-container li a");
    links.forEach(function(clicked) {
        clicked.addEventListener("click", function() { infoModal(clicked) }, false);
    });
}

function infoModal(link) {
    let modal_label = document.getElementById("DEFINITION_MODAL_LABEL");
    let modal_body = document.getElementById("DEFINITION_MODAL_BODY");

    let term = link.innerHTML.trim();
    for (let i = 1; i < glossary.length; i++) {
        if (glossary[i][0].trim() == term) {
            modal_label.innerHTML = glossary[i][0];
            modal_body.innerHTML = glossary[i][1];
        }
    }
    modal_label.style.fontWeight = "bold";
}


export { result, school, glossary, cities };