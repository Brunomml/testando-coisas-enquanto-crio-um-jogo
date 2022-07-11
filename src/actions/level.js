const { getSave, updadeSave } = require("../save.js")

let save = getSave()

function levelUp() {
    save = getSave()
    if (save.xp >= save.maxXp) {
        save.xp-=save.maxXp
        save.maxXp*=1.3
    }
    updadeSave(save)
}
function levelDown(){
    save = getSave()
    save.xp = 0

    if (save.level>1){
        console.log("you lost 1 level");

        save.level-=1
        updadeSave(save)
    }
}

module.exports = {
    levelUp,
    levelDown
}