const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
        console.log(`Logged in as ${client.user.tag}!`);
        console.log("Ready player one!");
        console.log("                  .--~~,__");
        console.log("    :-....,-------`~~`._./");
        console.log("     `-,,,  ,_      ;`~U`");
        console.log("      _,-`` ,``-__; `--.");
        console.log("     (_/`~~      ````(;`");
        client.user.setActivity(`over ${client.guilds.size} servers`, {type: 'WATCHING'})
    }
);

client.on("message", (message) => {
    if (message.author.bot) return;

    const catPrefix = ["Acorn", "Adder", "Alder", "Amber", "Ant", "Apple", "Apricot", "Arch", "Ash", "Aspen", "Aster", "Avocet", 
    "Badger", "Balsam", "Basil", "Bark", "Barley", "Bat", "Bear", "Beaver", "Bee", "Beach", "Beech", "Beetle", "Berry", "Birch", "Bird", "Black", "Blade", "Blaze", "Blazing", "Blind", "Blizzard", "Bloom", "Blood", "Blossom", "Blue", "Bluebell", "Bone", "Boulder", "Bounce", "Bracken", "Bramble", "Branch", "Brave", "Breeze", "Briar", "Bright", "Brindle", "Bristle", "Broken", "Brook", "Brown", "Brush", "Bubbling", "Buck", "Bumble", "Burnet", "Buzzard", 
    "Cedar", "Cheetah", "Cherry", "Chestnut", "Chick", "Chirp", "Chive", "Chub", "Cinder", "Claw", "Clay", "Clear", "Cloud", "Clouded", "Cloudy", "Clover", "Coal", "Cold", "Comfrey", "Cone", "Coot", "Copper", "Coral", "Corn", "Cougar", "Crane", "Creek", "Cricket", "Crooked", "Crouch", "Crow", "Cuckoo", "Crystal", "Curl", "Curlew", "Curly", "Cypress", 
    "Dace", "Daffodil", "Daisy", "Dandelion", "Dandy", "Dapple", "Dappled", "Dark", "Dawn", "Dead", "Deer", "Dew", "Dewy", "Dirt", "Distant", "Dock", "Doe", "Dove", "Drift", "Drizzle", "Duck", "Dusk", "Dust", "Dusty", 
    "Eagle", "Ebony", "Echo", "Eel", "Egg", "Elm", "Ember", "Evening", 
    "Falcon", "Fallen", "Fallow", "Fawn", "Feather", "Fennel", "Fern", "Ferret", "Fidget", "Fin", "Finch", "Fire", "Fish", "Flail", "Flame", "Flash", "Flax", "Flech", "Fleet", "Flint", "Flower", "Fluffy", "Fly", "Fog", "Foggy", "Forest", "Fossil", "Fox", "Freckle", "Frog", "Frond", "Frost", "Furze", "Fuzzy", 
    "Gale", "Gannet", "Gar", "Gay", "Gem", "Ginger", "Glade", "Gold", "Golden", "Goose", "Gorge", "Gorse", "Gray", "Grass", "Gravel", "Green", "Grouse", "Gull", 
    "Hail", "Half", "Hare", "Hatch", "Haven", "Hawk", "Hay", "Hazel", "Heather", "Heavy", "Heron", "Hickory", "Hollow", "Holly", "Honey", "Hoot", "Hop", "Horse", "Hot", "Hound", 
    "Ice", "Ivy", 
    "Jagged", "Jaguar", "Jasmine", "Jay", "Jet", "Jump", "Juniper", 
    "Kestrel", "Kink", 
    "Lake", "Lamb", "Larch", "Lark", "Lavender", "Leaf", "Leech", "Lemon", "Leopard", "Lichen", "Light", "Lightning", "Lilac", "Lily", "Lion", "Little", "Lizard", "Log", "Long", "Lost", "Loud", "Low", "Lynx", 
    "Maggot", "Magpie", "Mallow", "Maple", "Marigold", "Marsh", "Meadow", "Midge", "Milk", "Mink", "Minnow", "Mint", "Mist", "Mistle", "Misty", "Mole", "Moon", "Morning", "Moss", "Mossy", "Mosquito", "Moth", "Mottle", "Mouse", "Mud", "Muddy", "Mumble", "Mushroom", 
    "Nectar", "Needle", "Nettle", "Newt", "Night", "Nut", 
    "Oak", "Oat", "Odd", "Olive", "One", "Onion", "Otter", "Owl", 
    "Pale", "Panther", "Parsley", "Parsnip", "Patch", "Pear", "Pebble", "Pepper", "Perch", "Petal", "Pheasant", "Pigeon", "Pike", "Pine", "Plum", "Poppy", "Pounce", "Pool", "Prickle", "Primrose", "Puddle", "Pumpkin", 
    "Quail", "Quick", "Quiet", 
    "Rabbit", "Ragged", "Raccoon", "Rain", "Raspberry", "Rat", "Raven", "Red", "Reed", "Ripple", "River", "Robin", "Rock", "Rook", "Rose", "Rowan", "Rubble", "Ruin", "Rue", "Running", "Rush", "Russet", "Rust", "Rusty", "Rye",  
    "Sage", "Sand", "Sandy", "Sap", "Scorch", "Sea", "Sedge", "Seed", "Shade", "Shadow", "Sharp", "Sheep", "Shell", "Shimmer", "Shining", "Short", "Shrew", "Shred", "Silver", "Sky", "Slate", "Sleek", "Slight", "Sloe", "Slow", "Smoke", "Small", "Snail", "Snake", "Snap", "Sneeze", "Snip", "Snook", "Snow", "Soft", "Song", "Soot", "Sorrel", "Spark", "Sparrow", "Speckle", "Spider", "Spike", "Splash", "Spot", "Spotted", "Spruce", "Squirrel", "Stag", "Starling", "Stem", "Stoat", "Stone", "Storm", "Strike", "Stumpy", "Sun", "Sunny", "Swallow", "Swan", "Sweet", "Swift", 
    "Tall", "Talon", "Tangle", "Tansy", "Tawny", "Thistle", "Thorn", "Thrift", "Thrush", "Thunder", "Tiger", "Timber", "Tiny", "Toad", "Torn", "Torrent", "Trout", "Tumble", "Turkey", "Twig", "Twilight", 
    "Vine", "Violet", "Vixen", "Vole", "Vulture", 
    "Wasp", "Wave", "Weasel", "Web", "Weed", "Wet", "Whisker", "White", "Whorl", "Wild", "Willow", "Wind", "Wolf", "Wood", "Wooly", "Wren", 
    "Yarrow", "Yellow"];
const catSuffix = ["acorn", "ash", 
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
    "scar", "sea", "seed", "shade", "shadow", "sheen", "shimmer", "shine", "sight", "skip", "sky", "slip", "snout", "snow", "soar", "song", "spark", "speck", "speckle", "spiral", "spirit", "splash", "spots", "spring", "stalk", "stem", "step", "sting", "stone", "storm", "streak", "stream", "stride", "strike", "stripe", "sun", "swipe", "swirl", 
    "tail", "talon", "thicket", "thistle", "thorn", "throat", "tip", "toe", "tooth", "tree", "tuft", "tumble", 
    "vine", 
    "watcher", "water", "whisker", "willow", "wind", "wing", "wish", "whisper"];
const catCoatColour = ["albino", "almond", "amber", "auburn", "ashen",
    "beige", "black", "blue", "blue-gray", "brass", "bronze", "brown", 
    "caramel", "cedar", "cherry", "chestnut", "chocolate", "cinnamon", "cocoa", "copper", "cream", 
    "dark-brown", "dark-gray", "dark-orange", "dark-red", "dove-gray", 
    "ebony", 
    "fawn", "fiery", "flame", "frost", 
    "ginger", "gold", "golden", "gray", 
    "honey", 
    "jet", 
    "lilac", "light-brown", "light-gray", 
    "mahogany", "maroon", "mauve", "milk", 
    "obsidian", "olive", "onyx", 
    "pale", "peach", "pearl", 
    "raven", "red", "reddish-brown", "russet", "rust", 
    "sandy", "silver", "silver-gray", "snow", "stone", "sunset",
    "tan", "tawny",
    "vanilla", 
    "white",
    "yellow"];
const catMarkings = ["light striped tabby", "heavy striped tabby", 
    "light mackerel tabby", "heavy mackerel tabby", 
    "light spotted tabby", "heavy spotted tabby", "leopard spotted tabby",
    "light spotted", "heavy spotted", "leopard spotted", 
    "light ticked tabby", "heavy ticked tabby", 
    "light ticked", "heavy ticked", 
    "bicoloured", "dappled", "harlequin", "solid-coloured", "tricoloured", "blotched"];
const catEyeColour = ["amber", "amethyst", "apricot", "aqua", "aquamarine", "azure",  
    "baby blue", "beige", "black", "blue", "blue-green", "blue-violet", "blush", "bronze", "brown", "burgundy", "byzantium",  
    "carmine", "cerise", "cerulean", "champagne", "chartreuse", "chocolate", "cobalt", "coffee", "copper", "coral", "crimson", "crystal", "cyan", 
    "dawn", 
    "earth", "electric blue", "emerald", 
    "glacial", "gold", "gray", "green", 
    "hazel", "hetero black/white", "hetero blue/brown", "hetero blue/green", "hetero brown/green", 
    "ice", "indigo", 
    "jade", "jet", 
    "lavender", "lemon", "lilac", "lime", "lightning", 
    "magenta", "maroon", "mint", 
    "ochre", "olive", 
    "pink", "purple", 
    "red", "ruby", 
    "sapphire", "silver", 
    "tan", 
    "violet", 
    "white", 
    "yellow", ];
const catPersonalities = ["active", "admirable", "adventurous", "agreeable", "alert", "aspiring", "athletic", "attractive", "absentminded", "ambitious", "amusing", "abrupt", 
    "brilliant", "breezy", "busy", "blunt", 
    "calm", "capable", "caring", "charismatic", "charming", "cheerful", "clever", "compassionate", "confident", "considerate", "cooperative", "courageous", "creative", "curious", "casual", "competitive", "cute", "childish", "cruel", "critical", 
    "daring", "dedicated", "dignified", "disciplined", "dramatic", "deceptive", "determined", "dreamy", "dry", 
    "earnest", "efficient", "elegant", "empathetic", "energetic", "enthusiastic", "exciting", "earthy", "emotional", 
    "faithful", "firm", "forgiving", "friendly", "formal", 
    "generous", "gentle", "genuine", "goodnatured", 
    "hardworking", "healthy", "hearty", "helpful", "honest", "honourable", "humble", "humourous", 
    "imaginative", "impressive", "independent", "innovative", "insightful", "intelligent", "intuitive", "intense", 
    "kind", "knowledgeable", 
    "mature", "methodical", "modest", "maternal", "mellow", 
    "neat", 
    "observant", "optimistic", "organized", "obedient", "outspoken", "old-fashioned", "ordinary", 
    "passionate", "patient", "patriotic", "peaceful", "perceptive", "perfectionist", "persuasive", "playful", "popular", "practical", "precise", "protective", "proud", 
    "rational", "realistic", "relaxed", "reliable", "respectful", "responsible", "romantic", 
    "selfless", "sensitive", "sapphic", "simple", "skillful", "sociable", "sophisticated", "steady", "subtle", "sweet", "sympathetic", "sarcastic", "skeptical", "soft", "smooth", "solemn", "stern", "stoic", "stubborn", "surprising", 
    "tolerant", "trusting", "tough", 
    "understanding", 
    "vivacious", 
    "warm", "well-rounded", "wise", "witty"];
const newtPaw = ["You can't stand the thought of Newtpaw being a bastard?", "I would die for Newtpaw.", "What do I think of Newtpaw? He's got mouse ears!"];

const pre = catPrefix[Math.floor(Math.random() * catPrefix.length)];
const suffix = catSuffix[Math.floor(Math.random() * catSuffix.length)];
const coat = catCoatColour[Math.floor(Math.random() * catCoatColour.length)];
const marking = catMarkings[Math.floor(Math.random() * catMarkings.length)];
const eyes = catEyeColour[Math.floor(Math.random() * catEyeColour.length)];
const pers = catPersonalities[Math.floor(Math.random() * catPersonalities.length)];
const newt = newtPaw[Math.floor(Math.random() * newtPaw.length)];

const desc1 = ["This " + pers + " cat is a " + marking + " with " + coat + " fur and " + eyes + " coloured eyes!"];
const desc2 = ["This " + pers + " cat is a calico with " + eyes + " coloured eyes!"];
const desc3 = ["This " + pers + " cat is a tortoiseshell with " + eyes + " coloured eyes!"];
const desc4 = ["This " + pers + " cat is a spotted " + coat + " coloured cat with " + eyes + " eyes!"];
const desc5 = ["This " + pers + " cat is a striped " + coat + " coloured cat with " + eyes + " eyes!"];
const catDescription = [desc1, desc2, desc3, desc4, desc5]
const desc = catDescription[Math.floor(Math.random() * catDescription.length)];

    const prefixes = ['ap ', 'applepaw '];
    let prefix = false;
    for (const thisPrefix of prefixes) {
        if (message.content.toLowerCase().startsWith(thisPrefix)) prefix = thisPrefix;
    }
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

        if(command === 'kit') {
            message.channel.send(pre + "kit");
        } else
        if (command === 'apprentice') {
            message.channel.send(pre + "paw");
        } else
        if (command === 'ap') {
            message.channel.send(pre + "paw");
        } else
        if (command === 'warrior') {
            message.channel.send(pre + suffix);
        } else
        if (command === 'wa') {
            message.channel.send(pre + suffix);
        } else
        if (command === 'leader') {
            message.channel.send(pre + "star");
        } else
        if (command === 'le') {
            message.channel.send(pre + "star");
        } else
        if (command === 'prefix') {
            message.channel.send(pre);
        } else
        if (command === 'pre') {
            message.channel.send(pre);
        } else
        if (command === 'suffix') {
            message.channel.send(suffix);
        } else
        if (command === 'su') {
            message.channel.send(suffix);
        } else
        if (command === 'description') {
            message.channel.send(desc);
        } else
        if (command === 'desc') {
            message.channel.send(desc);
        } else
        if (command === 'eyes') {
            message.channel.send("This cat will have " + eyes + "-coloured eyes.");
        } else
        if (command === 'ec') {
            message.channel.send("This cat will have " + eyes + "-coloured eyes.");
        } else
        if (command === 'personality') {
            message.channel.send(pers);
        } else
        if (command === 'pers') {
            message.channel.send(pers);
        } else
        if (command === 'traits') {
            message.channel.send(pers);
        } else
        if (command === 'newtpaw') {
            message.channel.send(newt);
        } else
        if (command === 'np') {
            message.channel.send(newt);
        } else
        if (command === 'support') {
            message.channel.send("discord.gg/8cEWeTB");
        } else
        if (command === 'add') {
            message.channel.send("Click here to add me to your server! https://discordapp.com/oauth2/authorize?client_id=461353751010213898&scope=bot");
        } else
        if (command === 'suggest') {
            message.channel.send("If you have any suggestions, please feel free to send them to me @jj#8750 on my personal server! discord.gg/8cEWeTB");
        } else
        if (command === 'help') {
            message.channel.send({embed: {
                "color": 16744192,
                "fields": [{
                    "name": "all of the following commands start with either ```applepaw``` or ```ap```.",
                    "value": "try it out!"
                },
                {
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
                    "name": "• ```help``` / ```support``` / ```add```",
                    "value": "Help brings up these commands again, support links you my personal server, and add lets you add Applepaw to your own server!"
                },
                {
                    "name": "• ```suggest```",
                    "value": "If you have any suggestions, run this command for a guide on how to send them to me!"
                }
            ]
        }})}
    }
);
client.on("error", (e) => console.error(e));
client.login(config.token);