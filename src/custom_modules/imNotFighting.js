const Server = require('../models/Server')

async function imNotFighting(message) {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let user = await server.players[server.playersMap.get(message.author.id)]
            if (user && user !== undefined) {
                user.isFighting = false
                server.save()
                message.channel.send('ok.')
            } else {
                message.channel.send('You need to register first.')
            }
        }
    })
}

module.exports = imNotFighting;