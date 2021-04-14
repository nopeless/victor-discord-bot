const Discord = require('discord.js');
const auth = require("../../auth.json");
const { healServant, restoreMana} = require('../custom_modules/restoration');
const { nurseEvents } = require('../custom_modules/areaEvents');
const prefix = auth.prefix;
const useAp = require("../custom_modules/useAp")

const nurse = (message, user, client) => {

    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#bb45d6')
        .setAuthor('BB', 'https://i.imgur.com/qbQyToz.png')
        .setDescription('Are you hurt senpai? Or maybe you require a mana transfer, huh?')
        .setThumbnail('https://i.imgur.com/2ONuV6f.jpg')
        .addField('1.', 'Heal your servant( cost: 1000 QP )', true)
        .addField('2.', 'Restore mana( cost: 2000 QP )', true)
        .addField('3.', 'Look around', true)
        .setFooter('f/(1-3) to choose; f/cancel to cancel')

    message.channel.send(exampleEmbed)

    const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

    const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });
    collector.on('collect', async message => {
        collector.stop()

        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        
        switch (input) {
            case '1':
                //heal servant
                await healServant(message, 1000)
                break;
            case '2':
                // fully restore mana
                await restoreMana(message, 2000)
                break;
            case '3':
                // add events
                nurseEvents(message, client)
                await useAp(message);
                break;
            case 'cancel':
                // choice.message.delete()
                break;
        }
    })
}

module.exports = nurse;