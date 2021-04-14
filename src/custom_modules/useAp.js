const Server = require("../models/Server");

const useAp = async (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            const getIndex = server.playersMap.get(message.author.id)
            let player = await server.players[getIndex];
            if (player.currentAp > 0){
                player.currentAp -= 1
                // await server.save(async function (err, data) {
                //     if (err) {
                //         console.log(err);
                //         useAp(message)
                //     } else {
                //        //
                //     }
                // })
                let query = { [`players.${getIndex}.currentAp`]: player.currentAp };
                Server.updateOne({ serverID: message.guild.id },
                    {
                        $set: query
                    }, async (err) => {
                        if (err) { console.log(err); }
                    }
                ).lean()
            }
        }
    })
}


module.exports = useAp;