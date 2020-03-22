exports.run = (client, message, args) => {
    const mcMob = require("../lib/mc/mob.js");
    const mob = mcMob[Math.floor(Math.random() * mcMob.length)];
    return message.channel.send(mob);
}