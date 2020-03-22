exports.run = (client, message, args) => {
    const fruit = ["apple", "orange", "pear", "peach", "cherry", "coconut", "banana", "lemon", "lychee", "durian", "mango", "persimmon", "grape"];
    const fruits = fruit[Math.floor(Math.random() * fruit.length)];
    return message.channel.send(fruits)
}