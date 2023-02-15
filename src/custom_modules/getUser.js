const Server = require("../models/Server");

const getUser = async (message) => {
    // let data = await Server.find({ serverID: message.guild.id }, { playersMap: "", players: { "$elemMatch": { playerID: message.author.id } } }, async (err, server) => {
    let data = await Server.find({ serverID: message.guild.id }).catch(console.error);

    if(data===null || data===[]) return

    console.log(`${data[0]}`)
    let userIndex = data[0].playersMap.get(message.author.id)
    let user = data[0].players[userIndex]
    // const getIndex = server.playersMap.get(message.author.id)
    // let user2 = await server.players[getIndex]
    newData = [{ playersMap: data[0].playersMap, players: [user]}]
    console.log(`${newData[0]}`)
    return newData
}

module.exports = getUser;