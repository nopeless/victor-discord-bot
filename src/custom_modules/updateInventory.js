const Item = require('../models/templates/item');
const Server = require('../models/Server');


const updateInventory = async (message, inventory, item) => {
    await Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            
            if(item){
                let oldItem = await inventory.find(itm => itm.id == item.id)
                if (!(oldItem)) {
                    const newitem = new Item(item);
                    // console.log(newitem);
                    inventory.push(newitem)
                    
                } else {
                    oldItem.quantity += 1
                   
                }
            }

            const getIndex = server.playersMap.get(message.author.id)
            let player = await server.players[getIndex]
            player.currentAp -= 1
            // player.inventory = inventory;
            // await server.save(async function (err, data) {
            //     if (err) {
            //         console.log(err);
            //         updateInventory(message, inventory, item)
            //     } else {
            //         if (item) { message.channel.send(`*${message.author.username} acquired ${item.icon}*`)}
            //     }
            // });
            let query = { [`players.${getIndex}.currentAp`]: player.currentAp, [`players.${getIndex}.inventory`]: inventory };
            Server.updateOne({ serverID: message.guild.id },
                {
                    $set: query
                }, async (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (item) { message.channel.send(`*${message.author.username} acquired ${item.icon}*`) }
                    }
                }).lean()
        }
    })
}

module.exports = updateInventory;