var ServerID = "489538820795006976"; 
var ChannelID = "489538820795006978";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('warn', console.warn);

client.on('error', console.error);



client.on('ready', () => console.log('Starting'));

client.on('disconnect', () => console.log('disconnected!'));

client.on('reconnecting', () => console.log('reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

client.login(process.env.BOT_TOKEN);
