const Server = require("../models/Server");
const { MessageEmbed } = require('discord.js');
const characters = require("../charactersList");


const characterInfo = (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            if (user && user !== undefined){
                if (user.servants.length != 0) {
                    const ID = user.servants[0].id
                    let alignment = characters[ID].alignment
                    if (alignment[0] === alignment[1]) {
                        alignment = "True Neutral"
                    } else {
                        alignment = alignment[0] + " " + alignment[1]
                    }
                    const embed = new MessageEmbed()
                        .setTitle(`${characters[ID].class} Lvl.${user.servants[0].level} (${Math.floor(user.servants[0].currentHp + (user.stats.endurance * 10))}/${user.servants[0].maxHp + (user.stats.endurance * 10)}Hp)`)
                        .setColor('#800b03')
                        .setImage(characters[ID].pictures[1])
                        .setDescription(`${characters[ID].about}`)
                        .setThumbnail(characters[ID].pictures[0])
                        .addField(`Exp:`, `${user.servants[0].exp}/${Math.floor(user.servants[0].level ** 1.5 * 100)}`)
                        .addField(`Alignment:`, alignment)
                        .addField(`Noble Phantasm:`, `${characters[ID].noblePhantasm.name} (Lvl.${user.servants[0].NPLevel})`)
                        .addField('Description', `${characters[ID].noblePhantasm.description}`)
                        .addField('Stats Points to distribute:', `${user.servants[0].statsPoints}`, false)
                        .addField('Strength', `${user.servants[0].stats.strength + user.stats.strength}`, true)
                        .addField('Endurance', `${user.servants[0].stats.endurance + user.stats.endurance}`, true)
                        .addField('Agility', `${user.servants[0].stats.agility + user.stats.agility}`, true)
                        .addField('Magic', `${user.servants[0].stats.magic + user.stats.magic}`, true)
                        .addField('Luck', `${user.servants[0].stats.luck + user.stats.luck}`, true)
                    message.channel.send(embed)
                } else{message.channel.send('You have no servants.')}
                
            } else { message.channel.send('You need to register first, please use the f/register command to do that.')}
            
        }
    })
}

module.exports = characterInfo;