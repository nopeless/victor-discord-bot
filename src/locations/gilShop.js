const Discord = require('discord.js');
const auth = require("../../auth.json");
const increaseCharactersLimit = require('../custom_modules/increaseCharactersLimit');
const exchangeGC = require('../custom_modules/exchangeGC');
const NPUpgrade = require('../custom_modules/NPUpgrade');
const codeSummon = require('../custom_modules/codeSummon');
const prefix = auth.prefix



const gilShop = (message, user) => {
    const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#ccc925')
        .setAuthor('Gilgamesh', 'https://i.imgur.com/3CRZfVL.jpg')
        .setDescription(`How can I help you, mongrel? \n(Holy Grails: ${user.holyGrails}  Golden Coins: ${user.goldenCoins})`)
        .setThumbnail('https://i.imgur.com/2ZlGPsP.jpg')
        .addField('1.', 'Upgrade Servant NP (cost: 1 Holy Grail)', true)
        .addField('2.', 'Code Summon (summon any servant you want, cost: 1 Golden Coin)', true)
        .addField('3.', 'Increase Servant Limit +1 (cost: 1 Golden Coin)', true)
        .addField('4.', 'Exchange Golden Coin for QP ( +50 000 QP, cost: 1 Golden Coin)', true)
        .setFooter('f/(1-4) to choose; f/cancel to cancel')

    message.channel.send(exampleEmbed)



    const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

    const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });

    collector.on('collect', async message => {
        collector.stop()
        const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        
        switch (input) {
            case '1':
                // NP upgrade
                await NPUpgrade(message);
                break;
            case '2':
                // Code Summon (any u like)
                if (user.servants.length < user.servantsLimit) {
                    if(user.goldenCoins >0){
                        await codeSummon(message, user);
                    } else {
                        message.channel.send("You don't own any golden coins")
                    }
                
                } else{
                    message.channel.send(`You already have reached the maximun number of servants you can own ${user.servants.length}/${user.servantsLimit}`)
                }
                break;
            case '3':
                // Increase servant limit
                await increaseCharactersLimit(message);
                break;
            case '4':
                // Exchange GC
                await exchangeGC(message);
                break;
            case 'cancel':
                // choice.message.delete()
                break;
        }
    })
}

module.exports = gilShop;
