const second = 1000;
const minute = 60 * second;
const hour = 60 * minute;
const day = 24 * hour;

let total = 0;
let dateFinal = 0;
let intervalId = 0;

if (localStorage.getItem("timer")) {
    dateFinal = localStorage.getItem("timer");
    console.log(dateFinal);
    intervalId = setInterval(timer, 1000);
}

function start() {

    const date = document.querySelector("input").value;
    dateFinal = new Date(date).getTime();
    localStorage.setItem("timer", dateFinal);

    intervalId = setInterval(timer, 1000);
}

function timer() {
    let now = new Date().getTime();
    total = (dateFinal - now) + (180 * 60 * 1000); // ajustar o fuso horário 

    const days = Math.floor(total / day);
    const hours = Math.floor((total % day) / hour);
    const minutes = Math.floor((total % hour) / minute);
    const seconds = Math.floor((total % minute) / second);


    console.log(days, hours, minutes, seconds);
    document.querySelector("h1").innerHTML = `${days} d ${hours} h ${minutes} m ${seconds} s`;
}

function stop() {
    document.querySelector("h1").innerHTML = "🤔";
    clearInterval(intervalId);
    localStorage.removeItem("timer");
}