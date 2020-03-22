exports.run = (client, message, args) => {
    const tribe = require("../lib/wc/tribe.js");
    const wcTribe = tribe[Math.floor(Math.random() * tribe.length)];
    return message.channel.send(wcTribe);
}