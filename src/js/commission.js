"use strict";

var salePrice = document.getElementById("commissionRange");
var salePriceLabel = salePrice.previousElementSibling;
var text = salePriceLabel.innerHTML.split(" | ");
var dollarAmount = text[0];
console.log(text);
console.log(salePriceLabel);
salePrice.oninput = function() {
    dollarAmount = "$" + numberWithCommas(this.value);
    salePriceLabel.innerHTML = dollarAmount + " | " + text[1];
}

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

const DATA_COUNT = 2;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const data = {
    labels: ['Red', 'Orange'],
    datasets: [{
        label: 'Dataset 1',
        data: [80, 20],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)'
        ],
    }]
};

const config = {
    type: 'doughnut',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            }
        }
    },
};

const chart1 = new Chart(
    document.getElementById('chart1'),
    config
);

const chart2 = new Chart(
    document.getElementById('chart2'),
    config
);