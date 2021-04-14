const Server = require('../models/Server')
const commandsList = require("../commandsList");
const { sayAll } = require("./module");
const { introduction } = require("../dialogues/introduction");

const Player = require('../models/Player');
const User = require('../models/user');

const register = async (message, client) => {

    const command_id = Math.floor((Math.random() * commandsList.length));
    const constructionObject = {
        message: message,
        command_id: command_id

    }
    const newPlayer = new Player(constructionObject)

    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
            message.react('❌')
        } else {
            if (!(server.players.find(player => player.playerID == message.author.id))) {
                console.log(newPlayer);
                let playerIndex = server.players.push(newPlayer) -1
                await server.playersMap.set(newPlayer.playerID, playerIndex)
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        message.channel.send('Error, try again.')
                    } else {
                        console.log("New master successfully added. :");
                        message.react('☑')
                        sayAll(introduction, message, client)
                    }
                });


            } else {
                message.channel.send('User already exists.')
                let user = server.players.find(player => player.playerID == message.author.id)
                let index = server.players.indexOf(user)
                await server.playersMap.set(newPlayer.playerID, index)
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        message.channel.send('Error, try again.')
                    } else {

                    }
                })
            }

        }
    })

    // check if player is in Users Collection and if not, add them
    User.findOne({ userID: message.author.id }, async (err, user) => {
        if (err) {
            console.log(err);
        }
        else {
            if (!user) {
                const newUser = {
                    userID: message.author.id,
                    apResets: 0,
                    VIPCoins: 0,
                    FA: 0
                }

                User.create(newUser, (err, user) => {
                    if (err) {
                        console.log("ERROR!!!");
                        console.log(err);
                    } else {
                        console.log("New user was successfully created and saved.");
                        console.log(user);
                    };
                });
            } else {
                console.log("User already exists!")
            }
        }
    })

}

module.exports = register;