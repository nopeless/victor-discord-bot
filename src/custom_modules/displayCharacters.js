const { MessageEmbed } = require('discord.js');
const Server = require('../models/Server');
const characters = require("../charactersList");


const displayCharacters = ( message, client) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]// async/await or something?
            if (user && user !== undefined) {
                
                if (user.servants.length != 0) {
                    const reactionFilter1 = (reaction, user) => reaction.emoji.name === '➡' && user.id != client.user.id;
                    const reactionFilter2 = (reaction, user) => reaction.emoji.name === '⬅' && user.id != client.user.id;
                    let index = 0
                    let ID = user.servants[index].id
                    const embed = new MessageEmbed()
                        .setTitle(characters[ID].class)
                        .setColor('#800b03')
                        .setImage(characters[ID].pictures[1])
                        .setDescription(`Noble Phantasm: **${characters[ID].noblePhantasm.name} (Lvl.${user.servants[index].NPLevel})**`)
                        .setThumbnail(characters[ID].pictures[0])
                        .addField('Level', `${user.servants[index].level}`, true)
                        .addField(`Exp:`, `${user.servants[index].exp}/${Math.floor(user.servants[index].level ** 1.5 * 100)}`, true)
                        .addField('Hp', `${Math.floor(user.servants[index].currentHp + (user.stats.endurance * 10))}/${user.servants[index].maxHp + (user.stats.endurance * 10)}`, true)
                        .addField('Stats Points to distribute:', `${user.servants[index].statsPoints}`, false)
                        .addField('Strength', `${user.servants[index].stats.strength + user.stats.strength}`, true)
                        .addField('Endurance', `${user.servants[index].stats.endurance + user.stats.endurance}`, true)
                        .addField('Agility', `${user.servants[index].stats.agility + user.stats.agility}`, true)
                        .addField('Magic', `${user.servants[index].stats.magic + user.stats.magic}`, true)
                        .addField('Luck', `${user.servants[index].stats.luck + user.stats.luck}`, true)
                        .setFooter((index + 1) + "/" + user.servants.length + " servants")
                    message.channel.send(embed)
                        .then(msg => msg.react('⬅'))
                        // .then(msg => msg.react('➡'))
                        .then(mReaction => mReaction.message.react('➡'))
                        .then(mReaction => {
                            // createReactionCollector - responds on each react, AND again at the end.
                            const collector1 = mReaction.message
                                .createReactionCollector(reactionFilter1, {
                                    time: 90000
                                });
                            const collector2 = mReaction.message
                                .createReactionCollector(reactionFilter2, {
                                    time: 90000
                                });

                            // set collector events
                            collector1.on('collect', r => {
                                // immutably copy embed's Like field to new obj
                                // console.log(collector1.collected.reactions)
                                if (index + 1 < user.servants.length) {
                                    index += 1;
                                } else {
                                    index = 0
                                };


                                // create new embed with old title & description, new field
                                ID = user.servants[index].id
                                const newEmbed = new MessageEmbed()
                                    .setTitle(characters[ID].class)
                                    .setColor('#800b03')
                                    .setImage(characters[ID].pictures[1])
                                    .setDescription(`Noble Phantasm: **${characters[ID].noblePhantasm.name} (Lvl.${user.servants[index].NPLevel})**`)
                                    .setThumbnail(characters[ID].pictures[0])
                                    .addField('Level', `${user.servants[index].level}`, true)
                                    .addField(`Exp:`, `${user.servants[index].exp}/${Math.floor(user.servants[index].level ** 1.5 * 100)}`, true)
                                    .addField('Hp', `${Math.floor(user.servants[index].currentHp + (user.stats.endurance * 10))}/${user.servants[index].maxHp + (user.stats.endurance * 10)}`, true)
                                    .addField('Stats Points to distribute:', `${user.servants[index].statsPoints}`, false)
                                    .addField('Strength', `${user.servants[index].stats.strength + user.stats.strength}`, true)
                                    .addField('Endurance', `${user.servants[index].stats.endurance + user.stats.endurance}`, true)
                                    .addField('Agility', `${user.servants[index].stats.agility + user.stats.agility}`, true)
                                    .addField('Magic', `${user.servants[index].stats.magic + user.stats.magic}`, true)
                                    .addField('Luck', `${user.servants[index].stats.luck + user.stats.luck}`, true)
                                    .setFooter((index + 1) + "/" + user.servants.length + " servants")


                                // edit message with new embed
                                // NOTE: can only edit messages you author
                                r.message.edit(newEmbed)
                                    // .then(newMsg => console.log(`new embed added`))
                                    .catch(console.log);
                            });
                            collector1.on('end', collected => console.log(`Collected ${collected.size} reactions`));

                            //col 2

                            collector2.on('collect', r => {
                                // immutably copy embed's Like field to new obj
                                // console.log(collector2.collected.reactions)
                                if (index + 1 > 1) {
                                    index -= 1;
                                } else {
                                    index = user.servants.length - 1
                                };


                                // create new embed with old title & description, new field
                                ID = user.servants[index].id
                                const newEmbed = new MessageEmbed()
                                    .setTitle(characters[ID].class)
                                    .setColor('#800b03')
                                    .setImage(characters[ID].pictures[1])
                                    .setDescription(`Noble Phantasm: **${characters[ID].noblePhantasm.name} (Lvl.${user.servants[index].NPLevel})**`)
                                    .setThumbnail(characters[ID].pictures[0])
                                    .addField('Level', `${user.servants[index].level}`, true)
                                    .addField(`Exp:`, `${user.servants[index].exp}/${Math.floor(user.servants[index].level ** 1.5 * 100)}`, true)
                                    .addField('Hp', `${Math.floor(user.servants[index].currentHp + (user.stats.endurance * 10))}/${user.servants[index].maxHp + (user.stats.endurance * 10)}`, true)
                                    .addField('Stats Points to distribute:', `${user.servants[index].statsPoints}`, false)
                                    .addField('Strength', `${user.servants[index].stats.strength + user.stats.strength}`, true)
                                    .addField('Endurance', `${user.servants[index].stats.endurance + user.stats.endurance}`, true)
                                    .addField('Agility', `${user.servants[index].stats.agility + user.stats.agility}`, true)
                                    .addField('Magic', `${user.servants[index].stats.magic + user.stats.magic}`, true)
                                    .addField('Luck', `${user.servants[index].stats.luck + user.stats.luck}`, true)
                                    .setFooter((index + 1) + "/" + user.servants.length + " servants")


                                // edit message with new embed
                                // NOTE: can only edit messages you author
                                r.message.edit(newEmbed)
                                    // .then(newMsg => console.log(`new embed added`))
                                    .catch(console.log);
                            });
                            collector2.on('end', collected => console.log(`Collected ${collected.size} reactions`));
                        })
                        .catch(console.log);
                } else { message.channel.send("You have no servants.") }
                

            } else {
                message.channel.send('You need to register first, please use the f/register command to do that.')
            }
        }
    })




}

module.exports = displayCharacters;