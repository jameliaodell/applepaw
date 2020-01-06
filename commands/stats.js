exports.run = (client, message, args) => {
    const promises = [
    client.shard.fetchClientValues('guilds.size'),
    client.shard.broadcastEval('this.guilds.reduce((prev, guild) => prev + guild.memberCount, 0)')
    ];
        return Promise.all(promises)
        .then(results => {
            const totalGuilds = results[0].reduce((prev, guildCount) => prev + guildCount, 0);
            const totalMembers = results[1].reduce((prev, memberCount) => prev + memberCount, 0);
            return message.channel.send(`Server count: ${totalGuilds}\nMember count: ${totalMembers}`);
        })
    .catch(console.error);
}