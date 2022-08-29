let width;
let height;
let field;
let avatar;
let cell;
let wallCount = 0;
let wall;
let exit;
let direction;
let walls = [];


let reset = document.querySelector('.reset');
let buttonStart = document.querySelector('.confirm');

function start() {
    width = document.querySelector('.maze__measure-width').value;
    height = document.querySelector('.maze__measure-height').value;
    // mazeFunc();
    createField();
    buttonStart.removeEventListener('click', start);

};

buttonStart.addEventListener('click', start);



function createField() {

    let resolutionField = width * height;
    // let wallCount = 1;
    let time;

    // let button = document.querySelector('.button__maze');
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
    exitWin();
    avatarFunc();
    arrowsMove();
}

function exitWin() {
    exit = document.querySelector(
        '[posX = "' + width + '"][posY = "' + height + '"]'
    );
    exit.classList.add('exit')

}

function avatarFunc() {
    avatar =
        document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]');

    avatar.classList.add('avatar')
}


function arrowsMove() {
    window.addEventListener('keydown', function(e) {
        move();
        if (e.keyCode == 37) {
            e.preventDefault();
            direction = 'left';
            console.log("l")

        } else if (e.keyCode == 38) {
            e.preventDefault();
            direction = 'up';
            console.log("u")

        } else if (e.keyCode == 39) {
            e.preventDefault();
            direction = 'right';
            console.log("r")

        } else if (e.keyCode == 40) {
            e.preventDefault();
            direction = 'down';
            console.log("d")
        }
    })
}


function move() {
    // console.log("avatar.getAttribute('posX') :" + avatar.getAttribute('posX'))
    // console.log("avatar.getAttribute('posY') :" + avatar.getAttribute('posY'))
    let coordinates = [
        avatar.getAttribute('posX'),
        avatar.getAttribute('posY'),
    ];
    console.log(coordinates)

    if (direction == 'right') {
        if (coordinates[0] < width) {
            avatar.classList.remove("avatar");

            avatar =
                document.querySelector(
                    '[posX = "' + (+coordinates[0] + 1) + '"][posY = "' + coordinates[1] + '"]'
                )
            avatar.classList.add("avatar");

        } else {
            coordinates[0] = width;
            avatar = document.querySelector('[posX =  "' + (+coordinates[0]) + '"][posY = "' + coordinates[1] + '"]');
        }
    } else if (direction == 'left') {
        if (coordinates[0] > 1) {
            avatar.classList.remove("avatar");

            avatar =
                document.querySelector(
                    '[posX = "' + (+coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'
                )
            avatar.classList.add("avatar");
        } else {
            avatar = document.querySelector('[posX =  "1"][posY = "' + coordinates[1] + '"]');
        }
    } else if (direction == 'up') {
        if (coordinates[1] < height) {
            avatar.classList.remove("avatar");
            avatar =
                document.querySelector(
                    '[posX = "' + coordinates[0] + '"][posY = "' + (+coordinates[1] + 1) + '"]'
                );
            avatar.classList.add("avatar");
        } else {
            coordinates[1] = height;

            avatar = document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "' + (+coordinates[1]) + '"]');
        }
    } else if (direction == 'down') {
        if (coordinates[1] > 1) {
            avatar.classList.remove("avatar");
            avatar =
                document.querySelector(
                    '[posX = "' + coordinates[0] + '"][posY = "' + (+coordinates[1] - 1) + '"]'
                );
            avatar.classList.add("avatar");
        } else {

            avatar = document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "1"]');
        }
    }
    winLose()
}

function winLose() {

    // if (avatar.getAttribute('posX') == wall.getAttribute('posX') && avatar.getAttribute('posY') == wall.getAttribute('posY')) {
    //     document.querySelector('.field').classList.add('end__game');

    //     let audio = new Audio('https://zvukogram.com/mp3/cats/1187/__raclure__wrong.mp3');

    //     audio.play();
    //     clearInterval(interval);

    // }

    if (avatar.getAttribute('posX') == exit.getAttribute('posX') && avatar.getAttribute('posY') == exit.getAttribute('posY')) {

        document.querySelector('.field').classList.add('win__game');


        avatar =
            document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]');

        exit = document.querySelector(
            '[posX = "' + width + '"][posY = "' + height + '"]'
        );
        time = setTimeout(() => { document.querySelector('.field').classList.remove('win__game') }, 1000);
        time;

        let audio = new Audio('https://zvukogram.com/mp3/cats/1354/pobednyiy-zvuk-fanfar.mp3');

        audio.play();
        wallCount++;
        avatarFunc();
        createWall();
    }

}



