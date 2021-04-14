const { MessageEmbed } = require('discord.js');
const Server = require('../models/Server');

async function hgwEnd(server1, client) {
    
    Server.findOne({ serverID: server1.serverID }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            if (server && server !== undefined) {
                let p = await server.players
                let ordered = [...p]
                ordered.sort((a, b) => (a.weeklyBP < b.weeklyBP) ? 1 : -1)
                let idList = []
                let list = ''
                for (let n = 0; n < 10; n++) {
                    if (ordered.length > n) {
                        idList.push(ordered[n].playerID.toString())
                    }

                }
                const serv = client.guilds.cache.get(server.serverID.toString())
                if (serv) {
                    serv.members.fetch({ user: idList, withPresences: false })
                        .then(async users => {
                            let i = 1
                            ordered.forEach(player => {
                                if (player.playerID != '0') {
                                    let playerId = player.playerID.toString()
                                    if (users.get(playerId) !== undefined && i <= 10) {
                                        let name = users.get(playerId).user.username
                                        if (i === 1) {
                                            player.goldenCoins += 3
                                            player.wishesGranted.push(player.wish)
                                            player.wish = ' '
                                            player.holyGrails += 1
                                            list += `${i}. **${name}**:  ${player.weeklyBP} points (+ 1HG, +3GC, +wish has been granted)\n`
                                            player.weeklyBP = 0
                                        } else if (i === 2) {
                                            player.goldenCoins += 2
                                            list += `${i}. **${name}**:  ${player.weeklyBP} points (+ 2GC)\n`
                                            player.weeklyBP = 0
                                        } else if (i === 3) {
                                            player.goldenCoins += 1
                                            list += `${i}. **${name}**:  ${player.weeklyBP} points (+1GC)\n`
                                            player.weeklyBP = 0
                                        } else if (i === 4) {
                                            player.money += 40000
                                            list += `${i}. **${name}**:  ${player.weeklyBP} points (+40000 QP)\n`
                                            player.weeklyBP = 0
                                        } else if (i === 5) {
                                            player.money += 30000
                                            list += `${i}. **${name}**:  ${player.weeklyBP} points (+30000 QP)\n`
                                            player.weeklyBP = 0
                                        } else if (i === 6) {
                                            player.money += 20000
                                            list += `${i}. **${name}**:  ${player.weeklyBP} points (+20000 QP)\n`
                                            player.weeklyBP = 0
                                        } else if (i === 7) {
                                            player.money += 10000
                                            list += `${i}. **${name}**:  ${player.weeklyBP} points (+10000 QP)\n`
                                            player.weeklyBP = 0
                                        } else {
                                            list += `${i}. **${name}**:  ${player.weeklyBP} points\n`
                                            player.weeklyBP = 0
                                        }

                                    } else if (i <= 10) {
                                        list += `${i}. **player left the server**:  ${player.weeklyBP} Battle Points\n`
                                        player.weeklyBP = 0
                                    }

                                    i += 1
                                }

                            });
                            let hgwCount = ""
                            if (server.hgw === 1) {
                                hgwCount = `The 1st`
                            } else if (server.hgw === 2) {
                                hgwCount = `The 2nd`
                            } else if (server.hgw === 3) {
                                hgwCount = `The 3rd`
                            } else {
                                hgwCount = `The ${server.hgw}th`
                            }

                            const embed = new MessageEmbed()
                                .setTitle(`**${hgwCount} Anime Holy Grail War results: **`)
                                .setColor('#800b03')
                                .setDescription(`${list}`)

                            const hgwChannel = client.channels.cache.get(server.hgwChannel)
                            if (hgwChannel) {
                                hgwChannel.send(embed)
                            }
                            server.hgwEndDate = Date.now() + 604800000// 7 days
                            server.hgw += 1
                            await server.save(async function (err, data) {
                                if (err) {
                                    console.log(err);
                                    hgwEnd(server1, client)
                                } else {
                                    let remainingTime = server.hgwEndDate - Date.now()
                                    if (remainingTime < 0) {
                                        remainingTime = 0
                                    }
                                    setTimeout(() => { hgwEnd(server, client) }, remainingTime)
                                }
                            }) 
                        })
                    
                }

            }
              
        }
    })
    
    
}

module.exports = hgwEnd;