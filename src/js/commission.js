"use strict";

var salePrice = document.getElementById("commissionRange");
var salePriceLabel = salePrice.previousElementSibling;
var text = salePriceLabel.innerHTML.split(" | ");
var dollarAmount = text[0];
console.log(text);
console.log(salePriceLabel);
salePrice.oninput = function() {
        dollarAmount = "$" + numberWithCommas(this.value);
        console.log(dollarAmount);
        salePriceLabel.innerHTML = dollarAmount + " | " + text[1];
    }
    // salePrice.addEventListener("onchange", function() {
    //     salePriceLabel = "$" + this.value;
    //     console.log(salePriceLabel);
    // }, true);
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

var agentSelect = document.getElementById("agentCommission");
var agentCommission;
agentSelect.addEventListener("change", function() {
    console.log("agentCommission", agentSelect.options[agentSelect.selectedIndex].text);
    agentCommission = agentSelect.options[agentSelect.selectedIndex].text;
}, true);

var brokerageSelect = document.getElementById("brokeragePercent");
var brokeragePercent;
brokerageSelect.addEventListener("change", function(e) {
    console.log("brokeragePercent", brokerageSelect.options[brokerageSelect.selectedIndex].text);
    brokeragePercent = brokerageSelect.options[brokerageSelect.selectedIndex].text;
}, true);