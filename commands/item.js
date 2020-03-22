exports.run = (client, message, args) => {
    const mcItem = require("../lib/mc/item.js");
    const item = mcItem[Math.floor(Math.random() * mcItem.length)];
    return message.channel.send(item);
}