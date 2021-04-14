const Server = require("../models/Server");
const { MessageEmbed } = require('discord.js');
const { formatDistanceToNow } = require('date-fns');


const displayAp = (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            if (user && user !== undefined){
                const remainingTime = formatDistanceToNow(server.apResetTime, { addSuffix: false }, { includeSeconds: true })

                const embed = new MessageEmbed()
                    .setColor('#800b03')
                    .setDescription(`**${message.author.username}'s AP: ${user.currentAp}/${user.maxAp}**\nYou will recover 5AP in **${remainingTime}**`)
                    .setFooter('You can get more AP by voting (f/vote)')
                message.channel.send(embed)
            } else{
                message.channel.send('You need to register first, please use the f/register command to do that.')
            }

            
        }
    })
}

module.exports = displayAp;