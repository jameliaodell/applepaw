exports.run = (client, message, args) => {
    const clan = require("../lib/wc/clan.js");
    const wcClan = clan[Math.floor(Math.random() * clan.length)];
    return message.channel.send(wcClan + "Clan");
}