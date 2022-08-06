window.onload = function() {
    let first = "";
    let second = "";
    let operand = "";
    let finish = "";

    let buttons = document.querySelector("calc__main");

    let screen = document.querySelector("calc__screen p");

    document.querySelector("calc__buttons").onclick = (event) => {
        if (!event.target.classList.contains("calc__button")) return;
        console.log(event.target.textContent);
    };
    console.log("hello");

    function clearScreen() {}

    function operator(e) {
        switch (operator) {
            case "+":
                first + second;
                break;
            case "-":
                first - second;
                break;
            case "X":
                first * second;
                break;
            case "/":
                first / second;
                break;
        }
    }
};