function createWall() {

    console.log('walls:' + walls)

    console.log('wallCount:' + wallCount)
    console.log('type' + Array.isArray(walls))
    cell.forEach(el => {
        el.classList.remove("wall")
    });
    for (let i = 0; i < wallCount; i++) {
        function generate() {
            let posX = Math.round(Math.random() * (width - 1) + 1);
            let posY = Math.round(Math.random() * (height - 1) + 1);
            // console.log(posX, posY);

            return [posX, posY];
        }
        let coordinates = generate();


        for (let i = 0; i < wallCount; i++) {
            walls[i] = [];
            for (let j = 0; j < 2; j++) {
                walls[i].push(coordinates[j]);
            }
        }


        wall = document.querySelector(
            '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
        );

        let checkX = wall.getAttribute("posX");
        // console.log(checkX)
        // not working
        // while (coordinates[0] == 1 && coordinates[1] == 1 || coordinates[0] == width && coordinates[1] == height) {
        //     let coordinates = generate();
        //     wall = document.querySelector(
        //         '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
        //     );

        // }

        // console.log('walls:' + walls)

        wall.classList.add("wall");

        // console.log(wall);
    }
}


// } else if (direction == 'left') {
//     if (coordinates[0] > 1) {
//         // console.log(coordinates[0]);
//         avatar.unshift(
//             document.querySelector(
//                 '[posX = "' + (+coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'
//             )
//         );
//     } else {
//         avatar.unshift(document.querySelector('[posX =  "1"][posY = "' + coordinates[1] + '"]'));
//     }
// } else if (direction == 'up') {
//     if (coordinates[1] < height) {
//         avatar.unshift(
//             document.querySelector(
//                 '[posX = "' + coordinates[0] + '"][posY = "' + (+coordinates[1] + 1) + '"]'
//             )
//         );
//     } else {
//         coordinates[1] = height;
//         // console.log(coordinates[0]);
//         avatar.unshift(document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "' + (+coordinates[1]) + '"]'));
//     }
// } else if (direction == 'down') {
//     if (coordinates[1] > 1) {

//         avatar.unshift(
//             document.querySelector(
//                 '[posX = "' + coordinates[0] + '"][posY = "' + (+coordinates[1] - 1) + '"]'
//             )
//         );
//     } else {

//         avatar.unshift(document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "1"]'));
//     }
// }
// if (avatar[0].getAttribute('posX') == wall.getAttribute('posX') && avatar[0].getAttribute('posY') == wall.getAttribute('posY')) {
//     document.querySelector('.field').classList.add('end__game');

//     let audio = new Audio('https://zvukogram.com/mp3/cats/1187/__raclure__wrong.mp3');

//     audio.play();
//     clearInterval(interval);

// }

// if (avatar[0].getAttribute('posX') == exit.getAttribute('posX') && avatar[0].getAttribute('posY') == exit.getAttribute('posY')) {

//     document.querySelector('.field').classList.add('win__game');


//     avatar = [
//         document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]'),
//     ];

//     exit = document.querySelector(
//         '[posX = "' + width + '"][posY = "' + height + '"]'
//     );
//     time = setTimeout(() => { document.querySelector('.field').classList.remove('win__game') }, 1000);
//     time;

//     let audio = new Audio('https://zvukogram.com/mp3/cats/1354/pobednyiy-zvuk-fanfar.mp3');

//     audio.play();
//     wallCount++;
//     createWall();
// }





//     exit.classList.add("exit");

//     for (let i = 0; i < avatar.length; i++) {
//         avatar[i].classList.add("avatar");
//     }

//     for (let i = 0; i < exit.length; i++) {
//         exit[i].classList.add("exit");
//     }
// }
// exitWin();


// function start() {
//     width = document.querySelector('.maze__measure-width').value;
//     height = document.querySelector('.maze__measure-height').value;
//     mazeFunc();
//     buttonStart.removeEventListener('click', start);
// };

// reset.addEventListener('click', function res() {
//     let fields = document.querySelector('.field');
//     field.remove("div");
//     buttonStart.addEventListener('click', start)
// });

// buttonStart.addEventListener('click', start);


// function createField() {
//     start();
//     let resolutionField = width * height;
//     let wallCount = 1;
//     let time;

//     let button = document.querySelector('.button__maze');
//     let maze = document.querySelector(".maze");

//     field = document.createElement("div");
//     maze.appendChild(field);
//     field.classList.add("field");
//     field.style.width = width * 50 + "px";
//     field.style.height = height * 50 + "px";

//     for (let i = 0; i < resolutionField; i++) {
//         let cell = document.createElement("div");
//         field.appendChild(cell);
//         cell.classList.add("cell");
//     }

//     cell = document.querySelectorAll(".cell");
//     let x = 1;
//     let y = height;

//     for (let i = 0; i < resolutionField; i++) {
//         if (x > width) {
//             x = 1;
//             y--;
//         }
//         cell[i].setAttribute("posX", x);
//         cell[i].setAttribute("posY", y);
//         x++;

//         if (cell[0] == 1) {}
//     }

// }
// createField();

//  function createWall() {
//     cell.forEach(el => {
//         el.classList.remove("wall")
//     });
//     for (let i = 0; i < wallCount; i++) {
//         function generate() {
//             let posX = Math.round(Math.random() * (width - 1) + 1);
//             let posY = Math.round(Math.random() * (height - 1) + 1);
//             // console.log(posX, posY);
//             return [posX, posY];
//         }

