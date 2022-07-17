const fs = require("fs")


function readJson() {
    const data = fs.readFileSync("./save.json", "utf-8")
    return JSON.parse(data)
}

function writeJson(save) {
    fs.writeFileSync("./save.json", JSON.stringify(save, null, 4), "utf-8")
}

function getSave(){
    const save = readJson()
    return save
}

function updadeSave(save) {
    writeJson(save)
}

function newSave(){
    const save = {
        level: 1,
        xp:0,
        maxXp:20,
        coin: 100,
        str:2,
        hp:10,
        maxHp:10,
        inventory:[
            {
                name: "life potion",
                the_amount: 5
            }
        ]
    }
    writeJson(save)

    return save
}
newSave()

module.exports = {
    getSave,
    updadeSave,
    newSave
}