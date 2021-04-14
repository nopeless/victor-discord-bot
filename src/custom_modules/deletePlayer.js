const Server = require("../models/Server");
const auth = require("../../auth.json");
const prefix = auth.prefix;
const { MessageCollector } = require('discord.js');

const deletePlayer = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]
            const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
            const collector3 = new MessageCollector(message.channel, filter, { time: 30000 });
            message.channel.send('Do you really want to delete your Player data? This action can not be undone. \nType **f/yes** to confirm **f/cancel** to cancel.')
            collector3.on('collect', async message => {
                collector3.stop()
                let input3 = message.content.slice(prefix.length).trim().split(/ +/g)[0]
                if (input3 == 'yes') {
                    server.playersMap.delete(message.author.id)
                    user.playerID = '0'
                    user.level = 1
                    user.points = 0
                    user.weeklyBP = 0
                    user.money = 0
                    await server.save(async function (err, data) {
                        if (err) {
                            console.log(err);
                            message.channel.send('Error.')
                        } else {
                            message.channel.send('Player data has been deleted.')
                        }
                    })
                } else {
                    message.channel.send('Wise choice.')
                }
            })

        }
    })



}

module.exports = deletePlayer;