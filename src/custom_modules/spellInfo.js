const auth = require("../../auth.json");
const prefix = auth.prefix;
const {spells, runes, darkSpells, specialSpells, sacraments} = require('../spellsList');
const { MessageEmbed } = require('discord.js');

const spellInfo = (message) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const typed = args.join(" ");
    let itemArgs = typed.slice(9).trim().split(/ +/g);
    let chosenSpell = itemArgs.join(" ").toLowerCase();
    // console.log(chosenSpell);
    const allSpells = [spells, runes, darkSpells, specialSpells, sacraments]
    let number = 0
    allSpells.forEach(spellSet => {
        spellSet.forEach(spell => {
            if (spell.name.toLowerCase().includes(chosenSpell) && number< 5) {
                const embed = new MessageEmbed()
                    .setTitle(`${spell.name} (Lvl.1)`)
                    .setColor('#800b03')
                    .setDescription(`${spell.description}`)
                    .addField('Type:', `${spell.spellType}`, true)
                    .addField('Power:', `${spell.power}`, true)
                    .addField('Duration(0 - do not applies)', `${spell.spellDuration} turns`, true)
                    .addField('Mana Cost:', `${spell.manaNeeded}`, true)
                message.channel.send(embed)
                number += 1
            }
        })
        
    });

}

module.exports = spellInfo;