const Server = require("../models/Server");
const auth = require("../../auth.json");
const prefix = auth.prefix;
const {MessageCollector} = require('discord.js');

const deleteGuild = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            if (message.author.id === message.guild.ownerID || message.member.roles.cache.some(role => role.name === 'Moderator' || role.name === 'Administrator' || role.name === 'Admin' || role.name === 'Mod')) {
                const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
                const collector3 = new MessageCollector(message.channel, filter, { time: 30000 });
                message.channel.send('Do you really want to delete Server data? This action can not be undone. \nType **f/yes** to confirm **f/cancel** to cancel.')
                collector3.on('collect', async message => {
                    collector3.stop()
                    let input3 = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                    if (input3 == 'yes') {
                        Server.deleteOne({ serverID: message.guild.id }, async (err) => {
                            if (err) {
                                console.log(err);
                            }
                            else {
                                message.guild.leave();
                            }
                        })
                    } else {
                        message.channel.send('Wise choice.')
                    }
                })
                
                

            } else { message.channel.send('Command restricted to the Moderators.') }
        }
    })


    
}

module.exports = deleteGuild;