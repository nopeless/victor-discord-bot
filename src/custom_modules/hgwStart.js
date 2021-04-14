const Server = require('../models/Server')

const hgwEnd = require('./hgwEnd');

async function hgwStart(message, client) {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            if (message.author.id === message.guild.ownerID || message.member.roles.cache.some(role => role.name === 'Moderator' || role.name === 'Administrator' || role.name === 'Admin' || role.name === 'Mod')) {
                const channelId = message.channel.id.toString()
                server.hgwChannel = channelId
                if (server.hgwEndDate === 0) {
                    server.hgwEndDate = Date.now() + 604800000// 7 days = 604800000
                    let remainingTime = server.hgwEndDate - Date.now()
                    if (remainingTime < 0) {
                        remainingTime = 0
                    }
                    setTimeout(() => { hgwEnd(server, client) }, remainingTime)
                } else {
                    // server.hgwEndDate = Date.now() + 604800000// 7 days = 604800000
                }

                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        hgwStart(message, client)
                    } else {
                        message.channel.send('Channel was successfully assigned.')
                    }
                })
               
            } else { message.channel.send('Command restricted to the Moderators.') }
        }
    })
}

module.exports = hgwStart;