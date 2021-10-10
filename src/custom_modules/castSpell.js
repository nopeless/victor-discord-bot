
const characters = require("../charactersList");

 async function castSpell( message, index, user) {
    let spellData = 0
            if (user) {
                let manaNeeded = user.spells[index].manaNeeded

                if (user.currentMana >= manaNeeded) {
                    spellData = {
                        power: user.spells[index].power,
                        spellType: user.spells[index].spellType,
                        spellDuration: user.spells[index].spellDuration,
                        target: user.spells[index].target
                    }
                    //console.log(spellData)
                    let character = characters[user.servants[0].id]
                    if (character.passive[0] == "Enchant" && spellData.spellType == 'damage'){
                        spellData.power = spellData.power * 2
                    }
                    message.channel.send(`**${message.author.username}** used **${user.spells[index].name} Lvl.${user.spells[index].level}**`)
                    
                    if (character.passive[0] == "Honor of Suffering" && spellData.spellType == 'heal') {
                        manaNeeded = manaNeeded / 2
                    }
                    user.currentMana -= manaNeeded
                    user.spells[index].exp += 10

                    return spellData
                } else {
                    spellData = 0
                    return spellData; // handle undefined
                }
                
            }
    
    
    // return spellData;
}

module.exports = {
    castSpell: castSpell
}