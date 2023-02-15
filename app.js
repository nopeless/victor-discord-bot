//required modules
const Discord = require('discord.js');
const mongoose = require("mongoose");
const winston = require('winston');
// const DBL = require("dblapi.js");

// required files
const auth = require("./auth.json");

//  required data files 
const {aligmentTest} = require("./src/custom_modules/module");
const test = require("./src/dialogues/test");
const displayPlayerSpells = require('./src/custom_modules/displayPlayerSpells');
const displayCharacters = require('./src/custom_modules/displayCharacters');
const showInventory = require('./src/custom_modules/showInventory');
const chooseAction = require('./src/custom_modules/action');
const selectCharacter = require('./src/custom_modules/selectCharacter');
const characterInfo = require('./src/custom_modules/characterInfo');
const profile = require('./src/custom_modules/profile');
const setWish = require('./src/custom_modules/setWish');
const distributeStatsPlayer = require('./src/custom_modules/distributeStatsPlayer');
const distributeStatsCharacter = require('./src/custom_modules/distributeStatsCharacter');
const itemInfo = require('./src/custom_modules/itemInfo');
const spellInfo = require('./src/custom_modules/spellInfo');
const { richest, mostExperienced, leaderboard, HGWleaderboard} = require('./src/custom_modules/leaderboards');
const daily = require('./src/custom_modules/daily');
const hgwStart = require('./src/custom_modules/hgwStart');
const displayWishesGranted = require('./src/custom_modules/displayWishesGranted');
const displayCodes = require('./src/custom_modules/codes');
const displayAp = require('./src/custom_modules/displayAp');
const apRecover = require('./src/custom_modules/apRecover');
const displayTip = require('./src/custom_modules/tips');
const vote = require('./src/custom_modules/vote');
const craftingGuide = require('./src/custom_modules/craftingGuide');
const donate = require('./src/custom_modules/donate2');
const search = require('./src/custom_modules/servantSearch');
const help = require('./src/custom_modules/help');
const register = require('./src/custom_modules/register');
const guildCreate = require('./src/custom_modules/guildCreate');
const dbInit = require('./src/custom_modules/dbInit');
const guildCheck = require('./src/custom_modules/guildCheck');
const catalysts = require('./src/custom_modules/catalysts');
const giveSQ = require('./src/custom_modules/giveSQ');
const imNotFighting = require('./src/custom_modules/imNotFighting');
const customEmbed = require('./src/custom_modules/customEmbed');
const deleteGuild = require('./src/custom_modules/deleteGuild');
const deletePlayer = require('./src/custom_modules/deletePlayer');

// logger setup
const logger = winston.createLogger({
    transports: [
        new winston.transports.Console()
    ], 
    format: winston.format.printf(log => `[${log.level.toUpperCase()}] - ${log.message}`),
});


//  set global variables
const token = auth.token;// discord token
const prefix = auth.prefix;
const mongo = auth.mongo

let dbConnected = false

// const ALL = Object.values(Discord.IntentsBitField.Flags).reduce((acc, p) => acc | p, 0);

//CONFIGURATION
const client = new Discord.Client({
    messageCacheMaxSize: 10,
    messageCacheLifetime: 300,
    messageSweepInterval: 500,
    restWsBridgeTimeout: 6000,
    restTimeOffset: 1000,
    restRequestTimeout: 30000,
    retryLimit: 3,
    // intents: ALL | Discord.IntentsBitField.Flags.MessageContent,
    disabledEvents: [
        , 'GUILD_ROLE_CREATE'
        , 'GUILD_ROLE_DELETE'
        , 'GUILD_ROLE_UPDATE'
        , 'GUILD_BAN_ADD'
        , 'GUILD_BAN_REMOVE'
        , 'CHANNEL_PINS_UPDATE'
        , 'VOICE_STATE_UPDATE'
        , 'VOICE_SERVER_UPDATE'
    ]
});

client.login(token).catch(console.error);


// API errors handling
process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});

// event listener for the Websocket and Network Errors
client.on('error', error => {
    console.error('The websocket connection encountered an error:', error);
});
// others
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));


