const Server = require("../models/Server");

const saveUser = (message, query) => {
        Server.updateOne({ serverID: message.guild.id },
        {
            $set: query
        }, async (err) => {
            if (err) {
                console.log(err);
                message.channel.send("Database Error")
            } else {

            }
        }).lean()


}

module.exports = saveUser;