const { getSave, updadeSave } = require("../save")

const check_if_the_item_exists = (item_name) => {
    for (const key in items) {
        const item = items[key];
        
        if(item.name == item_name){
            return
        }
    }
}

const items = [
    {
        name: "life potion",
        price: 25
    }
]

function buy(argsArray) {
    if (argsArray.length <= 0) return

    const player = getSave()
    let item_name = ''

    argsArray.forEach((arg, index) => {
        
    });

    updadeSave(player)
}

module.exports = {
    buy
}