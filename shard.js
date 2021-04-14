const auth = require("./auth.json");
const token = auth.token;
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./app.js', { token: token, mode: "worker" });

const shards = 10;
manager.spawn(shards, 15000, 60000);
manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
