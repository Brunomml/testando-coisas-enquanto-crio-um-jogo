const { getSave, updadeSave } = require("../save.js");
const level = require("./level.js");
const heal = require("./heal.js");


let player = getSave()

const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)
const createEnemy = () => { return {
    hp: random(15.0, 5.0),
    str: random(1, 1.0),
    xp: random(3.7, 0.1),
    coin: random(50, 0)
}}

function win(enemy, playerHp) {
    console.log("you win");
    console.log(`you lost ${playerHp-player.hp}hp`);

    player.xp += enemy.xp
    player.coin += enemy.coin
    updadeSave(player)
    level.levelUP()
}
function lost() {
    console.log("you lost");

    player.hp = 0
    updadeSave(player)
    heal()
    level.levelDOWN()
}

function hunt() {
    let enemy = createEnemy()

    console.log("start hunt");
    console.log("");
    
    let turn = "player"
    const playerHp = player.hp

    while (true) {
        if (turn == "player") {
            enemy.hp -= player.str
            turn = "enemy"
        }

        if (turn == "enemy") {
            player.hp -= enemy.str
            turn = "player"
        }


        if (enemy.hp <= 0) {
            win(enemy, playerHp)
            break
        }
        if (player.hp <= 0) {
            lost()
            break
        }
    }
}

function start() {
    player = getSave()
    hunt()
}

module.exports = start