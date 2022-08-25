let w;
let h;
let field;

let reset = document.querySelector('.reset');
let button = document.querySelector('.confirm');


function start() {

    w = document.querySelector('.maze__measure-width').value;
    h = document.querySelector('.maze__measure-height').value;
    mazeFunc();
    button.removeEventListener('click', start);
};

reset.addEventListener('click', function res() {
    let fields = document.querySelector('.field');
    field.remove("div");
    button.addEventListener('click', start)
});


button.addEventListener('click', start)

function mazeFunc() {

    // field.class.classList.remove()

    let resolutionField = w * h;
    let wallCount = 1;
    let time;

    let button = document.querySelector('.button__maze');
    let maze = document.querySelector(".maze");

    field = document.createElement("div");
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
        cell.forEach(el => {
            el.classList.remove("wall")
        });
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

            let checkX = wall.getAttribute("posX");
            console.log(checkX)
                // not working
            while (coordinates[0] == 1 && coordinates[1] == 1 || coordinates[0] == w && coordinates[1] == h) {
                let coordinates = generate();
                wall = document.querySelector(
                    '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
                );
            }

            wall.classList.add("wall");

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
                // console.log(coordinates[0]);
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

            let audio = new Audio('https://zvukogram.com/mp3/cats/1187/__raclure__wrong.mp3');

            audio.play();
            clearInterval(interval);

        }

        if (avatar[0].getAttribute('posX') == exit.getAttribute('posX') && avatar[0].getAttribute('posY') == exit.getAttribute('posY')) {

            document.querySelector('.field').classList.add('win__game');


            avatar = [
                document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]'),
            ];

            exit = document.querySelector(
                '[posX = "' + w + '"][posY = "' + h + '"]'
            );
            time = setTimeout(() => { document.querySelector('.field').classList.remove('win__game') }, 1000);
            time;

            let audio = new Audio('https://zvukogram.com/mp3/cats/1354/pobednyiy-zvuk-fanfar.mp3');

            audio.play();
            wallCount++;
            createWall();
            // console.log(wallCount);


        }


        // console.log('wallY:' + wall.getAttribute('posY'), 'exitX:' + wall.getAttribute('posX'));
        avatar[0].classList.add("avatar");
    }

    let interval = setInterval(move, 1300);

    window.addEventListener('keydown', function(e) {

            if (e.keyCode == 37) {
                e.preventDefault();
                direction = 'left';

            } else if (e.keyCode == 38) {
                e.preventDefault();
                direction = 'up';

            } else if (e.keyCode == 39) {
                e.preventDefault();
                direction = 'right';
            } else if (e.keyCode == 40) {
                e.preventDefault();
                direction = 'down';
            }
        })
        // })
}