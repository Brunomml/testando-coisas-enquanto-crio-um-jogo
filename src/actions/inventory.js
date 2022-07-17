const { getSave } = require("../save");

function inventory() {
    const player = getSave()

    console.log("inventory");
    console.log();

    player.inventory.forEach((item) => {
        console.log(`${item.name}: ${item.quantidade}`);
    })
}

module.exports = inventory