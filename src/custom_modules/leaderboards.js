const { MessageEmbed } = require('discord.js');
const Server = require('../models/Server');
const { formatDistanceToNow } = require('date-fns');


const richest = (message)=>{
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let players = await server.players
            if(players){
                let ordered = [... players]
                ordered.sort((a, b) => (a.money < b.money) ? 1 : -1)
                let idList = []
                let list = ''
                for(let n = 0; n < 10; n++){
                    if(ordered.length > n){
                        idList.push(ordered[n].playerID.toString())
                    }
                   
                } 
                message.guild.members.fetch({ user: idList, withPresences: false })
                    .then(cache => {
                        let i = 1
                        idList.forEach((id) => {
                            // console.log(ordered)
                            if (id != '0' && cache.get(id) !== undefined) {
                                let name = cache.get(id).user.username
                                list += `${i}. **${name}**:  ${ordered[i - 1].money} QP\n`
                            } else {
                                list += `${i}. **player left the server**:  ${ordered[i - 1].money} QP\n`
                            }

                            i += 1
                        }
                        )
                        const embed = new MessageEmbed()
                            .setTitle(`**Server richest: **`)
                            .setColor('#800b03')
                            .setDescription(`${list}`)
                        message.channel.send(embed)
                    })
                
                
                
            } else { message.channel.send('No one has registered yet.')}
            
        }
    })
}


const mostExperienced = (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let players = await server.players
            if(players){
                let ordered = [...players]
                ordered.sort((a, b) => (a.exp < b.exp) ? 1 : -1)
                let idList = []
                let list = ''
                for (let n = 0; n < 10; n++) {
                    if (ordered.length > n) {
                        idList.push(ordered[n].playerID.toString())
                    }

                }
                message.guild.members.fetch({ user: idList, withPresences: false })
                    .then(cache => {
                        let i = 1
                        idList.forEach((id) => {
                            // console.log(ordered)
                            if (id != '0' && cache.get(id) !== undefined) {
                                let name = cache.get(id).user.username
                                list += `${i}. **${name}**:  **Lvl.${ordered[i - 1].level}** (${ordered[i - 1].exp}exp)\n`
                            } else {
                                list += `${i}. **player left the server**:  **Lvl.${ordered[i - 1].level}** (${ordered[i - 1].exp}exp)\n`
                            }

                            i += 1
                        }
                        )
                        const embed = new MessageEmbed()
                            .setTitle(`**Highest Level Players: **`)
                            .setColor('#800b03')
                            .setDescription(`${list}`)
                        message.channel.send(embed)
                    })



            } else { message.channel.send('No one has registered yet.') }
            
        }
    })
}


const leaderboard = (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            let players = await server.players
            if(players){
                let ordered = [...players]
                ordered.sort((a, b) => (a.points < b.points) ? 1 : -1)
                let idList = []
                let list = ''
                for (let n = 0; n < 10; n++) {
                    if (ordered.length > n) {
                        idList.push(ordered[n].playerID.toString())
                    }

                }
                message.guild.members.fetch({ user: idList, withPresences: false })
                    .then(cache => {
                        let i = 1
                        idList.forEach((id) => {
                            // console.log(ordered)
                            if (id != '0' && cache.get(id) !== undefined) {
                                let name = cache.get(id).user.username
                                list += `${i}. **${name}**:   ${ordered[i - 1].points}points\n`
                            } else {
                                list += `${i}. **player left the server**:  ${ordered[i - 1].points}points\n`
                            }

                            i += 1
                        }
                        )
                        const embed = new MessageEmbed()
                            .setTitle(`**Top Players: **`)
                            .setColor('#800b03')
                            .setDescription(`${list}`)
                        message.channel.send(embed)
                    })



            } else { message.channel.send('No one has registered yet.') }
            
        }
    })
}

const HGWleaderboard = (message) => {
    Server.findOne({ serverID: message.guild.id }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            if (server.hgwEndDate !== 0){

                const remainingTime = formatDistanceToNow(server.hgwEndDate, { addSuffix: false }, { includeSeconds: true })


                let players = await server.players
                if(players){
                    let ordered = [...players]
                    ordered.sort((a, b) => (a.weeklyBP < b.weeklyBP) ? 1 : -1)
                    let idList = []
                    let list = ''
                    for (let n = 0; n < 10; n++) {
                        if (ordered.length > n) {
                            idList.push(ordered[n].playerID.toString())
                        }

                    }
                    message.guild.members.fetch({ user: idList, withPresences: false })
                        .then(async cache => {
                            let i = 1
                            ordered.forEach(player => {
                                if (player.playerID != '0') {
                                    let playerId = player.playerID.toString()
                                    if (cache.get(playerId) !== undefined && i <= 10) {
                                        let name = cache.get(playerId).user.username
                                        list += `${i}. **${name}**:  ${player.weeklyBP} points\n`
                                    } else if (i <= 10) {
                                        list += `${i}. **player left the server**:  ${player.weeklyBP} Battle Points\n`
                                    }

                                    i += 1
                                }

                            });
                            const user = await ordered.find(player => player.playerID == message.author.id)
                            if (user && user !== undefined) {
                                const place = `Your current place:\n**#${ordered.indexOf(user) + 1}** : ${user.weeklyBP} BP `
                                list = list + '\n' + place
                            }

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
                                .setTitle(`${hgwCount} Anime Holy Grail War will end in: **${remainingTime}**`)
                                .setColor('#800b03')
                                .setDescription(`${list}`)
                            message.channel.send(embed)
                        })
                    
                } else { message.channel.send('No one has registered yet.') }
                
            } else{
                message.channel.send('The Anime Holy Grail War series has not been started yet. (use f/ahgwstart in the channel you want to recevie HGW related messages.')
            }
            
        }
    })
}

module.exports = {
    richest: richest,
    mostExperienced: mostExperienced,
    leaderboard: leaderboard,
    HGWleaderboard: HGWleaderboard
}
