exports.run = (client, message, args) => {
    const eyes = require("../lib/eyes.js");
    const eyeColour = eyes[Math.floor(Math.random() * eyes.length)];
    return message.channel.send("This cat will have " + eyeColour + "-coloured eyes.");
}