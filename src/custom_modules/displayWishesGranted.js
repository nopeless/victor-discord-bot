const Discord = require('discord.js');
const Server = require('../models/Server')


const displayWishesgranted = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]
            if (user && user !== undefined) {
                if (user.wishesGranted.length != 0) {
                    let wishes = ""

                    if (user.wishesGranted.length >= 11) {
                        await user.wishesGranted.forEach((element, i = 0) => {
                            wishes += element + "\n"
                            if (i % 10 === 0 && i !== 0) {
                                const exampleEmbed = new Discord.MessageEmbed()
                                    .setColor('#800b03')
                                    .setDescription(wishes)
                                message.channel.send(exampleEmbed);

                                wishes = ""
                            }
                            i++
                        });
                        if (wishes !== "") {
                            const exampleEmbed = new Discord.MessageEmbed()
                                .setColor('#800b03')
                                .setDescription(wishes)
                            message.channel.send(exampleEmbed);
                        }
                    } else {
                        user.wishesGranted.forEach((element, i = 0) => {
                            wishes += element + "\n"
                            i++
                        });

                        const exampleEmbed = new Discord.MessageEmbed()
                            .setColor('#800b03')
                            .setDescription(wishes)
                        message.channel.send(exampleEmbed);
                    }
    
                } else{
                    message.channel.send("None of yours wishes come true yet, I'm sorry... ")
                }

            } else{message.channel.send('You need to register first. (f/register)')}
        }
    })




}

module.exports = displayWishesgranted;