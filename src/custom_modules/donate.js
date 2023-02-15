const { MessageEmbed, MessageCollector } = require('discord.js');
const auth = require("../../auth.json");
const prefix = auth.prefix;

const donate = (message) => {
    const filter = m => m.content.startsWith(prefix) && m.author.id === message.author.id
    const collector1 = new MessageCollector(message.channel, filter, { time: 60000 });
    message.channel.send('How much would you like to donate? For every **1$** donated (**not including fees**) you will receive **3 saint quartz**<:saint_quartz:1075438820473962619> that can be used on any server\n(f/+amount 1-250)')
    collector1.on('collect', async message => {
        collector1.stop()
        let input = message.content.slice(prefix.length).trim().split(/ +/g)[0]
        let cash = parseInt(input, 10);
        // console.log(cash);
        if (cash >= 1 && cash <= 250) {
            cash = Math.floor(cash)
            await message.channel.send('**After successful transaction DO NOT close the window.\nPress "CLOSE" button highlighted on the picture below to receive your Quartz**\nIf you have any problems with sending donation, please join our Discord server to get the support (f/server).', { files: ['./src/images/purchase_quartz.png'] })
            const embed = new MessageEmbed()
                // Set the color of the embed
                .setColor('#800b03')
                // Set vote URL
                .setTitle(`Click here to donate ${cash}$`)
                .setURL(`https://pay.sendwyre.com/purchase?destCurrency=ETH&sourceAmount=${cash}&dest=0xe558a8f365640d92119ff6e21c51f3431ed9642d&accountId=AC_HQVL238Q2MW&redirectUrl=https://rinbot.online/donate/${message.author.id}/${cash}`)
                //set description
                .setDescription(`This is YOUR personalized donate link ${message.author.username}\nThank you SO MUCH for your support ❤`)
            message.channel.send(embed);
            message.channel.send("Or you can send crypto directly and DM me with proof on the Bot Server (f/server) to receive your rewards.\nBitcoin: `1NaPe293jG6frm5LSnHkJJi86mi1JB8622`\nETH/DAI/WETH: `0xe558a8f365640d92119ff6e21c51f3431ed9642d`")
        }
    })
}

module.exports = donate;