let w = 5;
let h = 7;
let resolutionField = w * h;

let maze = document.querySelector(".maze");

let field = document.createElement("div");
maze.appendChild(field);
field.classList.add("field");
field.style.width = w * 50 + "px";
field.style.height = h * 50 + "px";

for (let i = 0; i < resolutionField; i++) {
    let cell = document.createElement("div");
    field.appendChild(cell);
    cell.classList.add("cell");
}

let cell = document.querySelectorAll(".cell");
let x = 1;
let y = h;

for (let i = 0; i < resolutionField; i++) {
    if (x > w) {
        x = 1;
        y--;
    }
    cell[i].setAttribute("posX", x);
    cell[i].setAttribute("posY", y);
    x++;

    if (cell[0] == 1) {}
}

function generate() {
    let posX = Math.round(Math.random() * (w - 1) + 1);
    let posY = Math.round(Math.random() * (h - 1) + 1);
    // console.log(posX, posY);
    return [posX, posY];
}

let coordinates = generate();
let wall = [
    document.querySelector(
        '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
    ),
];

let avatar = [
    document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]'),
];

let exit = [document.querySelector('[posX = "' + w + '"][posY = "' + h + '"]')];

for (let i = 0; i < avatar.length; i++) {
    avatar[i].classList.add("avatar");
}

for (let i = 0; i < exit.length; i++) {
    exit[i].classList.add("exit");
}

for (let i = 0; i < wall.length; i++) {
    wall[i].classList.add("wall");
}

// let avatar = [document.querySelector("[ posX = '1'][ posY = '1']")];
// console.log(avatar);
// avatar.classList.add("avatar");