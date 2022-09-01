let width = document.querySelector('.maze__measure-width').value;
let height = document.querySelector('.maze__measure-height').value;
let field;
let avatar;
let cell;
let wallCount = 0;

let wallsOnField;

let direction;
let walls = [];
let positionX;
let positionY;


let reset = document.querySelector('.reset');
let buttonStart = document.querySelector('.confirm');


buttonStart.addEventListener('click', start);

function start() {
    createField();
    buttonStart.removeEventListener('click', start);
};

let generate = () => {
    let posX = Math.round(Math.random() * (width - 1) + 1);
    let posY = Math.round(Math.random() * (height - 1) + 1);

    if (posX == 1 && posY == 1) {
        return generate();
    }
    if (posX == width && posY == height) {
        return generate();
    }

    return `[posX="${posX}"][posY="${posY}"]`;
}

wallsOnField = (field, wallCount = 0) => {
    let wallsCoordinates = generate();
    let wall = document.querySelector(wallsCoordinates);

    if (wall.classList.contains('wall')) {
        wall -= 1;
    }
    console.log(wall)
    wall.classList.add('wall');

    return wallsOnField(field, wallCount);

}


function createField() {

    width = document.querySelector('.maze__measure-width').value;
    height = document.querySelector('.maze__measure-height').value;

    let resolutionField = width * height;
    let time;
    let maze = document.querySelector(".maze");

    field = document.createElement("div");
    maze.appendChild(field);
    field.classList.add("field");
    field.style.width = width * 50 + "px";
    field.style.height = height * 50 + "px";

    for (let i = 0; i < resolutionField; i++) {
        let cell = document.createElement("div");
        field.appendChild(cell);
        cell.classList.add("cell");
    }

    cell = document.querySelectorAll(".cell");
    let x = 1;
    let y = height;

    for (let i = 0; i < resolutionField; i++) {
        if (x > width) {
            x = 1;
            y--;
        }
        cell[i].setAttribute("posX", x);
        cell[i].setAttribute("posY", y);
        x++;

    }
    avatarFunc();

    exit();
}

function avatarFunc() {
    for (let el of cell) {
        el.classList.remove('avatar');
    }
    avatar =

        document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]');
    avatar.classList.add('avatar');
}

function exit() {
    exit = document.querySelector(
        '[posX = "' + width + '"][posY = "' + height + '"]'
    );
    exit.classList.add('exit');
}

let move = (event) => {

    let avatarCell = document.querySelector('.avatar');
    let posX = avatarCell.getAttribute('posX');
    let posY = avatarCell.getAttribute('posY');

    x = Number(posX);
    y = Number(posY);

    if (event.code === 'ArrowUp' && y < height) {
        event.preventDefault();
        y += 1;
    } else {
        y = y;
    }
    if (event.code === 'ArrowDown' && y > 1) {
        event.preventDefault();
        y -= 1;
    } else {
        y = y;
    }
    if (event.code === 'ArrowLeft' && x > 1) {
        event.preventDefault();
        x -= 1;
    } else {
        x = x;
    }
    if (event.code === 'ArrowRight' && x < width) {
        event.preventDefault();
        x += 1;
    } else {
        x = x;
    }
    let nextMove = document.querySelector(`[posx="${x}"][posy="${y}"]`);


    if (nextMove.classList.contains('wall')) {
        let audio = new Audio('https://zvukogram.com/mp3/cats/1187/__raclure__wrong.mp3');

        audio.play();

        return;
    }
    if (x == width && y == height) {
        let audio = new Audio('https://zvukogram.com/mp3/cats/1354/pobednyiy-zvuk-fanfar.mp3');

        wallsOnField();
        audio.play();
        avatarCell.classList.remove('avatar');
        nextMove.classList.remove('avatar');
        avatarFunc();
        wallCount++;

        return;
    }

    avatarCell.classList.remove('avatar');
    nextMove.classList.add('avatar');
}

window.addEventListener("keydown", move);