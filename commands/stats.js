exports.run = (client, message, args) => {
    const promises = [
    client.shard.fetchClientValues('guilds.cache.size'),
    client.shard.broadcastEval('this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)')
    ];
        return Promise.all(promises)
        .then(results => {
            const totalGuilds = results[0].reduce((prev, guildCount) => prev + guildCount, 0);
            const totalMembers = results[1].reduce((prev, memberCount) => prev + memberCount, 0);
            return message.channel.send(`Guild count: ${totalGuilds}\nMember count: ${totalMembers}`);
        })
    .catch(console.error);
}