import { TOKEN } from './app-env.js';

$.ajax({
    url: "https://data.muni.org/resource/r3di-nq2j.json?state=CA&appraisalyear=2020",
    type: "GET",
    data: {
        "$limit": 5,
        "$$app_token": TOKEN.MUNI_TOKEN
    }
}).done(function(data) {
    console.log(data);
});

$.ajax({
    url: "https://data.muni.org/resource/r3di-nq2j.json?state=CA&appraisalyear=2020",
    type: "GET",
    data: {
        "$limit": 10,
        "$$app_token": TOKEN.MUNI_TOKEN
    }
}).done(function(data) {
    console.log(data);
});