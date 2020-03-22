exports.run = (client, message, args) => {
    const newtpaw = require("../lib/wc/newtpaw.js");
    const wcNewtpaw = newtpaw[Math.floor(Math.random() * newtpaw.length)];
    return message.channel.send(wcNewtpaw);
}