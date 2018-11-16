const Discord = require("discord.js");
const client = new Discord.Client();


client.on('ready', () => {
console.log("hehe");
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(`

Resident Roleplay Community MTA

https://discord.gg/dp7rKQd

- ريسندت، خادم بسيط
كل ما ننوي هو تحسين فكرة لعب الأدوار عند الجميع، مع قواعد جديده تحسن من لعب الأدوار واتقانه أكثر،
- مع أداره لها خبره وزمن في لعب الأدوار

`)

}).catch(console.error)
})

client.on('message', message => {
   
    let args = message.content.split(' ').slice(1).join(' ');
   
  if (message.content === 'ping') {
      message.channel.send(`<@${message.author.id}> Ping..!`)
  }
 
 
  if (message.content.startsWith('$bc')) {
          if (!args[0]) {
message.channel.send("**$bc <message>**");
return;
}
message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
   m.send(`${args}`);
 
});
  }
 
});

client.login(process.env.BOT_TOKEN);
