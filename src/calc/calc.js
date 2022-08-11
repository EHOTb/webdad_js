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

    console.log(screen.innerHTML);

    function calcAction(key) {
        console.log(first.toString().length);
        if (first.toString().length == 6) {
            screen.textContent = "error";
        }

        if (plusMinus.includes(key)) {
            if (second == "" && operand == "") {
                first = first * -1;

                screen.textContent = first;
            } else if (first !== "" && second !== "" && finish) {
                second = key;
                finish = false;

                screen.textContent = second;
            } else {
                second = second * -1;

                screen.textContent = second;
            }
        }

        if (keys.includes(key)) {
            if (screen.textContent.length == 0 && key == ".") {
                screen.textContent = "0." + screen.textContent;
                console.log("test");
            }
            if (screen.textContent.includes(".")) {
                let screen1 = screen.textContent.split("");

                if (key == ".") {
                    screen.textContent = screen1.toString().split(0, -1).toFixed(4);
                }
            }
            if (second == "" && operand == "") {
                first += key;

                screen.textContent = first;
            } else if (first !== "" && second !== "" && finish) {
                second = key;
                finish = false;

                screen.textContent = +second;
            } else {
                second += key;

                screen.textContent = second;
                // console.log(first, second, operand);
            }
        }
        if (signs.includes(key)) {
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
                        console.log("error");
                        first = "";
                        second = "";
                        operand = "";

                        return;
                    }
                    first = first / second;
                    break;
            }
            finish = true;
            screen.textContent = first;
        }
    }
};