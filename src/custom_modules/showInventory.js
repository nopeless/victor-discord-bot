const Discord = require('discord.js');
const Server = require("../models/Server");


const showInventory = (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)];
            if (player && player !== undefined){
                let allItems = ""

                // from spells
                if (player.inventory.length >= 51) {
                    await player.inventory.forEach((element, i = 0) => {
                        allItems += `${element.icon}x${element.quantity} `
                        if (i % 50 === 0 && i !== 0) {
                            const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#800b03')
                                .setDescription(allItems)
                            message.channel.send(exampleEmbed);

                            allItems = ""
                        }
                        i++
                    });
                    if (allItems !== "") {
                        const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#800b03')
                            .setDescription(allItems)
                        message.channel.send(exampleEmbed);
                    }
                } else {
                    player.inventory.forEach((element, i = 0) => {
                        allItems += `${element.icon}x${element.quantity} `
                        i++
                    });

                    const exampleEmbed = new Discord.MessageEmbed()
                        .setColor('#800b03')
                        .setDescription(allItems)
                    message.channel.send(exampleEmbed);
                }
                // from spells^

            } else { message.channel.send('You need to register first, please use the f/register command to do that.')}
        }
    })
}

module.exports = showInventory;