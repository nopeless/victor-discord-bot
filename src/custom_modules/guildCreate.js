const Server = require("../models/Server");
const apReset = require("./apReset");

const guildCreate = async (guild)=>{
    Server.findOne({ serverID: guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            if (!server) {
                let newServer = {
                    serverID: guild.id,
                    apResetTime: Date.now() + 3600000,// 1h
                    hgwChannel: '0',
                    hgwEndDate: 0,
                    hgw: 1,
                    players: [],
                    serverBoss: [],
                    playersMap: new Map
                }
                
                // This event triggers when the bot joins a guild.
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
            } else {
                console.log("Guild already exists!")
            }
        }
    })
}

module.exports = guildCreate;