
 async function castSpell( message, index, user) {
    let spellData = 0
            if (user) {
                const manaNeeded = user.spells[index].manaNeeded

                if (user.currentMana >= manaNeeded) {
                    user.currentMana -= manaNeeded
                    user.spells[index].exp += 10
                    // add spell lvl up
                    spellData = {
                        power: user.spells[index].power + user.stats.magic,
                        spellType: user.spells[index].spellType,
                        spellDuration: user.spells[index].spellDuration,
                        target: user.spells[index].target
                    }
                    //console.log(spellData)
                    message.channel.send(`**${message.author.username}** used **${user.spells[index].name} Lvl.${user.spells[index].level}**`)
                    

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