const { getSave } = require("../save")

function profile(){
    const save = getSave()
    console.log(save)
}

module.exports = profile