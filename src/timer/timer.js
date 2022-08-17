let work = "";
let countWork = 0;
let workMinutes = document.querySelector(".item__work-minutes");
let workSeconds = document.querySelector(".item__work-seconds");
let workOk = document.querySelector(".item__work-button");
let workMinutesPlus = document.querySelector(".work__minutes-plus");
let workMinutesMinus = document.querySelector(".work__minutes-minus");
let workSecondsPlus = document.querySelector(".work__seconds-plus");
let workSecondsMinus = document.querySelector(".work__seconds-minus");

let shortBreak = "";
let countBreak = 0;
let breakMinutes = document.querySelector(".item__break-minutes");
let breakSeconds = document.querySelector(".item__break-seconds");
let breakOk = document.querySelector(".item__break-button");
let breakMinutesPlus = document.querySelector(".break__minutes-plus");
let breakMinutesMinus = document.querySelector(".break__minutes-minus");
let breakSecondsPlus = document.querySelector(".break__seconds-plus");
let breakSecondsMinus = document.querySelector(".break__seconds-minus");

let longBreak = "";
let countlongBreak = 0;
let longBreakMinutes = document.querySelector(".item__longBreak-minutes");
let longBreakSeconds = document.querySelector(".item__longBreak-seconds");
let longBreakOk = document.querySelector(".item__longBreak-button");
let longBreakMinutesPlus = document.querySelector(".longBreak__minutes-plus");
let longBreakMinutesMinus = document.querySelector(".longBreak__minutes-minus");
let longBreakSecondsPlus = document.querySelector(".longBreak__seconds-plus");
let longBreakSecondsMinus = document.querySelector(".longBreak__seconds-minus");

let stop = document.querySelector(".footer__btn-stop");
let start = document.querySelector(".footer__btn-start");

let minutes = document.querySelector(".timer__time-minutes");
let seconds = document.querySelector(".timer__time-seconds");

let logoWork = document.querySelector("#text-work");
let logoBreak = document.querySelector("#text-break");
let logoLongBreak = document.querySelector("#text-longBreak");

//=======================================worktime=========================//

workMinutesPlus.addEventListener("click", () => {
    workMinutes.innerHTML = +workMinutes.innerHTML + 1;
});

workMinutesMinus.addEventListener("click", () => {
    workMinutes.innerHTML = +workMinutes.innerHTML - 1;
    if (workMinutes.innerHTML < 0) {
        workMinutes.innerHTML = 0;
    }
});

workSecondsPlus.addEventListener("click", () => {
    workSeconds.innerHTML = +workSeconds.innerHTML + 1;
    if (workSeconds.innerHTML.length == 1) {
        workSeconds.innerHTML = "0" + workSeconds.innerHTML;
    }
    if (workSeconds.innerHTML > 60) {
        workMinutes.innerHTML = +workMinutes.innerHTML + 1;
        workSeconds.innerHTML = "00";
    }
});

workSecondsMinus.addEventListener("click", () => {
    workSeconds.innerHTML = +workSeconds.innerHTML - 1;
    if (workSeconds.innerHTML < 0) {
        workSeconds.innerHTML = 0;
    }
    if (workSeconds.innerHTML.length == 1) {
        workSeconds.innerHTML = "0" + workSeconds.innerHTML;
        console.log(workSeconds.innerHTML.length);
    }
    if (workMinutes.innerHTML == 0) {
        workMinutes.innerHTML = 0;
    }
});

workOk.addEventListener("click", () =>
    console.log(workMinutesHTML, workSecondsHTML)
);

//=======================================break=========================//

breakMinutesPlus.addEventListener("click", () => {
    breakMinutes.innerHTML = +breakMinutes.innerHTML + 1;
});

breakMinutesMinus.addEventListener("click", () => {
    breakMinutes.innerHTML = +breakMinutes.innerHTML - 1;
    if (breakMinutes.innerHTML < 0) {
        breakMinutes.innerHTML = 0;
    }
});

breakSecondsPlus.addEventListener("click", () => {
    breakSeconds.innerHTML = +breakSeconds.innerHTML + 1;
    if (breakSeconds.innerHTML.length == 1) {
        breakSeconds.innerHTML = "0" + breakSeconds.innerHTML;
    }
    if (breakSeconds.innerHTML > 60) {
        breakMinutes.innerHTML = +breakMinutes.innerHTML + 1;
        breakSeconds.innerHTML = "00";
    }
});

