exports.run = (client, message, args) => {
    const prefix = require("../lib/wc/prefix.js");
    const wcPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    return message.channel.send(wcPrefix + 'star');
}