const { getSave, updadeSave } = require("../save")

const items = [
    {
        name: "life potion",
        price: 25
    }
]

const get_the_name_and_quantity = (argsArray) => {
    const last_arg_index = argsArray.length-1

    let item_name = ''
    let the_amount = 1

    if (Number(argsArray[last_arg_index])) {
        the_amount = Number(argsArray[last_arg_index])
        argsArray.pop()
    }

    if (argsArray[last_arg_index] == "all") {
        the_amount = "all"
        argsArray.pop()
    }

    if (argsArray.length == 1) {
        item_name = argsArray[0]
        return [ item_name, the_amount ]
    }

    argsArray.forEach((arg, index) => {
        if (index == 0) {
            item_name = arg
        }else{
            item_name += ` ${arg}`
        }
    })

    return [item_name, the_amount]
}

const get_item = (item_name) => {
    for (const key in items) {
        const item = items[key]

        if (item.name == item_name) {
            return item
        }
    }

    return false
}

const check_if_the_item_exists_in_the_inventory_and_return_it = (player, item_name) => {
    let item = false
    let index = false

    player.inventory.forEach((inventory_item, i) => {
        if (inventory_item.name == item_name) {
            item = inventory_item
            index = i
            return
        }
    })

    return [ item, index ]
}


function buy(argsArray) {
    const player = getSave()

    let [ item_name, the_amount ] = get_the_name_and_quantity(argsArray)
    const item = get_item(item_name)
    the_amount = typeof the_amount == "number"? the_amount: Number(player.coin/item.price)
    const purchase_price = item.price * the_amount
    
    if (argsArray.length <= 0) { console.log("buy [item] [the amount]"); return}
    if (item == false) {console.log("this item does not exist"); return}
    if (player.coin < purchase_price) { console.log("insufficient currency"); return}

    player.coin -= purchase_price
    
    const [ inventory_item, index ] = check_if_the_item_exists_in_the_inventory_and_return_it(player, item.name)
    if (inventory_item) {
        inventory_item.the_amount += the_amount
        player.inventory[index] = inventory_item

        updadeSave(player)
        return
    }

    player.inventory.push({
        name: item_name,
        the_amount: the_amount
    })

    updadeSave(player)
}

module.exports = {
    buy
}