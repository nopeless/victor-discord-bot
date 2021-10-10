const Server = require('../models/Server');

async function apReset(server1) {

    Server.findOne({ serverID: server1.serverID }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            if (server && server !== undefined) {
                if (server.players) {
                    await server.players.forEach(player => {
                        if (player.currentAp + 5 > player.maxAp) {
                            player.currentAp = player.maxAp
                        } else {
                            player.currentAp += 5
                        }

                    });
                }


                // set up the next one
                server.apResetTime = Date.now() + 3600000// 1h
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        apReset(server)
                    } else {
                        let remainingTime = server.apResetTime - Date.now()
                        if (remainingTime < 0) {
                            remainingTime = 0
                        }
                        setTimeout(() => { apReset(server) }, remainingTime)
                    }
                })


            }
            
        }
    })


}

module.exports = apReset;