let count = 0;
let restCount = 1;

let work = "";
let countWork = 0;
let workMinutes = document.querySelector(".item__work-minutes");
let workSeconds = document.querySelector(".item__work-seconds");
// let workOk = document.querySelector(".item__work-button");
let workMinutesPlus = document.querySelector(".work__minutes-plus");
let workMinutesMinus = document.querySelector(".work__minutes-minus");
let workSecondsPlus = document.querySelector(".work__seconds-plus");
let workSecondsMinus = document.querySelector(".work__seconds-minus");

let shortBreak = "";
let countBreak = 0;
let breakMinutes = document.querySelector(".item__break-minutes");
let breakSeconds = document.querySelector(".item__break-seconds");
// let breakOk = document.querySelector(".item__break-button");
let breakMinutesPlus = document.querySelector(".break__minutes-plus");
let breakMinutesMinus = document.querySelector(".break__minutes-minus");
let breakSecondsPlus = document.querySelector(".break__seconds-plus");
let breakSecondsMinus = document.querySelector(".break__seconds-minus");

let longBreak = "";
let countlongBreak = 0;
let longBreakMinutes = document.querySelector(".item__longBreak-minutes");
let longBreakSeconds = document.querySelector(".item__longBreak-seconds");
// let longBreakOk = document.querySelector(".item__longBreak-button");
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
    if (workMinutes.innerHTML <= 0) {
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
    if (workSeconds.innerHTML <= 0) {
        workSeconds.innerHTML = 0;
    }
    if (workSeconds.innerHTML.length == 1) {
        workSeconds.innerHTML = "0" + workSeconds.innerHTML;
    }
    if (workMinutes.innerHTML == 0) {
        workMinutes.innerHTML = 0;
    }
});

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
    }
    if (breakMinutes.innerHTML < 0) {
        breakMinutes.innerHTML = 0;
    }
});

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
    }
    if (longBreakMinutes.innerHTML < 0) {
        longBreakMinutes.innerHTML = 0;
    }
});

//====================================js==================//
function logoRemove() {
    logoLongBreak.classList.remove("text-active");
    logoWork.classList.remove("text-active");
    logoBreak.classList.remove("text-active");
}

function timeReducer() {
    seconds.innerHTML = seconds.innerHTML - 1;
    if (seconds.innerHTML < 0) {
        if (seconds.innerHTML < 0 || minutes.innerHTML < 0) {
            seconds.innerHTML = 59;
            minutes.innerHTML = 0;
        }

        if (seconds.innerHTML < 0) {
            seconds.innerHTML = 0;
            minutes.innerHTML = +minutes.innerHTML - 1;
        }
    }
    if (seconds.innerHTML.length == 1) {
        seconds.innerHTML = "0" + seconds.innerHTML;
    }
}

function endJob() {
    if (seconds.innerHTML == "00" && minutes.innerHTML == "0") {
        new Audio(
            "https://first.ap-south-1.linodeobjects.com/getringtone/uploads/ringtones/%D0%9E%D1%80%D0%BA%20-%20%D0%93%D0%BE%D1%82%D0%BE%D0%B2%20%D0%B2%D0%BA%D0%B0%D0%BB%D1%8B%D0%B2%D0%B0%D1%82%D1%8C%21_yaDY.mp3"
        ).play();
        clearInterval(work);
        logoRemove();
        work = "";
        restCount++;
        count++;
        main();
    }
}

function endRelax() {
    if (seconds.innerHTML == "00" && minutes.innerHTML == "0") {
        new Audio(
            "https://freetones.info/uploads/files/2021-05/1622322904_hvsh-zhiko-relax-take-it-easy.mp3 "
        ).play();

        clearInterval(work);
        logoRemove();
        work = "";
        count++;
        second();
    }
}

function main() {
    if (count == 0 || count % 2 == 0) {
        clearInterval(work);
        work = "";

        minutes.innerHTML = workMinutes.innerHTML;
        seconds.innerHTML = workSeconds.innerHTML;
        logoWork.classList.add("text-active");
        work = setInterval(function time() {
            timeReducer();
            endRelax();
        }, 1000);
    }

    logoWork.classList.remove("active");
}

function second() {
    if (restCount % 3 == 0) {
        work = "";

        logoLongBreak.classList.add("text-active");
        minutes.innerHTML = longBreakMinutes.innerHTML;
        seconds.innerHTML = longBreakSeconds.innerHTML;

        work = setInterval(function time() {
            timeReducer();
            endJob();
        }, 1000);
    } else {
        work = "";
        console.log("testokSHORT");
        logoBreak.classList.add("text-active");
        minutes.innerHTML = breakMinutes.innerHTML;
        seconds.innerHTML = breakSeconds.innerHTML;

        work = setInterval(function time() {
            timeReducer();
            endJob();
        }, 1000);
    }
    start.removeEventListener("click", main);
}

start.addEventListener("click", main);

stop.addEventListener("click", () => {
    clearInterval(work);
    work = "";

    minutes.innerHTML = minutes.innerHTML;
    seconds.innerHTML = seconds.innerHTML;
    start.addEventListener("click", function func() {
        if (count == 0 || count % 2 == 0) {
            clearInterval(work);
            work = "";
            work = setInterval(function time() {
                timeReducer();
                endRelax();
            }, 1000);
        } else if (restCount % 3 == 0) {
            clearInterval(work);
            work = "";
            work = setInterval(function time() {
                timeReducer();
                endJob();
            }, 1000);
        } else {
            clearInterval(work);
            work = "";
            work = setInterval(function time() {
                timeReducer();
                endJob();
            }, 1000);
        }
    });
    start.removeEventListener("click", main);
});