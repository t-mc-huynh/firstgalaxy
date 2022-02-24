const febHolidays = [
    "Our families are a big deal to us, and we know yours is too.",
    "We know you need time for rejuvenation.",
    "Compensation is an important part of any role, and we seek to pay you fairly for the value and experience you provide.",
    "Growth in your knowledge and mastery of your field will be reflected in your work.",
    "Flexible work hours 24/7",
    "Work from anywhere!",
    "Take vacation when you need it. We don't track vacation days.",
    "Every day brings a new challenge. Every day brings an opportunity to learn and grow."
];

const ulEl = document.querySelector("#carousel_list");
console.log(ulEl);
const d = new Date();
let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
let activeIndex = daynumber;
const rotate = -360 / febHolidays.length;
init();

function init() {
    febHolidays.forEach((holiday, idx) => {
        const liEl = document.createElement("li");
        liEl.style.setProperty("--day_idx", idx);
        liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${
			idx + 1
		}</time><span>${holiday}</span>`;
        ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
}

function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);

    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");

    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(`li:nth-child(${activeIndex + 1})`);
    newActiveEl.classList.add("active");
}

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            adjustDay(-1);
            break;
        case "ArrowDown":
            adjustDay(1);
            break;
        default:
            return;
    }
});