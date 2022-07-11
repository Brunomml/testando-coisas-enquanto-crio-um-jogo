const hunt = require("./actions/hunt.js")
const profile = require("./actions/profile.js")
const heal = require("./actions/heal.js")


function actions(key, parameters) {
    const userActions = {
        profile,p:profile,
        hunt,h:hunt,
        heal, drink:heal
    }

    if (!userActions[key]) return
    userActions[key](parameters)
}

function start(input) {
    const inputArr = input.split(" ")

    let action = ""
    let parameters = []
    for (let index = 0; index < inputArr.length; index++) {
        const element = inputArr[index];

        if (index == 0) action = element
        else parameters.push(element)
    }

    actions(action, parameters)
}

module.exports = start