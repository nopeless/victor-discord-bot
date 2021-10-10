const { MessageEmbed } = require('discord.js');

const guide = async (message) => {
    const embed = new MessageEmbed()
        // Set the color of the embed
        .setColor('#800b03')
        // Set the main content of the embed
        .setImage("https://i.imgur.com/EE8VB7M.png")
        .setFooter(`
        ▢▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▢

Hey there! New to RinBot? I'll help you!

How to start?
You do f/register to begin; follow the dialogue, and soon you'll find yourself doing f/test. On this section you'll answer 10 questions that will decide your Master's alignment.

How do I summon a servant?
You go to the Church, using f/a -> f/1. Once you’re there, you’re presented with 2 summon options. As you wouldn't have a catalyst in the beginning, pick to summon without one.

How do I fight?
You go to the Arena using f/a -> f/8, and have many options to choose from:
‣ Fight mob (f/2). The most recommended
‣ Fight another master (f/4). You can challenge another user to battle. If a servant dies in this game mode, they're gone forever.
‣ Fight enemy servant (f/5). The most common farming method; with each level the foe's stats increase by 2 (from base).
‣ Mock PvP (f/6). A fun game mode: nobody dies; you lose nothing (not even AP).

How do I level up?
There are several methods that include leveling up either your Master, or your Servant:
‣ Servant -- Arena: train (f/1), fight (f/2, f/4, f/5)
‣ Master -- Arena: fight (f/2, f/4, f/5). Library: study (f/1)

How to earn money?
You can either earn money from working in City (f/a -> f/7 -> f/1), or through fighting in Arena (f/1, f/4, f/5)

        `)

    message.channel.send(embed)
        .catch((message) => {
            message.channel.send("Failed to send the message.")
        })
}

module.exports = guide;