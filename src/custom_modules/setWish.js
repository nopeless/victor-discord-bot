const Server = require("../models/Server");
const auth = require("../../auth.json");
const prefix = auth.prefix;
const { MessageEmbed } = require('discord.js');


const setWish = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)];
            if (user && user !== undefined){
                const args = message.content.slice(prefix.length).trim().split(/ +/g);
                let typed = args.join(" ");
                typed = typed.slice(4).trim().split(/ +/g);
                typed = typed.join(" ");
                if (typed.length < 101) {
                    user.wish = typed
                    await server.save(async function (err, data) {
                        if (err) {
                            console.log(err);
                            setWish(message)
                        } else {
                            const embed = new MessageEmbed()
                                .setTitle(`${message.author.username} wishes:`)
                                .setDescription(`*${typed}*`)
                            await message.channel.send(embed);
                        }
                    })
                    
                } else {
                    message.channel.send('Your wish is too long! (max 100 characters)')
                }
            } else { message.channel.send('You need to register first, please use the f/register command to do that.')}
         
            
        }
    })
}

module.exports = setWish;