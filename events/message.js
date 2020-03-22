module.exports = (client, message) => {

    if (message.author.bot) return;
    if (!message.guild) return;

    const prefixes = ['ap ', 'applepaw ', 'ap', 'applepaw', 'ap!', 'applepaw!'];
    let prefix = false;
    for (const thisPrefix of prefixes) {
        if (message.content.toLowerCase().startsWith(thisPrefix)) prefix = thisPrefix;
    };
        if(!prefix) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    const cmd = client.commands.get(command);
    if (!cmd) return;

    cmd.run(client, message, args);
}