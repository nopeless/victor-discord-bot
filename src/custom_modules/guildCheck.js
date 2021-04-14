const Server = require("../models/Server");
const apReset = require("./apReset");

const guildCheck = (client)=>{
    
    for (const [key, value] of client.guilds.cache.entries()) {
        Server.findOne({ serverID: key }, async (err, server) => {
            if (err) {
                console.log(err);
            }
            else {
                if (!server) {
                    const newServer = {
                        serverID: key,
                        apResetTime: Date.now() + 3600000,// 1h
                        hgwChannel: '0',
                        hgwEndDate: 0,
                        hgw: 1,
                        players: [],
                        serverBoss: [],
                        playersMap: new Map
                    }

                    //create guild
                    Server.create(newServer, (err, server) => {
                        if (err) {
                            console.log("ERROR!!!");
                            console.log(err);
                        } else {
                            console.log("New serverDB was successfully created and saved.");
                            console.log(server);
                            apReset(server);
                        };
                    });
                }
            }
        })
    }
}

module.exports = guildCheck;