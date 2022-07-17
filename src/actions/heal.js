const { getSave, updadeSave } = require("../save.js")


function heal() {
    const player = getSave()
    console.log("life restaured");

    player.inventory.forEach((item, index)=>{
        if (item.name == "life potion") {
            player.inventory[index].the_amount -= 1
            player.hp = player.maxHp
        }
    })
    updadeSave(player)
}

module.exports = heal