const Server = require("../models/Server");
const { MessageEmbed } = require('discord.js');
const characters = require("../charactersList");
const auth = require("../../auth.json");
const prefix = auth.prefix;


const servantSearch = (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            if (user && user !== undefined) {
                if (user.isFighting === false){
                    const args = message.content.slice(prefix.length).trim().split(/ +/g);
                    const typed = args.join(" ");
                    let servantArgs = typed.slice(7).trim().split(/ +/g);
                    let servant = servantArgs.join(" ").toLowerCase();
                    console.log(servant)
                    characters.forEach(character => {
                        if (character.name.includes(servant) || character.code == servant) {
                            let alignment = character.alignment
                            if (alignment[0] === alignment[1]) {
                                alignment = "True Neutral"
                            } else {
                                alignment = alignment[0] + " " + alignment[1]
                            }
                            const embed = new MessageEmbed()
                                .setTitle(`${character.name[0]} `)
                                .setColor('#800b03')
                                .setImage(character.pictures[1])
                                .setThumbnail(character.pictures[0])
                                .addField(`Class:`, character.class)
                                .addField(`Aliases:`, character.name, true)
                                .addField(`Traits:`, character.traits, true)
                                .addField(`Origin:`, character.origin)
                                .addField(`Code:`, character.code)
                                .addField(`Summonable with:`, character.summonableWith)
                                .addField(`Alignment:`, alignment)
                                .addField(`Noble Phantasm:`, `${character.noblePhantasm.name}`)
                                .addField('NP Description:', `${character.noblePhantasm.description}`)
                                .addField('Base Stats:', `${character.maxHp} HP`, false)
                                .addField('Strength', `${character.stats.strength}`, true)
                                .addField('Endurance', `${character.stats.endurance}`, true)
                                .addField('Agility', `${character.stats.agility}`, true)
                                .addField('Magic', `${character.stats.magic}`, true)
                                .addField('Luck', `${character.stats.luck}`, true)
                            message.channel.send(embed)
                        } 
                    });

                    
                } else { message.channel.send('You can not use this command while fighting.') }
                
            } else { message.channel.send('You need to register first, please use the f/register command to do that.') }

        }
    })
}

module.exports = servantSearch;