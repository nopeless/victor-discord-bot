const { MessageEmbed } = require('discord.js');

const customEmbed = (message) => {
    let input = message.content.slice(7).trim().split(/ +/g)
    console.log(input)
    let  title = input[0]
    input.shift()
    input = input.join(" ");
    
    
    input.slice().trim().split(/ +/g)
    let description = input
    if(description.length < 1000){
        const embed = new MessageEmbed()
            .setColor('#800b03')
            .setTitle(`${title}`)
            .setDescription(`${description}`)
        message.channel.send(embed)
    } else{
        message.channel.send(`message is too long by ${description.length - 1000} characters`)
    }
        
}

module.exports = customEmbed;