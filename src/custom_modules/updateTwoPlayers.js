const Server = require('../models/Server');

// it adds stats to servants?
const updateTwoPlayers = async (message, fighter1, fighter2, servant1, servant2, escape, secondTime) => {// create another file and try to update both at the same time
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('pvp end')
            // first player
            const player1 = await server.players.find(player => player.playerID == fighter1.playerID)
            const firstPlayerName = (message.guild.members.cache.get(player1.playerID.toString())).user
            let money1 = Math.floor(servant2.level * 150 * (1 + (player1.stats.luck / 1000)))
            let exp1 = servant2.level * 150 
            // let points1 = Math.floor((servant2.maxHp - servant2.currentHp) *10)
            let points1 = Math.floor((servant2.level ** 1.6 + 500) * 10)
            if (escape === true) {
                money1 = 0
                exp1 = 0
                points1 = 0
            }
            if (servant1.currentHp <= 0) {
                player1.exp += exp1 / 10
                player1.currentMana = fighter1.currentMana
                player1.commandsLeft = fighter1.commandsLeft
                player1.inventory = fighter1.inventory
                player1.spells = fighter1.spells
                player1.isFighting = false

                if (secondTime !== true && servant1.id === player1.servants[0].id){
                    fighter1.servants.shift()
                }
                
                player1.servants = fighter1.servants
                // await server.updateOne()
                
            } else {

                // updatedMoney = player.money + money
                player1.money += money1
                player1.exp += exp1
                player1.points += points1
                player1.weeklyBP += points1
                player1.currentMana = fighter1.currentMana
                player1.commandsLeft = fighter1.commandsLeft
                player1.inventory = fighter1.inventory
                player1.spells = fighter1.spells
                player1.isFighting = false

                if (servant1.currentHp < fighter1.servants[0].maxHp && servant1.currentHp >= 0) {
                    fighter1.servants[0].currentHp = servant1.currentHp
                }
                fighter1.servants[0].exp += exp1
                player1.servants = fighter1.servants
                // let update = { "players.1": { "money": updatedMoney } }
                // await server.updateOne(update)
                
                
            }


            // second player
            const player2 = await server.players.find(player => player.playerID == fighter2.playerID)
            const secondPlayerName = (message.guild.members.cache.get(player2.playerID.toString())).user
            let money2 = Math.floor(servant1.level * 150 * (1 + (player2.stats.luck / 1000)))
            let exp2 = servant1.level * 150
            // let points2 = Math.floor((servant1.maxHp - servant1.currentHp) * 10)
            let points2 = Math.floor((servant1.level ** 1.6 + 500) * 10)
            if (escape === true) {
                money2 = 0
                exp2 = 0
                points2 = 0
            }

            if (servant2.currentHp <= 0) {
                player2.exp += exp2/ 10
                player2.currentMana = fighter2.currentMana
                player2.commandsLeft = fighter2.commandsLeft
                player2.inventory = fighter2.inventory
                player2.spells = fighter2.spells
                player2.isFighting = false

                if (secondTime !== true && servant2.id === player2.servants[0].id){
                    fighter2.servants.shift()
                }
                
                player2.servants = fighter2.servants
                // await server.updateOne()
                
            } else {

                // updatedMoney = player.money + money
                player2.money += money2
                player2.exp += exp2
                player2.points += points2
                player2.weeklyBP += points2
                player2.currentMana = fighter2.currentMana
                player2.commandsLeft = fighter2.commandsLeft
                player2.inventory = fighter2.inventory
                player2.spells = fighter2.spells
                player2.isFighting = false

                if (servant2.currentHp < fighter2.servants[0].maxHp && servant2.currentHp >= 0) {
                    fighter2.servants[0].currentHp = servant2.currentHp
                }
                fighter2.servants[0].exp += exp2
                player2.servants = fighter2.servants

                
            }
            await server.save(async function (err, data) {
                if (err) {
                    console.log(err);
                    updateTwoPlayers(message, fighter1, fighter2, servant1, servant2, escape, true)
                } else {
                    if (servant1.currentHp <= 0) { message.channel.send(`${firstPlayerName} gained:  ${exp1 / 10}Exp for the loss...`)}
                    else { message.channel.send(`${firstPlayerName} and their servant gained: ${money1} QP, ${exp1} Exp(both) and ${points1} Battle Points.`)}

                    if (servant2.currentHp <= 0) { message.channel.send(`${secondPlayerName} gained:  ${exp2 / 10}Exp for the loss...`)}
                    else { message.channel.send(`${secondPlayerName} and their servant gained: ${money2} QP, ${exp2} Exp(both) and ${points2} Battle Points.`)}
                }
            })
        }
    })
}

module.exports = updateTwoPlayers;