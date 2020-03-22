exports.run = (client, message, args) => {
    const markings = require("../lib/wc/markings.js");
    const coatColour = require("../lib/wc/coatcolour.js");
    const pers = require("../lib/personalities.js");  
    const eyes = require("../lib/eyes.js");
    
    const wcMarkings = markings[Math.floor(Math.random() * markings.length)];
    const wcCoatColour = coatColour[Math.floor(Math.random() * coatColour.length)];
    const personalities = pers[Math.floor(Math.random() * pers.length)];  
    const eyeColour = eyes[Math.floor(Math.random() * eyes.length)];

    const wcDesc1 = ["This " + personalities + " cat is a " + wcMarkings + " with " + wcCoatColour + " fur and " + eyeColour + " coloured eyes!"];
    const wcDesc2 = ["This " + personalities + " cat is a calico with " + eyeColour + " coloured eyes!"];
    const wcDesc3 = ["This " + personalities + " cat is a tortoiseshell with " + eyeColour + " coloured eyes!"];
    const wcDesc4 = ["This " + personalities + " cat is a spotted " + wcCoatColour + " coloured cat with " + eyeColour + " eyes!"];
    const wcDesc5 = ["This " + personalities + " cat is a striped " + wcCoatColour + " coloured cat with " + eyeColour + " eyes!"];
    const wcDescription = [wcDesc1, wcDesc2, wcDesc3, wcDesc4, wcDesc5]
    const wcDesc = wcDescription[Math.floor(Math.random() * wcDescription.length)];
    
    return message.channel.send(wcDesc);
}