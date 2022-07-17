const hunt = require("./actions/hunt.js")
const profile = require("./actions/profile.js")
const heal = require("./actions/heal.js")
const help = require('./actions/help.js')
const inventory = require('./actions/inventory.js')
const { buy } = require("./actions/shop.js")


function actions(key, parameters) {
    const userActions = {
        profile,     p: profile,
        hunt,        h: hunt,
        heal,        drink: heal,
        inventory,   backpack: inventory,   i: inventory,
        help,
        buy,
    }

    if (!userActions[key]) return
    userActions[key](parameters)
}

function start(input) {
    const inputArr = input.split(" ")

    let action = ""
    let parameters = []
    inputArr.forEach((value, index) => {
        if (index == 0) action = value
        else parameters.push(value)
    })
    actions(action, parameters)
}

module.exports = start