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
        coin: 0,
        str:2,
        hp:1
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