breakSecondsMinus.addEventListener("click", () => {
    breakSeconds.innerHTML = +breakSeconds.innerHTML - 1;
    if (breakSeconds.innerHTML < 0) {
        breakSeconds.innerHTML = 0;
    }
    if (breakSeconds.innerHTML.length == 1) {
        breakSeconds.innerHTML = "0" + breakSeconds.innerHTML;
        console.log(breakSeconds.innerHTML.length);
    }
    if (breakMinutes.innerHTML < 0) {
        breakMinutes.innerHTML = 0;
    }
});

breakOk.addEventListener("click", () =>
    console.log(breakMinutesHTML, workSecondsHTML)
);

//=======================================longBreak=========================//

longBreakMinutesPlus.addEventListener("click", () => {
    longBreakMinutes.innerHTML = +longBreakMinutes.innerHTML + 1;
});

longBreakMinutesMinus.addEventListener("click", () => {
    longBreakMinutes.innerHTML = +longBreakMinutes.innerHTML - 1;
    if (longBreakMinutes.innerHTML < 0) {
        longBreakMinutes.innerHTML = 0;
    }
});

longBreakSecondsPlus.addEventListener("click", () => {
    longBreakSeconds.innerHTML = +longBreakSeconds.innerHTML + 1;
    if (longBreakSeconds.innerHTML.length == 1) {
        longBreakSeconds.innerHTML = "0" + longBreakSeconds.innerHTML;
    }
    if (longBreakSeconds.innerHTML > 60) {
        longBreakMinutes.innerHTML = +longBreakMinutes.innerHTML + 1;
        longBreakSeconds.innerHTML = "00";
    }
});

longBreakSecondsMinus.addEventListener("click", () => {
    longBreakSeconds.innerHTML = +longBreakSeconds.innerHTML - 1;
    if (longBreakSeconds.innerHTML < 0) {
        longBreakSeconds.innerHTML = 0;
    }
    if (longBreakSeconds.innerHTML.length == 1) {
        longBreakSeconds.innerHTML = "0" + longBreakSeconds.innerHTML;
        console.log(longBreakSeconds.innerHTML.length);
    }
    if (longBreakMinutes.innerHTML < 0) {
        longBreakMinutes.innerHTML = 0;
    }
});

longBreakOk.addEventListener("click", () =>
    console.log(longBreakMinutesHTML, workSecondsHTML)
);

//====================================js==================//

start.addEventListener("click", function start() {
    if (countWork == 0 && shortBreak == 0 && longBreak == 0) {
        minutes.innerHTML = workMinutes.innerHTML;
        seconds.innerHTML = workSeconds.innerHTML;
        work = setInterval(function time() {
            console.log(seconds.innerHTML, minutes.innerHTML);
            seconds.innerHTML = seconds.innerHTML - 1;
            if (seconds.innerHTML == 0) {
                if (seconds.innerHTML == 0) {
                    seconds.innerHTML = 59;
                    minutes.innerHTML = +minutes.innerHTML - 1;
                }
            }
            if (seconds.innerHTML.length == 1) {
                seconds.innerHTML = "0" + seconds.innerHTML;
            }
            if (seconds.innerHTML == "01" && minutes.innerHTML == "0") {
                countWork++;
                shortBreak++;
                longBreak++;
                logoWork.classList.remove("text-active");
                logoBreak.classList.add("text-active");
                console.log("test");
                minutes.innerHTML = breakMinutes.innerHTML;
                seconds.innerHTML = breakSeconds.innerHTML;
            }
        }, 1000);
        this.removeEventListener("click", start);
    }
    if (seconds.innerHTML == 0 && minutes.innerHTML == 0) {
        console.log(end);
    }
    countWork += 1;
    logoWork.classList.remove("active");
});

stop.addEventListener("click", () => {
    clearInterval(work);
    start.addEventListener("click", function time() {
        work = setInterval(function time() {
            seconds.innerHTML = seconds.innerHTML - 1;
            if (seconds.innerHTML == 0) {
                if (seconds.innerHTML == 0) {
                    seconds.innerHTML = 60;
                    minutes.innerHTML = +minutes.innerHTML - 1;
                }
            }
            if (seconds.innerHTML.length == 1) {
                seconds.innerHTML = "0" + seconds.innerHTML;
            }
        }, 1000);
    });
});