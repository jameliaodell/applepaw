module.exports = async (client) => {

    const promises = [
        client.shard.fetchClientValues('guilds.cache.size'),
        client.shard.broadcastEval('this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0)')
        ];
            return Promise.all(promises)
            .then(results => {
                const totalGuilds = results[0].reduce((prev, guildCount) => prev + guildCount, 0);
                const totalMembers = results[1].reduce((prev, memberCount) => prev + memberCount, 0);
                console.log(`Logged in as ${client.user.tag}!`);
                console.log(`Serving ${totalMembers} users over ${totalGuilds} servers.`,);
                console.log("Ready player one!");
                console.log("                 .--~~,__");
                console.log("    :-....,-------`~~`._./");
                console.log("     `-,,,  ,_      ;`~U`");
                console.log("      _,-`` ,``-__; `--.");
                console.log("     (_/`~~      ````(;`");

                client.user.setStatus(`available`);
                client.user.setActivity(`over ${totalGuilds} servers! | ap!help`, {type: 'WATCHING'});
                client.guilds.cache.get("578794594032943115").channels.cache.get("663872366983774208").send(`Restarted. Now serving ${totalGuilds} servers and ${totalMembers} users! Meow!`);
            })
        .catch(console.error);
}