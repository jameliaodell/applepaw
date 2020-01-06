const Discord = require('discord.js');
const Manager = new Discord.ShardingManager(__dirname + '/bot.js');

const webhook = require("./webhook.json");
const hook = new Discord.WebhookClient(webhook.id, webhook.token);

Manager.spawn(2);
Manager.on('launch', shard => {
    console.log(`Successfully launched shard #${shard.id} (${+shard.id+1}/${Manager.totalShards})`);
    hook.send(`Successfully launched shard #${shard.id} (${+shard.id+1}/${Manager.totalShards})`);
});