const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ['-'];





client.on("message", message=>{
if (message.content.startsWith(prefix + "embed")){
  if(!message.member.hasPermission('ADMINISTRATOR')) return message.delete();
  let args = message.content.split(" ").slice(1);
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    .setFooter(`EG SERVER `)
   message.channel.sendEmbed(say);
    message.delete();
}
  })

client.login(process.env.TOKEN);


