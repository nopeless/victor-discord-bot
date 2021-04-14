const Server = require("../models/Server");
const hgwEnd = require("./hgwEnd");
const apReset = require("./apReset");


let unavailableGuilds = 0
const dbInit = async (client)=>{
    // Server.find({ "playersMap": { "$exists": false } }, async (err, servers) => {
    //     if (err) {
    //         console.log(err);
    //     } else{
    //         servers.forEach(async server => {
    //             server.playersMap = new Map
    //             await server.save();
    //         })
    //     }
    // })
    for (const [key, value] of client.guilds.cache.entries()) {
        Server.findOne({ serverID: key }, async (err, server) => {
            if (err) {
            console.log(err);
            } else if(server == null){
                unavailableGuilds += 1
            }
            else {
                    // reset action block for each player
                    if (server.players.length !== 0) {
                        server.players.forEach(async (player) => {
                            player.isFighting = false                         
                        });   
                        await server.save();
                    }
                    if (server.hgwEndDate !== 0) {
                        // run hgwEnd event if it's past the date
                        let remainingTime = server.hgwEndDate - Date.now()
                        if (remainingTime < 0) {
                            remainingTime = 0
                        }
                        setTimeout(() => { hgwEnd(server, client) }, remainingTime)
                    }

                    // run apReset event if it's past the date
                    let resetTime = server.apResetTime - Date.now()
                    if (resetTime < 0) {
                        resetTime = 0
                    }
                    setTimeout(() => { apReset(server) }, resetTime)

            }
        })
    }
    console.log(`Guilds unavailable: ${unavailableGuilds}`)
    // User.find({}, async (err, users) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     else {
    //         users.forEach(user => {
    //             user.FA = 0
    //             user.save();
    //         })
    //     }
    // })
}
module.exports = dbInit;