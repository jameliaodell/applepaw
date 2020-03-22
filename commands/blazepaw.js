exports.run = (client, message, args) => {
    const blazepaw = require("../lib/wc/blazepaw.js");
    const wcBlazepaw = blazepaw[Math.floor(Math.random() * blazepaw.length)];
    return message.channel.send(wcBlazepaw);
}