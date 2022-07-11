const { getSave, updadeSave } = require("../save.js")


function heal() {
    const save = getSave()
    console.log("life restaured");

    save.hp = save.maxHp
    updadeSave(save)
}

module.exports = heal