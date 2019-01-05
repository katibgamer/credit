const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("513747297520189460")
setInterval(function() {
channel.send(`katib_dz hab full axx`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
