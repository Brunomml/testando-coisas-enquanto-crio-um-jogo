const { getSave } = require("../save")

function profile(){
    const player = getSave()
    const text = `profile player
level:${player.level}

xp: ${player.xp}/${player.maxXp}
str: ${player.str}
hp: ${player.hp}/${player.maxHp}
coin: ${player.coin}`
    console.log(text)
}

module.exports = profile