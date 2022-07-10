const { getSave, updadeSave } = require("./save.js")
const random = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)

let save = getSave()

function hunt() {
    console.log("start hunt");
    let enemy = {
        hp: random(20, 5),
        str: random(3, 1)
    }

    console.log(enemy);
}
function profile(){
    console.log(save)
}
function heal() {
    console.log("life restaured");
    save.hp = 10
    updadeSave(save)
}

function actions(key) {
    const userActions = {
        profile,p:profile,
        hunt,h:hunt,
        heal, drink:heal
    }

    if (!userActions[key]) return
    userActions[key]()
}

module.exports = actions