//         let coordinates = generate();

//         wall = document.querySelector(
//             '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
//         );

//         let checkX = wall.getAttribute("posX");
//         console.log(checkX)
//             // not working
//         while (coordinates[0] == 1 && coordinates[1] == 1 || coordinates[0] == width && coordinates[1] == height) {
//             let coordinates = generate();
//             wall = document.querySelector(
//                 '[posX = "' + coordinates[0] + '"][posY = "' + coordinates[1] + '"]'
//             );
//         }

//         wall.classList.add("wall");

//         // console.log(wall);
//     }
// }
// createWall();

// function arrowsMove() {
//     window.addEventListener('keydown', function(e) {

//         if (e.keyCode == 37) {
//             e.preventDefault();
//             direction = 'left';

//         } else if (e.keyCode == 38) {
//             e.preventDefault();
//             direction = 'up';

//         } else if (e.keyCode == 39) {
//             e.preventDefault();
//             direction = 'right';
//         } else if (e.keyCode == 40) {
//             e.preventDefault();
//             direction = 'down';
//         }
//     })
// }
// arrowsMove();

// function avatarFunc() {
//     avatar = [
//         document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]'),
//     ];
//     console.log(avatar)
// }
// avatarFunc();



// function mazeFunc() {


// let exit = [document.querySelector('[posX = "' + w + '"][posY = "' + h + '"]')];

//     let direction = 'right';

//     function move() {
//         let coordinates = [
//             avatar[0].getAttribute("posX"),
//             avatar[0].getAttribute("posY"),
//         ];
//         avatar[0].classList.remove("avatar");
//         avatar.pop();
//         if (direction == 'right') {
//             if (coordinates[0] < width) {
// console.log('coordinates[0] :' + coordinates[0], "w:" + w);
//                 avatar.unshift(
//                     document.querySelector(
//                         '[posX = "' + (+coordinates[0] + 1) + '"][posY = "' + coordinates[1] + '"]'
//                     )
//                 );
//             } else {
//                 coordinates[0] = width;
//                 avatar.unshift(document.querySelector('[posX =  "' + (+coordinates[0]) + '"][posY = "' + coordinates[1] + '"]'));
//             }
//         } else if (direction == 'left') {
//             if (coordinates[0] > 1) {
//                 // console.log(coordinates[0]);
//                 avatar.unshift(
//                     document.querySelector(
//                         '[posX = "' + (+coordinates[0] - 1) + '"][posY = "' + coordinates[1] + '"]'
//                     )
//                 );
//             } else {
//                 avatar.unshift(document.querySelector('[posX =  "1"][posY = "' + coordinates[1] + '"]'));
//             }
//         } else if (direction == 'up') {
//             if (coordinates[1] < height) {
//                 avatar.unshift(
//                     document.querySelector(
//                         '[posX = "' + coordinates[0] + '"][posY = "' + (+coordinates[1] + 1) + '"]'
//                     )
//                 );
//             } else {
//                 coordinates[1] = height;
//                 // console.log(coordinates[0]);
//                 avatar.unshift(document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "' + (+coordinates[1]) + '"]'));
//             }
//         } else if (direction == 'down') {
//             if (coordinates[1] > 1) {

//                 avatar.unshift(
//                     document.querySelector(
//                         '[posX = "' + coordinates[0] + '"][posY = "' + (+coordinates[1] - 1) + '"]'
//                     )
//                 );
//             } else {

//                 avatar.unshift(document.querySelector('[posX =  "' + coordinates[0] + '"][posY = "1"]'));
//             }
//         }
//         if (avatar[0].getAttribute('posX') == wall.getAttribute('posX') && avatar[0].getAttribute('posY') == wall.getAttribute('posY')) {
//             document.querySelector('.field').classList.add('end__game');

//             let audio = new Audio('https://zvukogram.com/mp3/cats/1187/__raclure__wrong.mp3');

//             audio.play();
//             clearInterval(interval);

//         }

//         if (avatar[0].getAttribute('posX') == exit.getAttribute('posX') && avatar[0].getAttribute('posY') == exit.getAttribute('posY')) {

//             document.querySelector('.field').classList.add('win__game');


//             avatar = [
//                 document.querySelector('[posX = "' + 1 + '"][posY = "' + 1 + '"]'),
//             ];

//             exit = document.querySelector(
//                 '[posX = "' + width + '"][posY = "' + height + '"]'
//             );
//             time = setTimeout(() => { document.querySelector('.field').classList.remove('win__game') }, 1000);
//             time;

//             let audio = new Audio('https://zvukogram.com/mp3/cats/1354/pobednyiy-zvuk-fanfar.mp3');

//             audio.play();
//             wallCount++;
//             createWall();
//         }


//         // console.log('wallY:' + wall.getAttribute('posY'), 'exitX:' + wall.getAttribute('posX'));
//         avatar[0].classList.add("avatar");
//     }

//     let interval = setInterval(move, 1300);



// }