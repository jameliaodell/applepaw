exports.run = (client, message, args) => {
    const mcBlock = require("../lib/mc/block.js");
    const block = mcBlock[Math.floor(Math.random() * mcBlock.length)];
    return message.channel.send(block);
}