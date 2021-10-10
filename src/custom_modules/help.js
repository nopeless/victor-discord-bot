const { MessageEmbed} = require('discord.js');

const help = async (message) => {
    const embed = new MessageEmbed()
        // Set the title of the field
        .setTitle('RinBot commands:\n')
        // Set the color of the embed
        .setColor('#800b03')
        // Set the main content of the embed
        .setDescription(`
            **f/register** - register as a new master for the Anime Holy Grail War\n
            **f/test** - solve test to determine your alignment\n
            **f/action** - use this command to perform certain actions, like summoning a servant, battling etc.(each action consumes 1AP except ones in Gill's shop)\n
            **f/spells** - display known spells\n
            **f/servants** - display servants you own\n
            **f/inventory** - display inventory\n
            **f/select (number)** - select currently active servant\n
            **f/info** - display information about currently active servant\n
            **f/profile** - display master's profile\n
            **f/wish** - make your wish\n
            **f/masteradd (parameter) (number of stat points to distribute)** - distribute master stat points gained upon leveling up\n
            **f/servantadd (parameter) (number of stat points to distribute)** - distribute currently active servant stat points gained upon leveling up\n
            **f/iteminfo (item name)** - display information about specific item\n
            **f/spellinfo (spell name)** - display information about specific spell\n
            **f/richest** - display richest players on the server\n
            **f/highestlvl** - display highest lvl players on the server\n
            **f/leaderboard** - display top players on the server with the highest amount of total Battle Points\n
            **f/ahgwinfo** - display information about ongoing Anime Holy Grail War\n
            **f/daily** - claim your daily QP reward\n
            **f/ahgwstart** - begin the series of Anime Holy Grail Wars (results of AHGW will be announced in the channel where this command has been used, command is restricted to Moderators only)\n
            **f/wishesgranted** - display master wishes that had been granted\n
            **f/ap** - display current Action Points and time left to reset\n
            **f/codes** - display available servants and their codes (needed for code summons in Gill's shop)`);

    const embed2 = new MessageEmbed()
        // Set the color of the embed
        .setColor('#800b03')
        // Set the main content of the embed
        .setDescription(`
            **f/search + servant name/code** - display general information about servant\n
            **f/crafting** - display crafting guide\n
            **f/catalysts** - display items that can be used for summoning\n
            **f/tip** - display helpful tip\n
            **f/vote** - vote for this bot and get Action Points Reset in return\n
            **f/apr** - fully restore your AP, if you have AP recovery in stock\n
            **f/invite** - send a link to invite RinBot on another server\n
            **f/server** - get an invite to RinBot Official Discord server\n
            **f/donate** - support the bot\n
            **f/ping** - display the bot's ping to Discord\n
            **f/deleteserver** - permanently delete all Server data\n
            **f/guide** - guide for new players
            `);

    message.channel.send(embed)
        .then(message.channel.send(embed2))
        .catch((message) => {
            message.channel.send("Failed to send the message.")
        })
}

module.exports = help;