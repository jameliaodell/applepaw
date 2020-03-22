exports.run = (client, message, args) => {
    const suffix = require("../lib/wc/suffix.js");
    const wcSuffix = suffix[Math.floor(Math.random() * suffix.length)];
    return message.channel.send(wcSuffix);
}