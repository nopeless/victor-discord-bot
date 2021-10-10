const Server = require("../models/Server");
const { MessageEmbed, MessageAttachment } = require('discord.js');
//Server.findOne({ serverID: message.guild.id }, async (err, server) => {

const profile = (message) => {

    Server.find({ serverID: message.guild.id }, { players: { "$elemMatch": { playerID: message.author.id } } }, async (err, server) => {
        if (err) {
            console.log(err);
        }
        else {
            
            // let user = await server.players[server.playersMap.get(message.author.id)]
            let user = server[0].players[0]
            if (user && user !== undefined){
                let alignment = ''
                let ethics = user.ethics
                let morality = user.morality
                if (ethics < 30) {
                    ethicsName = "Chaotic"
                }
                if (30 <= ethics && ethics <= 69) {
                    ethicsName = "Neutral"
                }
                if (ethics > 69) {
                    ethicsName = "Lawful"
                }

                if (morality < 30) {
                    moralName = "Evil"
                }
                if (30 <= morality && morality <= 69) {
                    moralName = "Neutral"
                }
                if (morality > 69) {
                    moralName = "Good"
                };

                if (30 <= ethics && ethics <= 69 && 30 <= morality && morality <= 69) {

                    alignment = 'True Neutral'
                }
                else {
                    alignment = `${ethicsName} ${moralName}`
                }

                numberOfUses = user.commandsLeft
                commandSeals = user.commandId
                const embed = new MessageEmbed()
                    .setTitle(`${message.author.username}'s profile`)
                    .setColor('#800b03')
                    .setDescription(`\`\`\`Wish:\n${user.wish}\`\`\``)
                    .attachFiles([`./src/commandsPictures/cs${commandSeals}_${numberOfUses}.png`])
                    .setThumbnail(`attachment://cs${commandSeals}_${numberOfUses}.png`)
                    .addField('Mage Level:', `${user.level}`, true)
                    .addField('Exp:', `${user.exp}/${Math.floor(user.level ** 2.15 * 100)}`, true)
                    .addField('Mana:', `${user.currentMana}/${user.maxMana}`, true)
                    .addField('Alignment:', `${alignment}`, true)
                    .addField('Servants owned:', `${user.servants.length}/${user.servantsLimit}`, true)
                    .addField('QP:', `${user.money}`, true)
                    .addField('Total Battle Points:', `${user.points}`, true)
                    .addField('Current AHGW Battle Points:', `${user.weeklyBP}`, true)
                    .addField('Action Points:', `${user.currentAp}/${user.maxAp}`, true)
                    .addField('Spells known:', `${user.spells.length}`, true)
                    .addField('Number of items acquired:', `${user.inventory.length}`, true)
                    .addField('Stats Points to distribute:', `${user.statsPoints}`, false)
                    .addField('Strength:', `${user.stats.strength}`, true)
                    .addField('Endurance:', `${user.stats.endurance}`, true)
                    .addField('Agility:', `${user.stats.agility}`, true)
                    .addField('Magic:', `${user.stats.magic}`, true)
                    .addField('Luck:', `${user.stats.luck}`, true)
                message.channel.send(embed)
            } else { message.channel.send('You need to register first, please use the f/register command to do that.')}
          
        }
    })
}

module.exports = profile;