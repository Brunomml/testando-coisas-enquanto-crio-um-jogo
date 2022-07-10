const prompt = require("readline-sync").prompt
const actions = require("./src/actions.js")

while (true) {
    const input = prompt()
    actions(input)
    console.log('');
}