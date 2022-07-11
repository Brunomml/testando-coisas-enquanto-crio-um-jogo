const prompt = require("readline-sync").prompt
const actions = require("./src/action.js")

while (true) {
    const input = prompt()
    actions(input)
    console.log('');
}