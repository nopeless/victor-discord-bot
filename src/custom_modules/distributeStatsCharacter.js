const Server = require("../models/Server");
const auth = require("../../auth.json");
const prefix = auth.prefix;
const { MessageEmbed } = require('discord.js');
const characters = require("../charactersList");

const distributeStatsCharacter = async (message) => {
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
                    typed = typed.slice(10).trim().split(/ +/g);
                    // console.log(typed)
                    const stat = typed[0].toLowerCase()
                    const ammount = parseInt(typed[1])
                    if (player.servants[0]) {
                        switch (stat) {
                            case 'strength':
                                if (player.servants[0].statsPoints < ammount && ammount > 0) {
                                    message.channel.send("You don't have enough points to distribute.")
                                } else if (player.servants[0].statsPoints >= ammount && ammount > 0) {
                                    player.servants[0].stats.strength += ammount
                                    player.servants[0].statsPoints -= ammount
                                    message.channel.send(`Strength +${ammount}`)
                                } else {
                                    message.channel.send("Wrong ammount.")
                                }
                                break;
                            case 'endurance':
                                if (player.servants[0].statsPoints < ammount && ammount > 0) {
                                    message.channel.send("You don't have enough points to distribute.")
                                } else if (player.servants[0].statsPoints >= ammount && ammount > 0) {
                                    player.servants[0].stats.endurance += ammount
                                    player.servants[0].maxHp += (ammount * 10)
                                    player.servants[0].currentHp += (ammount * 10)
                                    player.servants[0].statsPoints -= ammount
                                    message.channel.send(`Endurance +${ammount}`)
                                } else {
                                    message.channel.send("Wrong amount.")
                                }
                                break;
                            case 'agility':
                                if (player.servants[0].statsPoints < ammount && ammount > 0) {
                                    message.channel.send("You don't have enough points to distribute.")
                                } else if (player.servants[0].statsPoints >= ammount && ammount > 0) {
                                    player.servants[0].stats.agility += ammount
                                    player.servants[0].statsPoints -= ammount
                                    message.channel.send(`Agility +${ammount}`)
                                } else {
                                    message.channel.send("Wrong amount.")
                                }
                                break;
                            case 'magic':
                                if (player.servants[0].statsPoints < ammount && ammount > 0) {
                                    message.channel.send("You don't have enough points to distribute.")
                                } else if (player.servants[0].statsPoints >= ammount && ammount > 0) {
                                    player.servants[0].stats.magic += ammount
                                    player.servants[0].statsPoints -= ammount
                                    message.channel.send(`Magic +${ammount}`)
                                } else {
                                    message.channel.send("Wrong amount.")
                                }
                                break;
                            case 'luck':
                                if (player.servants[0].statsPoints < ammount && ammount > 0) {
                                    message.channel.send("You don't have enough points to distribute.")
                                } else if (player.servants[0].statsPoints >= ammount && ammount > 0) {
                                    player.servants[0].stats.luck += ammount
                                    player.servants[0].statsPoints -= ammount
                                    message.channel.send(`Luck +${ammount}`)
                                } else {
                                    message.channel.send("Wrong amount.")
                                }
                                break;
                            default:
                                message.channel.send('Wrong parameter.')

                        }

                        let query = { [`players.${getIndex}.servants.0.statsPoints`]: player.servants[0].statsPoints, [`players.${getIndex}.servants.0.stats`]: player.servants[0].stats, [`players.${getIndex}.servants.0.maxHp`]: player.servants[0].maxHp, [`players.${getIndex}.servants.0.currentHp`]: player.servants[0].currentHp};
                        Server.updateOne({ serverID: message.guild.id },
                            {
                                $set: query
                            }, async (err) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    const embed = new MessageEmbed()
                                        .setColor('#800b03')
                                        .setTitle(`${characters[player.servants[0].id].class}'s stats`)
                                        .setThumbnail(`${characters[player.servants[0].id].pictures[0]}`)
                                        .addField('Hp', `${Math.floor(player.servants[0].currentHp + (player.stats.endurance * 10))}/${player.servants[0].maxHp + (player.stats.endurance * 10)}`, false)
                                        .addField('Stats Points to distribute:', `${player.servants[0].statsPoints}`, false)
                                        .addField('Strength (normal attacks power)', `${player.servants[0].stats.strength + player.stats.strength}`, true)
                                        .addField('Endurance (HP amount)', `${player.servants[0].stats.endurance + player.stats.endurance}`, true)
                                        .addField('Agility (hit/evade chances)', `${player.servants[0].stats.agility + player.stats.agility}`, true)
                                        .addField('Magic (NP efficiency)', `${player.servants[0].stats.magic + player.stats.magic}`, true)
                                        .addField('Luck (critical hit receive/deal chances)', `${player.servants[0].stats.luck + player.stats.luck}`, true)
                                    await message.channel.send(embed)
                                }
                            }).lean()

                        // await server.save(async function (err, data) {
                        //     if (err) {
                        //         console.log(err);
                        //         distributeStatsCharacter(message)
                        //     } else {
                        //         const embed = new MessageEmbed()
                        //             .setColor('#800b03')
                        //             .setTitle(`${characters[player.servants[0].id].class}'s stats`)
                        //             .setThumbnail(`${characters[player.servants[0].id].pictures[0]}`)
                        //             .addField('Hp', `${Math.floor(player.servants[0].currentHp + (player.stats.endurance * 10))}/${player.servants[0].maxHp + (player.stats.endurance * 10)}`, false)
                        //             .addField('Stats Points to distribute:', `${player.servants[0].statsPoints}`, false)
                        //             .addField('Strength (normal attacks power)', `${player.servants[0].stats.strength + player.stats.strength}`, true)
                        //             .addField('Endurance (HP amount)', `${player.servants[0].stats.endurance + player.stats.endurance}`, true)
                        //             .addField('Agility (hit/evade chances)', `${player.servants[0].stats.agility + player.stats.agility}`, true)
                        //             .addField('Magic (NP efficiency)', `${player.servants[0].stats.magic + player.stats.magic}`, true)
                        //             .addField('Luck (critical hit receive/deal chances)', `${player.servants[0].stats.luck + player.stats.luck}`, true)
                        //         await message.channel.send(embed)
                        //     }
                        // })

                        
                    } else {
                        message.channel.send('Summon your servant first.')
                    }
                } else { message.channel.send('You can not do this while fighting!')}
            } else { message.channel.send('You need to register first, please use the f/register command to do that.')}
            
            
        }
    })
}

module.exports = distributeStatsCharacter;