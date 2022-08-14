window.onload = function() {
    let first = "";
    let second = "";
    let operand = "";
    let finish = "";
    let number = "";
    let key = "";

    let keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    let dot = ["."];
    let signs = ["+", "-", "*", "/", "%"];
    let plusMinus = ["+/-"];

    let buttons = document.querySelector(".calc__buttons");

    let screen = document.querySelector(".calc__screen p");

    document.addEventListener("keypress", (event) => {
        calcAction(event.key);

        if (!event.target.classList.contains("calc__button")) return;
        if (event.target.classList.contains("ac")) {
            first = "";
            second = "";
            operand = "";
            screen.textContent = "0";
        }
    });

    buttons.addEventListener("click", (event) => {
        key = event.target.textContent;

        if (!event.target.classList.contains("calc__button")) return;
        if (event.target.classList.contains("ac")) {
            first = "";
            second = "";
            operand = "";
            screen.textContent = "0";
        }
        calcAction(key);
    });

    function chckLength(el) {
        if (el.toString().length >= 8) {
            let num = +el;
            el = num.toFixed(4).replace(/0*$/, "");
            el = el.slice(0, 7);
            screen.textContent = "error";
            first = "";
            second = "";
            operand = "";
            return;
        }
    }

    function calcAction(key) {
        if (plusMinus.includes(key)) {
            if (second == "" && operand == "") {
                first = first * -1;

                screen.textContent = first;
                chckLength(first);
            } else if (first !== "" && second !== "" && finish) {
                second = key;
                finish = false;

                screen.textContent = second;
                chckLength(second);
            } else {
                second = second * -1;

                screen.textContent = second;
                chckLength(second);
            }
        }

        if (keys.includes(key)) {
            if (second == "" && operand == "") {
                first += key;
                if (first.indexOf(".") !== -1) {
                    if (first.indexOf(".") === 0) {
                        first = "0" + first;
                    }
                    first = first.replace(/^([^\.]*\.)|\./g, "$1");
                }
                screen.textContent = first;

                chckLength(first);
                // dotCheck(first);
            } else if (first !== "" && second !== "" && finish) {
                second = key;
                finish = false;

                screen.textContent = +second;
                chckLength(second);
                // dotCheck(second);
            } else {
                second += key;
                if (second.indexOf(".") !== -1) {
                    if (second.indexOf(".") === 0) {
                        second = "0" + second;
                    }
                    second = second.replace(/^([^\.]*\.)|\./g, "$1");
                }
                screen.textContent = second;
                chckLength(second);

                console.log(first, second, operand);
            }
        }
        if (first !== "" && signs.includes(key)) {
            operand = key;
            screen.textContent = key;

            return;
        }

        if (key == "=" || event.keyCode == "13") {
            if (second == "") {
                second = first;
            }
            switch (operand) {
                case "+":
                    first = +first + +second;
                    break;
                case "-":
                    first = first - second;
                    break;
                case "*":
                    first = +first * +second;
                    break;
                case "%":
                    first = (+first / 100) * second;
                    break;
                case "/":
                    if (second === "0") {
                        screen.textContent = "error";

                        first = "";
                        second = "";
                        operand = "";

                        return;
                    }
                    first = first / second;
                    break;
            }
            finish = true;

            if (first.toString().length >= 8) {
                let num = +first;
                first = num.toFixed(4).replace(/0*$/, "");
                first = Number(first.slice(0, 7));
                // console.log("num", num);
                // console.log("first", first);
                // console.log(">7");
                // console.log("typeof", typeof first);
                screen.textContent = Number(first);
                if (first.toString().length >= 9) {
                    screen.textContent = "error";
                    first = "";
                    second = "";
                    operand = "";
                    return;
                }
            } else {
                console.log("до 7");

                console.log(typeof first);
                screen.textContent = first;
            }
        }
    }
};