//      mongoDB connection
client.on("ready", async() => {
    // This event will run if the bot starts, and logs in, successfully.
    logger.info(`Bot has started.`);
    mongoose
        .connect(mongo, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        .then(() => {
            logger.info('DB Connected!')
            dbInit(client)
        })
        .then(()=>{
            // check if all the guilds are in the database, if not, add it
            guildCheck(client)
        })
        .then(() => { dbConnected = true; })
        .catch(err => {
            logger.info(`DB Connection Error: ${err.message}`);
        });
    client.user.setActivity('nopeless is making big mone f/help')
});


client.on("guildCreate", guild => {
    guildCreate(guild);
});

// Change this later
client.on("message", async message => {
    if(dbConnected === true){
    // This event will run on every single message received, from any channel or DM.
    // It's good practice to ignore other bots. This also makes your bot ignore itself
    // and not get into a spam loop (we call that "botception").
    if (message.author.bot) return;
    if (message.channel.type == "dm") return;
    if (message.content) {
        message.content = message.content.replace(message.content[0], message.content[0].toLowerCase())
    }
    // // Also good practice to ignore any message that does not start with our prefix, 
    // // which is set in the configuration file.
    // if (message.content.indexOf(prefix) !== 0) return;
    //Earn exp with every message
    if (message.content.indexOf(prefix) !== 0) {
        //    await expGain(message, 20)
        return
    }
    // Here we separate our "command" name, and our "arguments" for the command. 
    // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
    // command = say
    // args = ["Is", "this", "the", "real", "life?"]
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    // Let's go with a few common example commands!
    if (command === "ping") {
        // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
        // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }

    if (command === "register") {
        register(message, client)
    }

    if (command === "help") {
        help(message);
    }

    if (command === "test") {
        await aligmentTest(test, message, client, 0)
    }

    if (command === "action" || command === "a") {
        chooseAction(message, client);
    }

    if (command === "spells") {
        await displayPlayerSpells(message);
    }

    if (command === "servants") {
        displayCharacters(message, client);
    }

    if (command === "inventory") {
        showInventory(message);
    }

    if (command === "select") {
        await selectCharacter(message);
    }

    if (command === "info") {
        characterInfo(message);
    }

    if (command === "profile") {
        profile(message);
    }

    if (command === "wish") {
        await setWish(message);
    }

    if (command === "masteradd") {
        await distributeStatsPlayer(message);
    }

    if (command === "servantadd") {
        await distributeStatsCharacter(message);
    }

    if (command === "iteminfo") {
        itemInfo(message);
    }

    if (command === "spellinfo") {
        spellInfo(message)
    }

    if (command === "richest") {
        richest(message)
    }

    if (command === "highestlvl") {
        mostExperienced(message)
    }

    if (command === "leaderboard") {
        leaderboard(message)
    }

    if (command === "ahgwinfo") {
        HGWleaderboard(message)
    }

    if (command === 'daily') {
        await daily(message)
    }

    if (command === 'ahgwstart') {
        await hgwStart(message, client)
    }

    if (command === 'wishesgranted') {
        await displayWishesGranted(message);
    }

    if (command === 'codes') {
        displayCodes(message);
    }

    if (command === 'ap') {
        displayAp(message);
    }

    if (command === 'tip') {
        displayTip(message);
    }

    if (command === 'apr') {
        apRecover(message)
    }

    if (command === 'vote') {
        vote(message)
    }

    if (command === 'crafting') {
        craftingGuide(message)
    }

    if (command === 'invite') {
        message.channel.send('https://discordapp.com/api/oauth2/authorize?client_id=673351491184099358&permissions=322624&scope=bot')
    }

    if (command === 'donate') {
        donate(message)
    }

    if (command === 'search') {
        search(message)
    }

    if (command === 'server') {
        message.channel.send('https://discord.gg/4ZEGzuz')
    }

    if (command === 'catalysts') {
        catalysts(message)
    }

    if (command === 'iamnotfighting') {
        imNotFighting(message);
    }

    if (command === 'sq' && message.author.id == '448938439640088576') {
        giveSQ(message)
    }

    if (command === 'embed' && message.author.id == '448938439640088576') {
        customEmbed(message)
    }

    if (command === 'deleteserver') {
        deleteGuild(message);
    }

    if (command === 'deleteplayer') {
        deletePlayer(message);
    }

    }
})



