const Server = require("../models/Server");
const auth = require("../../auth.json");
const prefix = auth.prefix;
const { MessageEmbed } = require('discord.js');


const distributeStatsPlayer = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const getIndex = server.playersMap.get(message.author.id)
            let player = await server.players[getIndex]
            if (player && player !== undefined){
                if (player.isFighting === false) {
                    const args = message.content.slice(prefix.length).trim().split(/ +/g);
                    let typed = args.join(" ");
                    typed = typed.slice(9).trim().split(/ +/g);
                    // console.log(typed)
                    const stat = typed[0].toLowerCase()
                    const ammount = parseInt(typed[1])
                    switch (stat) {
                        case 'strength':
                            if (player.statsPoints < ammount && ammount > 0) {
                                message.channel.send("You don't have enough points to distribute.")
                            } else if (player.statsPoints >= ammount && ammount > 0) {
                                player.stats.strength += ammount
                                player.statsPoints -= ammount
                                message.channel.send(`Strength +${ammount}`)
                            } else {
                                message.channel.send("Wrong ammount.")
                            }
                            break;
                        case 'endurance':
                            if (player.statsPoints < ammount && ammount > 0) {
                                message.channel.send("You don't have enough points to distribute.")
                            } else if (player.statsPoints >= ammount && ammount > 0) {
                                player.stats.endurance += ammount
                                player.statsPoints -= ammount
                                message.channel.send(`Endurance +${ammount}`)
                            } else {
                                message.channel.send("Wrong ammount.")
                            }
                            break;
                        case 'agility':
                            if (player.statsPoints < ammount && ammount > 0) {
                                message.channel.send("You don't have enough points to distribute.")
                            } else if (player.statsPoints >= ammount && ammount > 0) {
                                player.stats.agility += ammount
                                player.statsPoints -= ammount
                                message.channel.send(`Agility +${ammount}`)
                            } else {
                                message.channel.send("Wrong ammount.")
                            }
                            break;
                        case 'magic':
                            if (player.statsPoints < ammount && ammount > 0) {
                                message.channel.send("You don't have enough points to distribute.")
                            } else if (player.statsPoints >= ammount && ammount > 0) {
                                player.stats.magic += ammount
                                player.statsPoints -= ammount
                                player.maxMana += (ammount * 10)
                                player.currentMana += (ammount * 10)
                                message.channel.send(`Magic +${ammount}`)
                            } else {
                                message.channel.send("Wrong ammount.")
                            }
                            break;
                        case 'luck':
                            if (player.statsPoints < ammount && ammount > 0) {
                                message.channel.send("You don't have enough points to distribute.")
                            } else if (player.statsPoints >= ammount && ammount > 0) {
                                player.stats.luck += ammount
                                player.statsPoints -= ammount
                                message.channel.send(`Luck +${ammount}`)
                            } else {
                                message.channel.send("Wrong ammount.")
                            }
                            break;
                        default:
                            message.channel.send('Wrong parameter.')

                    }
                    let query = { [`players.${getIndex}.statsPoints`]: player.statsPoints, [`players.${getIndex}.stats`]: player.stats, [`players.${getIndex}.maxMana`]: player.maxMana, [`players.${getIndex}.currentMana`]: player.currentMana};
                    Server.updateOne({ serverID: message.guild.id },
                        {
                            $set: query
                        }, async (err) => {
                            if (err) {
                                console.log(err);
                            } else {
                                const embed = new MessageEmbed()
                                    .setTitle(`${message.author.username}'s stats`)
                                    .setColor('#800b03')
                                    .addField('Mana:', `${player.currentMana}/${player.maxMana}`, false)
                                    .addField('Stats Points to distribute (all your stats cary over to all your servants):', `${player.statsPoints}`, false)
                                    .addField('Strength:', `${player.stats.strength}`, true)
                                    .addField('Endurance (improves hp recovery after battle):', `${player.stats.endurance}`, true)
                                    .addField('Agility:', `${player.stats.agility}`, true)
                                    .addField('Magic (determines MP amount):', `${player.stats.magic}`, true)
                                    .addField('Luck (increases QP gained in battle):', `${player.stats.luck}`, true)
                                await message.channel.send(embed);
                            }
                        }).lean()

                    // await server.save(async function (err, data) {
                    //     if (err) {
                    //         console.log(err);
                    //         distributeStatsPlayer(message)
                    //     } else {
                    //         const embed = new MessageEmbed()
                    //             .setTitle(`${message.author.username}'s stats`)
                    //             .setColor('#800b03')
                    //             .addField('Mana:', `${player.currentMana}/${player.maxMana}`, false)
                    //             .addField('Stats Points to distribute (all your stats cary over to all your servants):', `${player.statsPoints}`, false)
                    //             .addField('Strength:', `${player.stats.strength}`, true)
                    //             .addField('Endurance (improves hp recovery after battle):', `${player.stats.endurance}`, true)
                    //             .addField('Agility:', `${player.stats.agility}`, true)
                    //             .addField('Magic (determines MP amount):', `${player.stats.magic}`, true)
                    //             .addField('Luck (increases QP gained in battle):', `${player.stats.luck}`, true)
                    //         await message.channel.send(embed);
                    //     }
                    // })

                } else { message.channel.send('You can not do this while fighting!') }
            } else { message.channel.send('You need to register first, please use the f/register command to do that.')}
            
        }
    })
}

module.exports = distributeStatsPlayer;