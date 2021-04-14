const Server = require('../models/server');


const removeItem = async ( message, itemIndex) => {
    await Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let player = await server.players[server.playersMap.get(message.author.id)];

            
            let oldItem = await player.inventory[itemIndex]
            if (oldItem.quantity === 1) {
                player.inventory.splice(itemIndex, 1)
                
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        removeItem(message, itemIndex)
                    } else {
                        message.channel.send(`Removed 1 item from the inventory`)
                    }
                })
                
            } else {
                oldItem.quantity -= 1
                
                await server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        removeItem(message, itemIndex)
                    } else {
                        message.channel.send(`item -1`)
                    }
                })
               
            }

        }
    })
}

module.exports = removeItem;