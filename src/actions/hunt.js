const { getSave, updadeSave } = require("../save.js");
const { levelUp, levelDown } = require("./level.js");
const heal = require("./heal.js");

const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

let save = getSave()

function win(xp) {
    console.log("you win");
    console.log(save.hp);

    save.xp += xp
    updadeSave(save)
    levelUp()
}
function lost() {
    console.log("you lost");

    save.hp = 0
    updadeSave(save)
    levelDown()
    heal()
}

function hunt() {
    console.log("start hunt");
    let turn = () => random(100, 0)

    let enemy = {
        hp: random(15.0, 5.0),
        str: random(1, 1.0),
        xp: random(3.7, 0.1)
    }
    console.log(enemy);
    console.log(save);

    while (true) {
        // your time
        if (turn() >= 50) {
            enemy.hp -= save.str
        }

        // enemy's turn
        if (turn() < 50) {
            save.hp -= enemy.str
        }


        if (enemy.hp <= 0) {
            win(enemy.xp)
            break
        }
        if (save.hp <= 0) {
            lost()
            break
        }
    }
}

function start() {
    save = getSave()
    hunt()
}

module.exports = start