exports.run = (client, message, args) => {

    const prefix = require("../lib/wc/prefix.js");
    const suffix = require("../lib/wc/suffix.js");
    const tribe = require("../lib/wc/tribe.js");
    const newtpaw = require("../lib/wc/newtpaw.js");
    const blazepaw = require("../lib/wc/blazepaw.js");
    const markings = require("../lib/wc/markings.js");
    const clan = require("../lib/wc/clan.js");
    const coatColour = require("../lib/wc/coatcolour.js");

    const eyes = require("../lib/eyes.js");
    const pers = require("../lib/personalities.js");
    const colour = require("../lib/colours.js");

    const wcPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    const wcSuffix = suffix[Math.floor(Math.random() * suffix.length)];
    const wcTribe = tribe[Math.floor(Math.random() * tribe.length)];
    const wcNewtpaw = newtpaw[Math.floor(Math.random() * newtpaw.length)];
    const wcBlazepaw = blazepaw[Math.floor(Math.random() * blazepaw.length)];
    const wcMarkings = markings[Math.floor(Math.random() * markings.length)];
    const wcClan = clan[Math.floor(Math.random() * clan.length)];
    const wcCoatColour = coatColour[Math.floor(Math.random() * coatColour.length)];

    const eyeColour = eyes[Math.floor(Math.random() * eyes.length)];
    const personalities = pers[Math.floor(Math.random() * pers.length)];
    const colours = colour[Math.floor(Math.random() * colour.length)];

    const wcDesc1 = ["This " + personalities + " cat is a " + wcMarkings + " with " + wcCoatColour + " fur and " + eyeColour + " coloured eyes!"];
    const wcDesc2 = ["This " + personalities + " cat is a calico with " + eyeColour + " coloured eyes!"];
    const wcDesc3 = ["This " + personalities + " cat is a tortoiseshell with " + eyeColour + " coloured eyes!"];
    const wcDesc4 = ["This " + personalities + " cat is a spotted " + wcCoatColour + " coloured cat with " + eyeColour + " eyes!"];
    const wcDesc5 = ["This " + personalities + " wat is a striped " + wcCoatColour + " coloured cat with " + eyeColour + " eyes!"];
    const wcDescription = [wcDesc1, wcDesc2, wcDesc3, wcDesc4, wcDesc5]
    const wcDesc = wcDescription[Math.floor(Math.random() * wcDescription.length)];

    const wcWarrior = [wcPrefix + wcSuffix]

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
    const wcSuffix2 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix3 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix4 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix5 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix6 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix7 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix8 = suffix[Math.floor(Math.random() * suffix.length)];
    const wcSuffix9 = suffix[Math.floor(Math.random() * suffix.length)];

    if (args[0] === 'kit') {
        return message.channel.send(wcPrefix + 'kit');
    } else
    if (args[0] === 'apprentice') {
        return message.channel.send(wcPrefix + 'paw');
    } else
    if (args[0] === 'ap') {
        return message.channel.send(wcPrefix + 'paw');
    } else
    if (args[0] === 'warrior') {
        return message.channel.send(wcWarrior);
    } else
    if (args[0] === 'wa') {
        return message.channel.send(wcWarrior);
    } else
    if (args[0] === 'leader') {
        return message.channel.send(wcPrefix + 'star');
    } else
    if (args[0] === 'le') {
        return message.channel.send(wcPrefix + 'star');
    } else
    if (args[0] === 'prefix') {
        return message.channel.send(wcPrefix);
    } else
    if (args[0] === 'pre') {
        return message.channel.send(wcPrefix);
    } else
    if (args[0] === 'suffix') {
        return message.channel.send(wcSuffix);
    } else
    if (args[0] === 'su') {
        return message.channel.send(wcSuffix);
    } else
    if (args[0] === 'tribe') {
        return message.channel.send(wcTribe);
    } else
    if (args[0] === 'tr') {
        return message.channel.send(wcTribe);
    } else
    if (args[0] === 'description') {
        return message.channel.send(wcDesc);
    } else
    if (args[0] === 'desc') {
        return message.channel.send(wcDesc);
    } else
    if (args[0] === 'eyes') {
        return message.channel.send("This cat will have " + eyeColour + "-coloured eyes.");
    } else
    if (args[0] === 'ec') {
        return message.channel.send("This cat will have " + eyeColour + "-coloured eyes.");
    } else
    if (args[0] === 'personality') {
        return message.channel.send(personalities);
    } else
    if (args[0] === 'pers') {
        return message.channel.send(personalities);
    } else
    if (args[0] === 'traits') {
        return message.channel.send(personalities);
    } else
    if (args[0] === 'clan') {
        return message.channel.send(wcClan + "Clan");
    } else
    if (args[0] === 'newtpaw') {
        return message.channel.send(wcNewtpaw);
    } else
    if (args[0] === 'np') {
        return message.channel.send(wcNewtpaw);
    } else
    if (args[0] === 'blazepaw') {
        return message.channel.send(wcBlazepaw);
    } else
    if (args[0] === 'bp') {
        return message.channel.send(wcBlazepaw);
    } else
    if (args[0] === 'full') {
        return message.channel.send(wcDesc + " Your new character is named " + wcPrefix + wcSuffix + " and they are from " + wcClan + ".");
    } else
    if (args[0] === 'al') {
        return message.channel.send({embed: {
        "color": 16744192,
        "fields": [{
            "name": wcClan + "Clan", 
            "value": "**Leader:** " + wcPrefix + "star\n**Deputy:** " + wcPrefix2 + wcSuffix2 + "\n**Warriors:** " + wcPrefix3 + wcSuffix3 + "\n" + wcPrefix4 + wcSuffix4 + "\n" + wcPrefix5 + wcSuffix5 + "\n" + wcPrefix6 + wcSuffix6 + "\n**Apprentices:** " + wcPrefix7 + "paw\n" + wcPrefix8 + "paw\n**Queens:** " + wcPrefix9 + wcSuffix7 + "\n**Elders:** " + wcPrefix10 + wcSuffix8 + "\n" + wcPrefix11 + wcSuffix9,
        }]
    }})} else
    if (args[0] === 'herb') {
        if (args[1] === 'alder') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When chewed, this herb eases toothaches!"
            }})
        } else
        if (args[1] === 'blackberries') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Mixed into a poultice, this herb soothes bee stings!"
            }})
        } else
        if (args[1] === 'borage') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This herb is chewed. It reduces fever and increases milk production in queens!"
            }})
        } else
        if (args[1] === 'burdock') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "The root is ground up and eaten. It soothes and heals rat bites, especially if they are infected."
            }})
        } else
        if (args[1] === 'burnet') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This travelling herb is swallowed whole and gives strength."
            }})
        } else
        if (args[1] === 'catmint') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When eaten, this herb remedies greencough and whitecough."
            }})
        } else
        if (args[1] === 'celandine') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This herb is crushed into juice and trickled over sore and injured eyes."
            }})
        } else
        if (args[1] === 'chamomile') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "A travelling herb that strengthens the heart and soothes the mind."
            }})
        } else
        if (args[1] === 'chervil') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When the leaves are chewed, this herb heals infected wounds. When the roots are chewed, this herb heals bellyaches."
            }})
        } else
        if (args[1] === 'cobwebs') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Press over a wound to stop bleeding!"
            }})
        } else
        if (args[1] === 'coltsfoot') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When chewed, this herb eases breathing as well as kittencough."
            }})
        } else
        if (args[1] === 'comfrey') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This herb helps repair broken bones, heals wrenched claws, and soothes wounds when it is chewed into a poultice."
            }})
        } else
        if (args[1] === 'daisy') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This travelling herb eases the pain of aching joints."
            }})
        } else
        if (args[1] === 'dandelion') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When the leaves are chewed, this herb acts as a painkiller."
            }})
        } else
        if (args[1] === 'dock') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This herb is chewed and applied to scratches to soothe them."
            }})
        } else
        if (args[1] === 'elder') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When turned into a poultice, this herb soothes sprains."
            }})
        } else
        if (args[1] === 'fennel') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "The juice is drunk to relieve pain."
            }})
        } else
        if (args[1] === 'feverfew') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Eat this herb to cure fever."
            }})
        } else
        if (args[1] === 'garlic') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When rolled in, poison in rat bites is drawn out and infection is prevented."
            }})
        } else
        if (args[1] === 'goldenrod') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When chewed into a poultice, this herb helps heal wounds."
            }})
        } else
        if (args[1] === 'honey') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Eaten. Soothes the throat, is a sweet treat, and helps with infections."
            }})
        } else
        if (args[1] === 'horsetail') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Chewed into a poultice and helps stop bleeding and infections."
            }})
        } else
        if (args[1] === 'juniper') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When chewed, this herb soothes bellyaches, gives strength, and helps troubled breathing."
            }}) 
        } else
        if (args[1] === 'lavender') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Cures fever and chills, also hiding the scent of death. To be inhaled."
            }})
        } else
        if (args[1] === 'lungwort') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When eaten, this herb cures yellowcough."
            }})
        } else
        if (args[1] === 'mallow') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Eaten to soothe bellyache."
            }})
        } else
        if (args[1] === 'marigold') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Its poultice stops infection and bleeding."
            }})
        } else
        if (args[1] === 'mint') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This herb helps to hide the scent of death."
            }})
        } else
        if (args[1] === 'mousebile') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "The liquid is toxic to ticks and gets rid of them."
            }})
        } else
        if (args[1] === 'parsley') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When eaten, this herb stops milk production."
            }})
        } else
        if (args[1] === 'poppyseeds') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When chewed, this herb helps a cat sleep."
            }})
        } else
        if (args[1] === 'ragwort') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Crushed and chewed to treat aching joints!"
            }})
        } else
        if (args[1] === 'rosemary') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This herb hides the scent of death."
            }})
        } else
        if (args[1] === 'sorrel') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This travelling herb reduces appetite."
            }})
        } else
        if (args[1] === 'sweetsedge') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "The sap eases infection when swallowed."
            }})
        } else
        if (args[1] === 'tansy') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "This herb cures coughs when consumed in small doses."
            }})
        } else
        if (args[1] === 'thyme') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When chewed, this herb calms cats."
            }})
        } else
        if (args[1] === 'watermint') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "When chewed, this herb eases toothaches!"
            }})
        } else
        if (args[1] === 'yarrow') {
            return message.channel.send({embed: {
                "color": 16744192,
                "description": "Its poultice draws poison from wounds and consuming it makes cats vomit."
            }})
        } else
        if (args[1] === 'list') {
            return message.channel.send({embed: {
                "color": 16744192,
                "title": "Command usage: `ap wc herb borage`",
                "description": "`alder` `blackberries` `borage` `burdock` `burnet` `catmint` `celandine` `chamomile` `chervil` `cobwebs` `coltsfoot` `comfrey` `daisy` `dandelion` `dock` `elder` `fennel` `feverfew` `garlic` `goldenrod` `honey` `horsetail` `juniper` `lavender` `lungwort` `mallow` `marigold` `mint` `mousebile` `parsley` `poppyseeds` `ragwort` `rosemary` `sorrel` `sweetsedge` `tansy` `thyme` `watermint` `yarrow`"
            }})
        }
    }
}