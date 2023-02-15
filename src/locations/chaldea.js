const Discord = require('discord.js');
const auth = require("../../auth.json");
const sqIncreaseCharactersLimit = require('../custom_modules/sqIncreaseCharactersLimit');
const sqSummon = require('../custom_modules/sqSummon');
const changeCommandSeal = require('../custom_modules/changeCommandSeal');
const donate = require('../custom_modules/donate');
const {exchangeSQtoQP, exchangeSQtoAPR} = require('../custom_modules/exchangeSQ');
const User = require('../models/user');
const prefix = auth.prefix



const chaldea = (message, user) => {

    User.findOne({ userID: message.author.id }, async (err, user1) => {
        if (err) {
            console.log(err);
        }
        else {
            if (user1) {
                const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#185dcc')
                    .setAuthor('Gudako', 'https://i.imgur.com/yXqtsp0.jpg')
                    .setDescription(`You came to donate to our cause? GACHA? \nSaint Quartzs: **${user1.VIPCoins}**<:saint_quartz:1075438820473962619>\nTo get <:saint_quartz:1075438820473962619> donate RinBot on Patreon (**f/donate**)`)//user.vipcoins
                    .setThumbnail('https://i.imgur.com/hdrJkQl.jpg')
                    // .addField('1.', 'Donate (for every 1$ given + fees, you will recevie 3 Saint Quartz as a gift)', true)
                    .addField('1.', 'GACHA (summon from the pool of all available servants, cost: 1 Saint Quartz)', true)
                    .addField('2.', 'LIMITED GACHA (summon from the pool of all Limited servants, cost: 3 Saint Quartz)', true)
                    .addField('3.', 'Increase Servant Limit (+1, cost: 1 Saint Quartz)', true)
                    .addField('4.', 'Change Command Seals (reroll your current command seals, cost: 1 Saint Quartz)', true)
                    .addField('5.', 'Exchange for 25 000QP (cost: 1 Saint Quartz)', true)
                    .addField('6.', 'Exchange for 1 AP Reset (cost: 1 Saint Quartz)', true)
                    .setFooter('f/(1-6) to choose; f/cancel to cancel; f/donate to donate')

                message.channel.send(exampleEmbed)



                const filter = m => m.content.startsWith(prefix) && m.author.id === user.playerID

                const collector = new Discord.MessageCollector(message.channel, filter, { time: 90000 });

                collector.on('collect', async message => {
                    collector.stop()
                    const input = message.content.slice(prefix.length).trim().split(/ +/g)[0]

                    switch (input) {
                        // case '1':
                        //     // donate
                        //     donate(message)
                        //     break;
                        case '1':
                            // generall summon
                            if (user.servants.length < user.servantsLimit) {
                                sqSummon(message, 1)
                            } else {
                                message.channel.send(`You already have reached the maximun number of servants you can own ${user.servants.length}/${user.servantsLimit}`)
                            }
                            break;
                        case '2':
                            // generall summon
                            if (user.servants.length < user.servantsLimit) {
                                sqSummon(message, 2)
                            } else {
                                message.channel.send(`You already have reached the maximun number of servants you can own ${user.servants.length}/${user.servantsLimit}`)
                            }
                            break;
                        case '3':
                            // Increase servant limit
                            await sqIncreaseCharactersLimit(message);
                            break;
                        case '4':
                            //change command seal
                            await changeCommandSeal(message);
                            break;
                        case '5':
                            //exchange for 25K QP
                            exchangeSQtoQP(message);
                            break;
                        case '6':
                            // exchange for 1 APR
                            exchangeSQtoAPR(message);
                            break;
                        case 'cancel':
                            // choice.message.delete()
                            break;
                    }
                })
            } else {
                message.channel.send('Please register first. (f/register)')
            }



        }
    })

    
}

module.exports = chaldea;
