const Server = require('../models/Server');
const characterExpGain = require('./characterExpGain');

// it adds stats to servants?
const updatePlayer = async (message, fighter, servant, enemy, escape, multiplier = 1, pointsMultiplier = 1, secondTime)=>{// create another file and try to update both at the same time
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('fight end')
            const player = await server.players[server.playersMap.get(fighter.playerID)]
            const firstPlayerName = (message.guild.members.cache.get(player.playerID.toString())).user
            let money = Math.floor((enemy.level * 30 * multiplier) *(1+(player.stats.luck / 1000)))
            let exp = enemy.level * 30 * multiplier
            // let points = Math.floor(enemy.maxHp - enemy.currentHp) * pointsMultiplier
            let points = Math.floor((enemy.level ** 1.6 + 500) * pointsMultiplier)

            if(escape === true){
                points = 0
                exp = exp * 0
                money = money * 0
            }

            if (servant.currentHp <= 0) {
                player.exp += exp / 10
                player.currentMana = fighter.currentMana
                player.commandsLeft = fighter.commandsLeft
                player.inventory = fighter.inventory
                player.spells = fighter.spells
                player.isFighting = false

                
                if(secondTime !== true && servant.id === player.servants[0].id){
                    fighter.servants.shift()
                }
                player.servants = fighter.servants
                // await server.updateOne()
                server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        await updatePlayer(message, fighter, servant, enemy, escape, multiplier, pointsMultiplier, true)
                    } else {
                        message.channel.send(`${firstPlayerName} gained:  ${exp / 10}Exp for the loss...`)
                    }
                })
                
            } else {
                if (servant.passive[0] == "Treasury of Babylon" || servant.passive[0] == "Golden Rule"){
                    money = money * 2
                }
                // updatedMoney = player.money + money
                player.money += money
                player.exp += exp
                player.points += points
                player.weeklyBP += points
                player.currentMana = fighter.currentMana
                player.commandsLeft = fighter.commandsLeft
                player.inventory = fighter.inventory
                player.spells = fighter.spells
                player.isFighting = false

                let name = message.author.username
                let lvl = player.level
                let playerExp = player.exp
                if (playerExp >= Math.floor(lvl ** 2.15 * 100)) {// idk if it's good or not  
                    player.level += 1
                    player.statsPoints += 3

                    

                }
                if (playerExp >= Math.floor(lvl ** 2.15 * 100) && (lvl + 1) % 5 === 0) {
                    player.servantsLimit += 1
                    player.maxAp += 1

                }

                if (servant.currentHp < fighter.servants[0].maxHp && servant.currentHp >= 0) {
                    fighter.servants[0].currentHp = servant.currentHp
                } else{
                    fighter.servants[0].currentHp = fighter.servants[0].maxHp
                }
                // fighter.servants[0].exp += exp
                player.servants = fighter.servants
                server.save(async function (err, data) {
                    if (err) {
                        console.log(err);
                        await updatePlayer(message, fighter, servant, enemy, escape, multiplier, pointsMultiplier, true)
                    } else {
                        message.channel.send(`${firstPlayerName} and their servant gained: ${money} QP, ${exp} Exp(both) and ${points} Battle Points.`)
                        await characterExpGain(message, exp)
                        if (playerExp >= Math.floor(lvl ** 2.15 * 100)) { message.channel.send(`Congratulations **${name}** you have reached **Lv. ${lvl + 1}** as a mage!`)}
                        if (playerExp >= Math.floor(lvl ** 2.15 * 100) && (lvl + 1) % 5 === 0) { message.channel.send(`Congratulations **${name}** your servant limit and Max AP have been increased by **1**!`)}

                    }
                })
                // let update = { "players.1": { "money": updatedMoney } }
                // await server.updateOne(update)
                
                
            }

        }
    })
}

module.exports = updatePlayer;