exports.run = (client, message, args) => {
    if (args[0] === "wc") {
        return message.channel.send({embed: {
            "color": 16744192,
            "description": "Here are Applepaw's Warrior Cats commands! They all start with either `applepaw` or `ap`.\nPlease type your command like this: `ap wc command`",
            "fields": [{
                "name": "• ```kit```", 
                "value": "Gives a randomized kit name!" 
            },
            {
                "name": "• ```apprentice``` / ```ap```", 
                "value": "Asks a neighbour to give you a randomized apprentice name!"
            },
            {
                "name": "• ```warrior``` / ```wa```", 
                "value": "Consults the tarot cards to give a randomized warrior name, including prefix and suffix."
            },
            {
                "name": "• ```leader``` / ```le```", 
                "value": "Shakes a hat to give a randomized leader name!"
            },
            {
                "name": "• ```prefix``` / ```pre```", 
                "value": "Picks a prefix out of a list and presents it on a platter."
            },
            {
                "name": "• ```suffix``` / ```su```", 
                "value": "Uses astrology charts to pluck a random suffix out of the stars."
            },
            {
                "name": "• ```tribe``` / ```tr```", 
                "value": "Checks in the back for a tribe name."
            },
            {
                "name": "• ```description``` / ```desc```", 
                "value": "Using incredibly fancy words (not) to give a simplified cat description. For an original character, maybe?"
            },
            {
                "name": "• ```eyes``` / ```ec```", 
                "value": "Gets two eyes out of a jar and tells you their colours for your new cat OC!"
            },
            {
                "name": "• ```personality``` / ```pers``` / ```traits```", 
                "value": "Personalities for sale, 30 bucks each."
            },
            {
                "name": "• ```clan```", 
                "value": "Clan name generator for your new clans! Get your clan names here!"
            },
            {
                "name": "• ```full```", 
                "value": "Gives you a brand new character complete with name, clan, personality, and physical description!"
            },
            {
                "name": "• ```al```", 
                "value": "Generates a whole mini clan for you!"
            },
            {
                "name": "• ```herb list```", 
                "value": "Shows the list of herbs you can look at."
            },
            {
                "name": "• ```blazepaw``` / ```bp```", 
                "value": "Blazepaw getting down tonight."
            },
            {
                "name": "• ```newtpaw``` / ```np```", 
                "value": "Newtpaw funsies command-sies."
            }
        ]
    }})
} else
if (args[0] === "mc") {
    return message.channel.send({embed: {
        "color": 16744192,
        "description": "Here are Applepaw's Minecraft commands! They all start with either `applepaw` or `ap`.\nPlease type your command like this: `ap mc command`",
        "fields": [{
            "name": "• ```block```", 
            "value": "Gives a random block!" 
        },
        {
            "name": "• ```item```", 
            "value": "Chooses a random item!" 
        },
        {
            "name": "• ```mob```", 
            "value": "Sends a random mob!" 
        }]
    }})
} else
message.channel.send({embed: {
    "color": 16744192,
    "description": "Please type `ap help` and then one of the following categories for help with that category!",
    "fields": [{
        "name": "• ```wc```", 
        "value": "Help with Warrior Cats commands."
    },
    {
        "name": "• ```mc```", 
        "value": "Help with Minecraft commands."
    },
    {
        "name": "**~**", 
        "value": "~"
    },
    {
        "name": "• ```help``` / ```support``` / ```add```", 
        "value": "Help brings up these commands again, support links you my support server, and add lets you add Applepaw to your own server!"
    },
    {
        "name": "• ```suggest```", 
        "value": "If you have any suggestions, run this command for a guide on how to send them to me!"
    },
    {
        "name":"• ```vote```", 
        "value": "If you enjoy Applepaw, please take some time to vote for her!"
    },
    {
        "name":"• ```socials```", 
        "value": "This will show you all my social medias!"
    },
    {
        "name":"• ```uwu```", 
        "value": "uwu uwu uwu"
    },
    {
        "name":"• ```sister```", 
        "value": "ughhhhh"
    }]
}});
}