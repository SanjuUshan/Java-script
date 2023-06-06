const hourEl = document.getElementById("hour");
const minuteEL = document.getElementById("minutes");
const secondEL = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    hourEl.innerText = h;
    minuteEL.innerText = m;
    secondEL.innerText = s;
    ampmEl, (innerText = ampm);
    setTimeout(() => {
        updateClock()
    }, 1000)

}

updateClock()