"use strict";

var salePrice = document.getElementById("commissionRange");
var salePriceLabel = salePrice.previousElementSibling;
var text = salePriceLabel.innerHTML.split(" | ");
var dollarAmount = text[0];
var agentSelect = document.getElementById("agentCommission");
var brokerageSelect = document.getElementById("brokeragePercent");
var commission_from_sale, agent_takes_home;
var takes_home_with_us = document.getElementById("withUs");
var takes_home_elsewhere = document.getElementById("withThem");
var commissionSplit = new Array();
commissionSplit = [90, 10];

salePrice.oninput = function() {
    dollarAmount = "$" + numberWithCommas(salePrice.value);
    salePriceLabel.innerHTML = dollarAmount + " | " + text[1];

    agentCommission = agentSelect.options[agentSelect.selectedIndex].text;
    brokeragePercent = brokerageSelect.options[brokerageSelect.selectedIndex].text;

    commission_from_sale = salePrice.value * percentToDecimail(agentCommission);

    agent_takes_home = commission_from_sale - (commission_from_sale * percentToDecimail(brokeragePercent));

    takes_home_elsewhere.innerHTML = "Your commission<br>" + "$" + numberWithCommas(agent_takes_home);

    agent_takes_home = commission_from_sale - (commission_from_sale * percentToDecimail('3%'));

    takes_home_with_us.innerHTML = "Your commission<br>" + "$" + numberWithCommas(agent_takes_home);
}

var agentCommission, brokeragePercent;

agentSelect.addEventListener("change", updateNumbers, true);
brokerageSelect.addEventListener("change", updateNumbers, true);

function updateNumbers(e, price = salePrice.value, agentCommission, brokeragePercent) {
    dollarAmount = "$" + numberWithCommas(salePrice.value);
    salePriceLabel.innerHTML = dollarAmount + " | " + text[1];


    agentCommission = agentSelect.options[agentSelect.selectedIndex].text;
    brokeragePercent = brokerageSelect.options[brokerageSelect.selectedIndex].text;

    commission_from_sale = price * percentToDecimail(agentCommission);

    agent_takes_home = commission_from_sale - (commission_from_sale * percentToDecimail(brokeragePercent));

    takes_home_elsewhere.innerHTML = "Your commission<br>" + "$" + numberWithCommas(agent_takes_home);

    agent_takes_home = commission_from_sale - (commission_from_sale * percentToDecimail('3%'));

    takes_home_with_us.innerHTML = "Your commission<br>" + "$" + numberWithCommas(agent_takes_home);

    commissionSplit = new Array();
    commissionSplit.push(parseFloat(brokeragePercent));
    commissionSplit.push(100 - parseFloat(brokeragePercent));

    updateConfig(second);
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function percentToDecimail(x) {
    let dec = parseFloat(x);
    console.log(dec);
    let percentage = dec / 100;
    console.log(percentage);
    return percentage;
}



new Chart(document.getElementById("FG_chart"), {
    type: "doughnut",
    data: {
        datasets: [{
            backgroundColor: ["#aa0000", "#303031"],
            data: [97, 3],
            borderWidth: 0
        }],
        labels: ["Your Commission", "Brokerage Commission"]
    },
    options: {
        cutout: '85%',
        title: {
            display: false,
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutCubic'
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        }
    }
});

var second = new Chart(document.getElementById("them_chart"), {
    type: "doughnut",
    data: {
        datasets: [{
            backgroundColor: ["#aa0000", "#303031"],
            data: commissionSplit,
            borderWidth: 0
        }],
        labels: ["Your Commission", "Brokerage Commission"]
    },
    options: {
        cutout: '85%',
        title: {
            display: false,
        },
        animation: {
            duration: 0
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        }
    }
});


function updateConfig(chart) {
    chart.data = {
        datasets: [{
            backgroundColor: ["#aa0000", "#303031"],
            data: commissionSplit,
            borderWidth: 0
        }],
        labels: ["Your Commission", "Brokerage Commission"]
    }
    chart.options = {
        cutout: '85%',
        title: {
            display: false,
        },
        animation: {
            duration: 0,
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        }
    }
    chart.update();
}