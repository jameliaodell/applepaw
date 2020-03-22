exports.run = (client, message, args) => {
    const pers = require("../lib/personalities.js");
    const personalities = pers[Math.floor(Math.random() * pers.length)];
    return message.channel.send(personalities);
}