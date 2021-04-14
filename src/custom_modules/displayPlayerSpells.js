const Discord = require('discord.js');
const auth = require("../../auth.json");
const prefix = auth.prefix;
const Server = require('../models/Server')


const displayPlayerSpells = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]// async/await or something?
            if (user && user !== undefined) {
                if(user.spells.length != 0){
                    let allSpells = ""

                    if (user.spells.length >= 11) {
                        await user.spells.forEach((element, i = 0) => {
                            allSpells += `${i}. **${element.name} Lvl.${element.level}** (mana cost: ${element.manaNeeded} Mp) \n`
                            if (i % 10 === 0 && i !== 0) {
                                const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#800b03')
                                    .setDescription(allSpells)
                                    .setFooter('f/number to show detailed info')
                                message.channel.send(exampleEmbed);

                                allSpells = ""
                            }
                            i++
                        });
                        if (allSpells !== "") {
                            const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#800b03')
                                .setDescription(allSpells)
                                .setFooter('f/number to show detailed info')
                            message.channel.send(exampleEmbed);
                        }
                    } else {
                        user.spells.forEach((element, i = 0) => {
                            allSpells += `${i}. **${element.name} Lvl.${element.level}** (mana cost: ${element.manaNeeded} Mp) \n`
                            i++
                        });

                        const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#800b03')
                            .setDescription(allSpells)
                            .setFooter('f/number to show detailed info')
                        message.channel.send(exampleEmbed);
                    }




                    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id;
                    const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
                    collector.on('collect', async message => {
                        collector.stop()
                        const msg = `${message}`
                        let input = msg.slice(prefix.length).trim().split(/ +/g)[0];
                        if (parseInt(input) >= 0 && parseInt(input) < user.spells.length) {
                            input = Math.floor(input)
                            const embed = new Discord.MessageEmbed()
                                .setColor('#800b03')
                                .setTitle(`${user.spells[input].name}`)
                                .setDescription(`${user.spells[input].description}`)
                                .addField('Level', `${user.spells[input].level}`, true)
                                .addField('Exp', `${user.spells[input].exp}/${(user.spells[input].level + 1) * (user.spells[input].level + 1) * 10}`, true)
                                .addField('Spell type', `${user.spells[input].spellType}`, true)
                                .addField('Spell power', `${user.spells[input].power}`, true)
                                .addField('Mana cost', `${user.spells[input].manaNeeded}`, true)
                                .addField('Duration', `${user.spells[input].spellDuration}`, true)

                            message.channel.send(embed)
                        } else {
                            message.channel.send('Wrong number.')
                        }
                        
                        


                    })
                }  else{
                    message.channel.send("You don't know any spells yet")
                }
                
            } else{
                message.channel.send('Please register first.(f/register)')
            }
        }
    })


    

}

module.exports = displayPlayerSpells;