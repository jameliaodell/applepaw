exports.run = (client, message, args) => {
    const prefix = require("../lib/wc/prefix.js");
    const suffix = require("../lib/wc/suffix.js");
    const wcPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    const wcSuffix = suffix[Math.floor(Math.random() * suffix.length)];
    const wcWarrior = [wcPrefix + wcSuffix]
    return message.channel.send(wcWarrior);
}