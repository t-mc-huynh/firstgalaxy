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

/* This is the function that is called when the user changes the value of the slider. It updates the
dollar amount label, and then calculates the commission from the sale, and the agent's take home
pay. */
salePrice.oninput = function() {
    dollarAmount = "$" + numberWithCommas(salePrice.value);
    salePriceLabel.innerHTML = dollarAmount + " | " + text[1];

    agentCommission = agentSelect.options[agentSelect.selectedIndex].text;
    brokeragePercent = brokerageSelect.options[brokerageSelect.selectedIndex].text;

    commission_from_sale = salePrice.value * percentToDecimail(agentCommission);

    agent_takes_home = commission_from_sale - (commission_from_sale * percentToDecimail(brokeragePercent));

    takes_home_elsewhere.innerHTML = "$" + numberWithCommas(agent_takes_home);

    agent_takes_home = commission_from_sale - (commission_from_sale * percentToDecimail('3%'));

    takes_home_with_us.innerHTML = "$" + numberWithCommas(agent_takes_home);
}

var agentCommission, brokeragePercent;

agentSelect.addEventListener("change", updateNumbers, true);
brokerageSelect.addEventListener("change", updateNumbers, true);

/**
 * It takes the sale price, the agent's commission, and the brokerage's commission and calculates the
 * agent's take home pay
 * @param e - the event that triggered the function
 * @param [price] - The price of the home.
 * @param agentCommission - The commission percentage that the agent is entitled to.
 * @param brokeragePercent - The percentage of the commission that the brokerage takes.
 */
function updateNumbers(e, price = salePrice.value, agentCommission, brokeragePercent) {
    dollarAmount = "$" + numberWithCommas(salePrice.value);
    salePriceLabel.innerHTML = dollarAmount + " | " + text[1];


    agentCommission = agentSelect.options[agentSelect.selectedIndex].text;
    brokeragePercent = brokerageSelect.options[brokerageSelect.selectedIndex].text;

    commission_from_sale = price * percentToDecimail(agentCommission);

    agent_takes_home = commission_from_sale - (commission_from_sale * percentToDecimail(brokeragePercent));

    takes_home_elsewhere.innerHTML = "$" + numberWithCommas(agent_takes_home);

    agent_takes_home = commission_from_sale - (commission_from_sale * percentToDecimail('3%'));

    takes_home_with_us.innerHTML = "$" + numberWithCommas(agent_takes_home);

    commissionSplit = new Array();
    commissionSplit.push(100 - parseFloat(brokeragePercent));
    commissionSplit.push(parseFloat(brokeragePercent));


    updateConfig(second);
}

/**
 * It takes a number, converts it to a string, and then inserts a comma after every third digit from
 * the right.
 * @param x - The number you want to format
 * @returns the number with commas.
 */
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * The function takes a number, divides it by 100, and returns the result
 * @param x - The percentage you want to convert to a decimal.
 * @returns The percentage of the number.
 */
function percentToDecimail(x) {
    let dec = parseFloat(x);
    console.log(dec);
    let percentage = dec / 100;
    console.log(percentage);
    return percentage;
}

new Chart(document.getElementById("FG_chart"), {
    type: "bar",
    data: {
        datasets: [{
            backgroundColor: ["#aa0000", "#303031"],
            data: [97, 3],
            borderWidth: 0
        }],
        labels: ["Your Commission", "Brokerage Commission"],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear',
                grace: '5%'
            },
            title: {
                display: false,
            },
        },
        title: {
            display: false,
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutCubic',
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    }
});

var second = new Chart(document.getElementById("them_chart"), {
    type: "bar",
    data: {
        datasets: [{
            backgroundColor: ["#aa0000", "#303031"],
            data: commissionSplit,
            borderWidth: 0
        }],
        labels: ["Your Commission", "Brokerage Commission"]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear',
                grace: '5%'
            },
            title: {
                display: false,
            },
        },
        title: {
            display: false,
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutCubic',
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
            },
        },
    }
});


function updateConfig(chart) {
    console.log(chart);
    chart.data = {
        datasets: [{
            backgroundColor: ["#aa0000", "#303031"],
            data: commissionSplit,
            borderWidth: 0
        }],
        labels: ["Your Commission", "Brokerage Commission"]
    },
    chart.options = {
        scales: {
            y: {
                beginAtZero: true,
                type: 'linear',
                grace: '5%'
            },
            title: {
                display: false,
            },
        },
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
    chart.update();
    console.log("updated");
}