const characters = require("../charactersList");
const Server = require("../models/Server");
const { MessageEmbed } = require('discord.js');



const displayCodes = (message)=>{
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            if (user && user !== undefined) {
                if (user.isFighting === false) {
                    let codes = ""

                    if (characters.length >= 26) {
                        characters.forEach((element, i = 0) => {
                            codes += `${i + 1}. **${element.name[0]} - ${element.code}** \n`
                            if (i % 25 === 0 && i !== 0) {
                                const exampleEmbed = new MessageEmbed()
                                    .setColor('#800b03')
                                    .setDescription(codes)
                                message.channel.send(exampleEmbed);

                                codes = ""
                            }
                            i++
                        });
                        if (codes !== "") {
                            const exampleEmbed = new MessageEmbed()
                                .setColor('#800b03')
                                .setDescription(codes)
                            message.channel.send(exampleEmbed);
                        }
                    } else {
                        characters.forEach((element, i = 0) => {
                            codes += `${i + 1}. **${element.name[0]} - ${element.code}** \n`
                            i++
                        });

                        const exampleEmbed = new MessageEmbed()
                            .setColor('#800b03')
                            .setDescription(codes)
                        message.channel.send(exampleEmbed);
                    }} else{message.channel.send('You can not use this command while fighting.')}
            }else{message.channel.send('Please, register first. (f/register)')}
        }
    })
}
    

module.exports = displayCodes;