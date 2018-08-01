var Discord = require("discord.io");
var logger = require("winston");
var auth = require("./auth.json");

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console({ colorize: true }));
logger.level = "debug";

var bot = new Discord.Client( {
    token: auth.token,
    autorun: true
});

bot.on("ready", function (evt, error) {
    if (error) {
        logger.info("Uh-oh! " + error);
    }
    else {
    logger.info("Connected!");
    logger.info("Logged in as: ");
    logger.info(bot.username + " - (" + bot.discriminator + ") - (" + bot.id + ")");
    logger.info("Ready player two!");
    logger.info("                  .--~~,__");
    logger.info("    :-....,-------`~~`._./");
    logger.info("     `-,,,  ,_      ;`~U`");
    logger.info("      _,-`` ,``-__; `--.");
    logger.info("     (_/`~~      ````(;`");
    bot.setPresence({ game: { name: "with all my friends!" } });
    }
});

bot.on("disconnect", function(evt, error) {
    if (error) {
    logger.info("Disconnected! " + error);
    }
});

bot.on('message', function (suffix) {
    var args = suffix.split(' ');
    var user = args.shift();
    var message = args.join(' ');
    if(user.startsWith('<@'))
        user = user.substr(2,user,length-3);
});

bot.on('message', function (user, userID, channelID, message, messageID, evt, error) { 
    if(user.bot) return;   
    //listens for message with !
    if (message.substring(0,9) == 'applepaw ') {
        var args = message.substring(9).trim().split(/ +/g);
        var cmd = args[0];

        var catPrefix = ["Acorn", "Adder", "Alder", "Amber", "Ant", "Apple", "Apricot", "Arch", "Ash", "Aspen", "Aster", "Avocet", 
        "Badger", "Balsam", "Basil", "Bark", "Barley", "Bat", "Bear", "Beaver", "Bee", "Beach", "Beech", "Beetle", "Berry", "Birch", "Bird", "Black", "Blade", "Blaze", "Blazing", "Blind", "Blizzard", "Bloom", "Blood", "Blossom", "Blue", "Bone", "Boulder", "Bounce", "Bracken", "Bramble", "Branch", "Brave", "Breeze", "Briar", "Bright", "Brindle", "Broken", "Brook", "Brown", "Brush", "Buck", "Bumble", "Burnet", "Buzzard", 
        "Cedar", "Cheetah", "Cherry", "Chestnut", "Chick", "Chirp", "Chive", "Chub", "Cinder", "Claw", "Clay", "Clear", "Cloud", "Clouded", "Cloudy", "Clover", "Coal", "Cold", "Comfrey", "Cone", "Coot", "Copper", "Coral", "Corn", "Cougar", "Crane", "Creek", "Cricket", "Crooked", "Crouch", "Crow", "Cuckoo", "Crystal", "Curl", "Curlew", "Curly", "Cypress", 
        "Dace", "Daffodil", "Daisy", "Dandelion", "Dandy", "Dapple", "Dappled", "Dark", "Dawn", "Dead", "Deer", "Dew", "Dewy", "Dirt", "Distant", "Dock", "Doe", "Dove", "Drift", "Drizzle", "Duck", "Dusk", "Dust", "Dusty", 
        "Eagle", "Ebony", "Echo", "Eel", "Egg", "Elm", "Ember", "Evening", 
        "Falcon", "Fallen", "Fallow", "Fawn", "Feather", "Fennel", "Fern", "Ferret", "Fidget", "Fin", "Finch", "Fire", "Fish", "Flail", "Flame", "Flash", "Flax", "Flech", "Fleet", "Flint", "Flower", "Fluffy", "Fly", "Fog", "Foggy", "Forest", "Fossil", "Fox", "Freckle", "Frog", "Frond", "Frost", "Furze", "Fuzzy", 
        "Gale", "Gannet", "Gar", "Gay", "Gem", "Ginger", "Glade", "Gold", "Golden", "Goose", "Gorge", "Gorse", "Gray", "Grass", "Gravel", "Green", "Grouse", "Gull", 
        "Hail", "Half", "Hare", "Hatch", "Haven", "Hawk", "Hay", "Hazel", "Heather", "Heavy", "Heron", "Hickory", "Hollow", "Holly", "Honey", "Hoot", "Hop", "Horse", "Hot", "Hound", 
        "Ice", "Ivy", 
        "Jagged", "Jaguar", "Jay", "Jet", "Jump", "Juniper", 
        "Kestrel", "Kink", 
        "Lake", "Lamb", "Larch", "Lark", "Lavender", "Leaf", "Leech", "Lemon", "Leopard", "Lichen", "Light", "Lightning", "Lilac", "Lily", "Lion", "Little", "Lizard", "Log", "Long", "Lost", "Loud", "Low", "Lynx", 
        "Maggot", "Magpie", "Mallow", "Maple", "Marigold", "Marsh", "Meadow", "Midge", "Milk", "Mink", "Minnow", "Mint", "Mist", "Mistle", "Misty", "Mole", "Moon", "Morning", "Moss", "Mossy", "Mosquito", "Moth", "Mottle", "Mouse", "Mud", "Muddy", "Mumble", "Mushroom", 
        "Nectar", "Needle", "Nettle", "Newt", "Night", "Nut", 
        "Oak", "Oat", "Odd", "Olive", "One", "Onion", "Otter", "Owl", 
        "Pale", "Panther", "Parsley", "Parsnip", "Patch", "Pear", "Pebble", "Pepper", "Perch", "Petal", "Pheasant", "Pigeon", "Pike", "Pine", "Plum", "Poppy", "Pounce", "Pool", "Prickle", "Primrose", "Puddle", "Pumpkin", 
        "Quail", "Quick", "Quiet", 
        "Rabbit", "Ragged", "Raccoon", "Rain", "Raspberry", "Rat", "Raven", "Red", "Reed", "Ripple", "River", "Robin", "Rock", "Rook", "Rose", "Rowan", "Rubble", "Ruin", "Rue", "Running", "Rush", "Russet", "Rust", "Rusty", "Rye",  
        "Sage", "Sand", "Sandy", "Sap", "Scorch", "Sedge", "Seed", "Shade", "Shadow", "Sharp", "Sheep", "Shell", "Shimmer", "Shining", "Short", "Shrew", "Shred", "Silver", "Sky", "Slate", "Sleek", "Slight", "Sloe", "Slow", "Smoke", "Small", "Snail", "Snake", "Snap", "Sneeze", "Snip", "Snook", "Snow", "Soft", "Song", "Soot", "Sorrel", "Spark", "Sparrow", "Speckle", "Spider", "Spike", "Splash", "Spot", "Spotted", "Spruce", "Squirrel", "Stag", "Starling", "Stem", "Stoat", "Stone", "Storm", "Strike", "Stumpy", "Sun", "Sunny", "Swallow", "Swan", "Sweet", "Swift", 
        "Tall", "Talon", "Tangle", "Tansy", "Tawny", "Thistle", "Thorn", "Thrift", "Thrush", "Thunder", "Tiger", "Timber", "Tiny", "Toad", "Torn", "Trout", "Tumble", "Turkey", "Twig", "Twilight", 
        "Vine", "Violet", "Vixen", "Vole", "Vulture", 
        "Wasp", "Wave", "Weasel", "Web", "Weed", "Wet", "Whisker", "White", "Whorl", "Wild", "Willow", "Wind", "Wolf", "Wood", "Wooly", "Wren", 
        "Yarrow", "Yellow"];
        var catSuffix = ["acorn", "ash", 
        "back", "bark", "bee", "bell", "belly", "berry", "bird", "blaze", "bounce", "branch", "breeze", "briar", "bright", "brook", "burr", "bush", 
        "call", "catcher", "claw", "cloud", "coat", "creek", "crystal", "cry", 
        "dapple", "dawn", "dream", "dust", 
        "ear", "eye", "eyes", 
        "face", "fall", "fang", "feather", "fern", "fin", "fire", "fish", "flame", "flank", "flash", "fleck", "flight", "flower", "fluff", "flurry", "foot", "frost", "fur", 
        "gaze", "gem", "gleam", "glisten", "glow", "goose", "gorse", "grass", 
        "hare", "hawk", "haze", "heart", "heather", "hollow", "holly", 
        "ice", "ivy", 
        "jaw", "jay", "jump", 
        "leaf", "leap", "leg", "light", 
        "mask", "mist", "moon", "mouse", "muzzle", 
        "nettle", "night", "nose", 
        "ocean", 
        "pad", "patch", "path", "pearl", "pelt", "petal", "pond", "pool", "poppy", "pounce", "puddle", 
        "ripple", "river", "rock", "run", "runner", 
        "scar", "sea", "seed", "shade", "shadow", "shimmer", "shine", "sight", "skip", "sky", "slip", "snout", "snow", "soar", "song", "spark", "speck", "speckle", "spiral", "spirit", "splash", "spots", "spring", "stalk", "stem", "step", "sting", "stone", "storm", "streak", "stream", "stride", "strike", "stripe", "sun", "swipe", "swirl", 
        "tail", "talon", "thicket", "thistle", "thorn", "throat", "tip", "toe", "tooth", "tree", "tuft", 
        "vine", 
        "watcher", "water", "whisker", "willow", "wind", "wing", "wish", "whisper"];

        var prefix = catPrefix[Math.floor(Math.random() * catPrefix.length)];
        var suffix = catSuffix[Math.floor(Math.random() * catSuffix.length)];

        if (cmd === "apprentice") {
            if (error) {
                logger.info("Uh-oh, failure on apprentice command! Error code " + error + " on channel " + channelID + ".")
            }
            else {
                bot.sendMessage({to: channelID, message: prefix + "paw"})
                }
            }
        if (cmd === "kit") {
            if (error) {
                logger.info("Uh-oh, failure on kit command! Error code " + error + " on channel " + channelID + ".")
            }
            else {
                bot.sendMessage({to: channelID, message: prefix + "kit"})
                }
            }
        if (cmd === "leader") {
            if (error) {
                logger.info("Uh-oh, failure on leader command! Error code " + error + " on channel " + channelID + ".")
                }
            else {
                bot.sendMessage({to: channelID, message: prefix + "star"})
                }
            }
        if (cmd === "warrior") {
            if (error) {
                logger.info("Uh-oh, failure on warrior command! Error code " + error + " on channel " + channelID + ".")
                }
            else {
                bot.sendMessage({to: channelID, message: prefix + suffix})
                }
            }
        if (cmd === "prefix") {
            if (error) {
                logger.info("Uh-oh, failure on prefix command! Error code " + error + " on channel " + channelID + ".")
                }
            else {
                bot.sendMessage({to: channelID, message: prefix})
                }
            }
        if (cmd === "suffix") {
            if (error) {
                logger.info("Uh-oh, failure on suffix command! Error code " + error + " on channel " + channelID + ".")
                }
            else {
                bot.sendMessage({to: channelID, message: suffix})
                }
            }
        if (cmd === "newtpaw") {
            if (error) {
                logger.info("Uh-oh, failure on Newtpaw command! Error code " + error + " on channel " + channelID + ".")
                }
            else {
                bot.sendMessage({to: channelID, message: "You can't think of Newtpaw as being a bastard?"})
                }
            }
        if (cmd === "help") {
            if (error) {
                logger.info("Uh-oh, failure on help command! Error code " + error + " on channel " + channelID + ".")
                }
            else {
                bot.sendMessage({to: channelID, message: "=== FULL COMMANDS LIST FOR APPLEPAW === \n==You can also type `applepaw help` at any time to get this pasted. == \n= Generator commands: = \n• `applepaw kit` \nSends a randomly generated name for a kit into the current channel. \n• `applepaw apprentice` \nSends a randomly generated name for an apprentice into the current channel. \n• `applepaw warrior` \nSends a randomly generated name for a warrior into the current channel. \n• `applepaw leader` \nSends a randomly generated name for a leader into the current channel. \n= Miscellaneous = \n• `applepaw newtpaw` \nCan't stand the thought..."})
                }
            }
        }
    }
)
