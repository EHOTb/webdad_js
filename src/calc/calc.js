window.onload = function() {
    let first = "";
    let second = "";
    let operand = "";
    let finish = "";

    let keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
    let signs = ["+", "-", "X", "/"];

    let buttons = document.querySelector(".calc__buttons");

    let screen = document.querySelector(".calc__screen p");

    // document.querySelector("calc__buttons").onclick = (event) => {
    //     if (!event.target.classList.contains("calc__button")) return;
    //     console.log(event.target.textContent);
    // };

    buttons.addEventListener("click", (event) => {
        if (!event.target.classList.contains("calc__button")) return;
        if (event.target.classList.contains("ac")) {
            first = "";
            second = "";
            operand = "";
            screen.textContent = "0";
        }
        // screen.textContent = "";

        let key = event.target.textContent;
        // console.log(key);

        if (keys.includes(key)) {
            if (second == "" && operand == "") {
                first += key;

                console.log(first);
                screen.textContent = first;
            } else if (first !== "" && second != "" && finish) {
                second = key;
                finish = false;
                screen.textContent = second;
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
                    first = first * second;
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