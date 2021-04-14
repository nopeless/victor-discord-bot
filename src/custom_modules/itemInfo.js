const auth = require("../../auth.json");
const prefix = auth.prefix;
const itemList = require('../itemsList');
const { MessageEmbed } = require('discord.js');

const itemInfo = (message)=>{
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const typed = args.join(" ");
    let itemArgs = typed.slice(8).trim().split(/ +/g);
    let item = itemArgs.join(" ").toLowerCase();
    
    itemList.forEach(element => {
        if(element.name === item){
            const embed = new MessageEmbed()
                .setTitle(`${element.icon} ${element.name}`)
                .setColor('#800b03')
                .setDescription(`${element.description}`)
            message.channel.send(embed)
        }
    });
    
}

module.exports = itemInfo;