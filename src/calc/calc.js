window.onload = function() {
    let first = "";
    let second = "";
    let operand = "";
    let finish = "";

    let key1 = "";

    let btnDot = document.querySelector(".dot");

    let keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    let dot = ["."];
    let signs = ["+", "-", "X", "/", "%"];
    let plusMinus = ["+/-"];

    let buttons = document.querySelector(".calc__buttons");

    let screen = document.querySelector(".calc__screen p");

    let changeSign = document.querySelector(".plus-minus");

    document.addEventListener("keypress", (event) => {
        key = event.key;

        console.log(key);
    });

    buttons.addEventListener("click", (event) => {
        if (!event.target.classList.contains("calc__button")) return;
        if (event.target.classList.contains("ac")) {
            first = "";
            second = "";
            operand = "";
            screen.textContent = "0";
        }

        let key = event.target.textContent;

        console.log(key);
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
                screen.textContent = "0.";
            }
            if (screen.textContent.includes(".")) {
                let screen1 = screen.textContent.split("");
                console.log("dot");
                if (key == ".") {
                    screen.textContent = screen1.split(0, -1).toFixed(4);
                }
            }
            if (second == "" && operand == "") {
                first += key;
                screen.textContent = first;
            } else if (first !== "" && second !== "" && finish) {
                second = key;
                finish = false;
                screen.textContent = second.toFixed(4);
            } else {
                second += key;
                screen.textContent = second;
                console.log(first, second, operand);
            }
        }
        if (signs.includes(key)) {
            operand = key;
            screen.textContent = key;

            return;
        }

        if (key == "=") {
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
                case "X":
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
    });
};