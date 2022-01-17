const result = new Array();
const school = new Array();
const glossary = new Array();
const cities = new Array();
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

        sortTerms(container);
        //console.log(result);
    }
    oReq.send();
});




var container = document.getElementById("parent-container");

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
    link.addEventListener("click", function() { infoModal(link) }, false);
    list.appendChild(link);
    return list;
}

function sortTerms(container) {
    var children = container.children;
    for (var j = 0; j < children.length; j++) {
        if (children[j].classList.contains("glossary-key-header")) {
            for (var k = 1; k < glossary.length; k++) {
                if (glossary[k][0].toString().charAt(0) == children[j].firstElementChild.innerHTML) {
                    children[j + 1].appendChild(createList(glossary[k][0]));
                }
            }
        } else if (children[j].classList.contains("glossary-term-container")) {

        }
    }
}

function infoModal(e) {
    console.log(e);
}





export { result, school, glossary, cities };