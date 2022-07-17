const text_of_each_command = {
    heal: {
        command: "heal",
        abbreviation: "drink",
        description: "regenerate life to max life"
    },
    help: {
        command: "help",
        abbreviation: "",
        description: "show all commands"
    },
    hunt: {
        command: "hunt",
        abbreviation: "h",
        description: "hunt monsters that give xp and coins"
    },
    profile: {
        command: "profile",
        abbreviation: "p",
        description: "shows your xp, hp, strength, coins and level"
    },
}

function help(argsArray) {
    if (argsArray[0] == undefined) {
        for(const key in text_of_each_command){
            const texts = text_of_each_command[key]
    
            console.log('');
            console.log(`${texts.command}: ${texts.description}`);
        }
        return
    }

    const key = argsArray[0]
    const texts = text_of_each_command[key]

    console.log();
    console.log(`description: ${texts.description}`);
    console.log();
    console.log(`command: ${texts.command}`);
    console.log();
    console.log(`abbreviation: ${texts.abbreviation}`);
}

module.exports = help