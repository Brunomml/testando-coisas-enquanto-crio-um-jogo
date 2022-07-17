const { getSave, updadeSave } = require("../save.js")
const heal = require("./heal.js")

let player = getSave()

function levelUP() {
    player = getSave()
    if(player.xp < player.maxXp) return
    console.log("level up")

    const updade_level_player = function(){
        player.xp-=player.maxXp
        player.maxXp*=1.2
    }

    const playerUP = function(){
        player.level += 1
        player.str += 1
        player.maxHp += 5
    }


    updade_level_player()
    playerUP()
    
    updadeSave(player)
    heal()
}

function levelDOWN(){
    player.xp = 0

    if (player.level == 1)return
    console.log("you lost 1 level");
    
    player.level-=1
    updadeSave(player)
}

module.exports = {
    levelUP,
    levelDOWN
}