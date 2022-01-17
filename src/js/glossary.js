import { glossary } from "./data.js";

var section = document.querySelectorAll(".glossary-term-container li a");
section.forEach(function(e) {
    //e.addEventListener("click", switchTxT);
    e.addEventListener("click", function() { switchTxT(e) }, false);
});

function switchTxT(e) {
    let term, def, a, t_el, t_id, t, d;
    term = document.getElementById("DEFINITION_MODAL_LABEL");
    def = document.getElementById("DEFINITION_MODAL_BODY");

    console.log(e);
    t = e.innerHTML.trim();
    //t = document.querySelector(#x.delegateTarget);
    console.log(t);
    for (let i = 1; i < glossary.length; i++) {
        if (glossary[i][0].trim() == t) {
            term.innerHTML = glossary[i][0];
            def.innerHTML = glossary[i][1];
            break;
        }
    }
    term.style.fontWeight = "bold";
}