let w = 7;
let h = 4;
let resolutionField = w * h;
let wallCount = 1;
// let button = document.querySelector('.button__maze');

// button.addEventListener('click', () => {
//     console.log(document.querySelector('.maze__measure-width').value)
//     w = document.querySelector('.maze__measure-width').value;
// })

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

let wall;

function createWall() {
    for (let i = 0; i < wallCount; i++) {
        function generate() {
            let posX = Math.round(Math.random() * (w - 1) + 1);
            let posY = Math.round(Math.random() * (h - 1) + 1);
            // console.log(posX, posY);
            return [posX, posY];
        }

        let coordinates = generate();

        wall = document.querySelector(
            '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
        );
        // not working
        // while (wall.classList.contains("wall" || "exit" || "avatar")) {
        //     let coordinates = generate();
        //     wall = document.querySelector(
        //         '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
        //     );
        // }
        wall.classList.add("wall");
        console.log(wall)
            // console.log(wall);
    }
}

createWall();

let avatar = [
    document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]'),
];

// let exit = [document.querySelector('[posX = "' + w + '"][posY = "' + h + '"]')];

let exit = document.querySelector(
    '[posX = "' + w + '"][posY = "' + h + '"]'
);

exit.classList.add("exit");



for (let i = 0; i < avatar.length; i++) {
    avatar[i].classList.add("avatar");
}

for (let i = 0; i < exit.length; i++) {
    exit[i].classList.add("exit");
}

// for (let i = 0; i < wall.length; i++) {
//     wall[i].classList.add("wall");
// }

let direction = 'right';

function move() {
    let coordinates = [
        avatar[0].getAttribute("posX"),
        avatar[0].getAttribute("posY"),
    ];
    avatar[0].classList.remove("avatar");
    avatar.pop();
    if (direction == 'right') {
        if (coordinates[0] < w) {
            // console.log('coordinates[0] :' + coordinates[0], "w:" + w);
            avatar.unshift(
                document.querySelector(
                    '[posX = "' + (+coordinates[0] + 1) + '"][posY = "' + coordinates[1] + '"]'
                )
            );
        } else {
            coordinates[0] = w;
            avatar.unshift(document.querySelector('[posX =  "' + (+coordinates[0]) + '"][posY = "' + coordinates[1] + '"]'));
        }
    } else if (direction == 'left') {
        if (coordinates[0] > 1) {
            // console.log(coordinates[0]);
            avatar.unshift(
                document.querySelector(
                    '[posX = "' + (+coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'
                )
            );
        } else {
            avatar.unshift(document.querySelector('[posX =  "1"][posY = "' + coordinates[1] + '"]'));
        }
    } else if (direction == 'up') {
        if (coordinates[1] < h) {
            avatar.unshift(
                document.querySelector(
                    '[posX = "' + coordinates[0] + '"][posY = "' + (+coordinates[1] + 1) + '"]'
                )
            );
        } else {
            coordinates[1] = h;
            console.log(coordinates[0]);
            avatar.unshift(document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "' + (+coordinates[1]) + '"]'));
        }
    } else if (direction == 'down') {
        if (coordinates[1] > 1) {

            avatar.unshift(
                document.querySelector(
                    '[posX = "' + coordinates[0] + '"][posY = "' + (+coordinates[1] - 1) + '"]'
                )
            );
        } else {

            avatar.unshift(document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "1"]'));
        }
    }
    if (avatar[0].getAttribute('posX') == wall.getAttribute('posX') && avatar[0].getAttribute('posY') == wall.getAttribute('posY')) {
        document.querySelector('.field').classList.add('end__game');
    }

    if (avatar[0].getAttribute('posX') == exit.getAttribute('posX') && avatar[0].getAttribute('posY') == exit.getAttribute('posY')) {

        document.querySelector('.field').classList.add('win__game');


        avatar = [
            document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]'),
        ];

        exit = document.querySelector(
            '[posX = "' + w + '"][posY = "' + h + '"]'
        );
        let time = setTimeout(() => { document.querySelector('.field').classList.remove('win__game') }, 1000);
        time;

        let audio = new Audio('https://zvukogram.com/mp3/cats/1354/pobednyiy-zvuk-fanfar.mp3');

        audio.play();
        wallCount++;
        createWall();
        console.log(wallCount);

    }


    // console.log('wallY:' + wall.getAttribute('posY'), 'exitX:' + wall.getAttribute('posX'));
    avatar[0].classList.add("avatar");
}

let interval = setInterval(move, 1300);

window.addEventListener('keydown', function(e) {
    if (e.keyCode == 37) {
        direction = 'left';

    } else if (e.keyCode == 38) {
        direction = 'up';

    } else if (e.keyCode == 39) {

        direction = 'right';
    } else if (e.keyCode == 40) {

        direction = 'down';
    }
})