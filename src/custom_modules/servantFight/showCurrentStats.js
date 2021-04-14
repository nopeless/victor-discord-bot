const { MessageEmbed } = require('discord.js');

const showCurrentStats = async (servant, message) => {
    const maxHp = Math.floor(servant.maxHp)
    const hp = Math.floor(servant.currentHp)
    const str = Math.floor(servant.stats.strength) 
    const end = maxHp / 10
    const agi = Math.floor(servant.stats.agility) 
    const mgi = Math.floor(servant.stats.magic) 
    const lck = Math.floor(servant.stats.luck) 
    const takenDmg = Math.floor(servant.takenDmg * 1000)/ 1000
    const critStr = Math.floor(servant.critStr * 1000) / 1000

    const exampleEmbed = new MessageEmbed()
        .setColor('#800b03')
        .setAuthor(`${servant.class} Status:`, `${servant.pictures[0]}`)
        .setDescription(`**HP: ${hp}/${maxHp}**`)
        .addField('Strength:', `${str}`, true)
        .addField('Endurance:', `${end}`, true)
        .addField('Agility:', `${agi}`, true)
        .addField('Magic:', `${mgi}`, true)
        .addField('Luck:', `${lck}`, true)
        .addField('Damage Taken:', `x${takenDmg}`, true)
        .addField('Critical Strength:', `x${critStr}`, true)

    await message.channel.send(exampleEmbed)

}

module.exports = showCurrentStats;
