exports.run = (client, message, args) => {

    const mcBlock = require("../lib/mc/block.js");
    const mcItem = require("../lib/mc/item.js");
    const mcMob = require("../lib/mc/mob.js");

    const block = mcBlock[Math.floor(Math.random() * mcBlock.length)];
    const item = mcItem[Math.floor(Math.random() * mcItem.length)];
    const mob = mcMob[Math.floor(Math.random() * mcMob.length)];

    if (args[0] === 'block') {
        return message.channel.send(block);
    } else
    if (args[0] === 'item') {
        return message.channel.send(item);
    } else
    if (args[0] === 'mob') {
        return message.channel.send(mob);
    }
}