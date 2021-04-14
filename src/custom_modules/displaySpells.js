const Discord = require('discord.js');
const Server = require("../models/Server");
const { learnSpell } = require('./learnspell');
const auth = require("../../auth.json");
const { sacraments, runes, spells, darkSpells} = require("../spellsList");
const prefix = auth.prefix;

const displaySpells = (message, spellsSet, tutorName, tutorPic) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)];

            //if not in array
            
                    let allSpells = ""
            if ((spellsSet === sacraments && player.morality > 69) || (spellsSet === darkSpells && player.morality < 30) || (spellsSet === runes && player.morality >= 30 && player.morality <= 69 ) || (spellsSet === spells)){
                        spellsSet.forEach((element, i = 0) => {
                            if (!(player.spells.find(spl => spl.id == element.id))) {
                                allSpells += `${i}. **${element.name} (Lvl.1)** (cost: ${element.qpCost} QP) \n`
                            } else {
                                let knownSpell = player.spells.find(spl => spl.id == element.id)
                                if (knownSpell.level === 30) {
                                    allSpells += `${i}. **${element.name} (Lvl.MAX})** (You have already mastered this spell.) \n`
                                } else {
                                    allSpells += `${i}. **${element.name} (Lvl.${knownSpell.level + 1})** (cost: ${element.qpCost} QP) \n`
                                }

                            }

                            i++
                        });

                        const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#800b03')
                            .setAuthor(tutorName, tutorPic)
                            .setDescription(allSpells)
                            .setFooter('f/number to learn; f/cancel to cancel')


                        message.channel.send(exampleEmbed);

                        const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id;
                        const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });

                        collector.on('collect', async message => {
                            collector.stop()
                            const msg = `${message}`
                            let input = msg.slice(prefix.length).trim().split(/ +/g)[0];
                            if (parseInt(input) >= 0 && parseInt(input) < spellsSet.length) {
                                input = Math.floor(input)
                                await learnSpell(message, spellsSet[input])
                            } else if(input === "cancel"){
                                message.channel.send('Canceled')
                            }
                            else {
                                message.channel.send('Wrong number.')
                            }
                        })
                    } else{
                        if (spellsSet === sacraments){
                            message.channel.send('Only masters with - Good alignment can learn those spells.')
                        } else if (spellsSet === darkSpells){
                            message.channel.send('Only masters with - Evil alignment can learn those spells.')
                        } else if (spellsSet === runes) {
                            message.channel.send('Only masters with - Neurtal alignment can learn those spells.')
                        }
                        
                    }
                    
        }
    })

}




module.exports = {
    displaySpells: displaySpells
}