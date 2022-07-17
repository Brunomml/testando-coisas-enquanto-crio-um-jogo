const { getSave, updadeSave } = require("../save.js")


function heal() {
    const player = getSave()
    console.log("life restaured");

    player.hp = player.maxHp
    updadeSave(player)
}

module.exports = heal