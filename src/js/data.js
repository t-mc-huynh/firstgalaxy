const result = new Array();
const school = new Array();
const glossary = new Array();
const cities = new Array();
//console.log(result);
//console.log(school);
//console.log(glossary);

window.onload = function() {
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


        //console.log(result);
    }
    oReq.send();
};

$(function() {
    var headers = document.querySelectorAll(".glossary-key-header");
    var letter = document.querySelectorAll(".glossary-key-header span");
    //headers.forEach(function() {
    //sortTerms(letter)
    //}, false);

    function createList() {
        var list = document.createElement("li");
        list.classList.add("col");
    }

    function sortTerms(letter) {
        for (let i = 1; i < glossary.length; i++) {
            if (glossary[i][0].charAt(0) == letter) {

            }
        }
    }

});



export { result, school, glossary, cities };