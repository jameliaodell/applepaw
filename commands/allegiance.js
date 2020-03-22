exports.run = (client, message, args) => {
    const prefix = require("../lib/wc/prefix.js");
    const suffix = require("../lib/wc/suffix.js");
    const clan = require("../lib/wc/clan.js");

    const wcPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix2 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix3 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix4 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix5 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix6 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix7 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix8 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix9 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix10 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcPrefix11 = prefix[Math.floor(Math.random() * prefix.length)];
    const wcSuffix = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix2 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix3 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix4 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix5 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix6 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix7 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix8 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix9 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcClan = clan[Math.floor(Math.random() * clan.length)];

    return message.channel.send({embed: {
        "color": 16744192,
        "fields": [{
            "name": wcClan + "Clan", 
            "value": "**Leader:** " + wcPrefix + "star\n**Deputy:** " + wcPrefix2 + wcSuffix2 + "\n**Warriors:** " + wcPrefix3 + wcSuffix3 + "\n" + wcPrefix4 + wcSuffix4 + "\n" + wcPrefix5 + wcSuffix5 + "\n" + wcPrefix6 + wcSuffix6 + "\n**Apprentices:** " + wcPrefix7 + "paw\n" + wcPrefix8 + "paw\n**Queens:** " + wcPrefix9 + wcSuffix7 + "\n**Elders:** " + wcPrefix10 + wcSuffix8 + "\n" + wcPrefix11 + wcSuffix9,
        }]
    }
})}
