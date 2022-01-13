function switchTxT(x) {
    let term, def, a, t_el, t_id, t, d;
    a = document.getElementById("DEFINITION_MODAL");
    term = document.getElementById("DEFINITION_MODAL_LABEL");
    def = document.getElementById("DEFINITION_MODAL_BODY");

    t_id = x.id;
    t_el = document.getElementById(t_id);
    d = t_el.nextElementSibling.innerHTML;
    t = t_el.innerHTML;

    console.log(t_id);
    console.log(t);
    console.log(d);

    term.innerHTML = t;
    def.innerHTML = d;
}