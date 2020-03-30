const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ['+'];
var adminprefix = '$' 

 
 
 
 
 
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
 
});


client.on('message', message => {

if(message.content.startsWith("اقترح")) {

      message.delete()

 

const args = message.content.slice().trim().split(/ +/g);

 

  var suggestMessage = args.slice(1).join(" ")

  if(!suggestMessage) return message.reply("الرجاء وضع اقتراح")

  let suggestsEMBED = new Discord.RichEmbed()

   .setColor('#0028db')

   .setTitle(" new suggestions")

   .setDescription(`**${suggestMessage}**`)

   .setFooter(` suggestions : ${message.author.tag}`)

 

       let suggests = message.guild.channels.find(ch => ch.name === "suggestions");

                   if (!suggests) return message.reply("Please create text chat : suggestions")

               suggests.send(suggestsEMBED);

}

})

client.on("message", mohamed => {

  if(!mohamed.channel.id == "688793511436484728") return;

 if(mohamed.channel.id == "688793511436484728"){ 

mohamed.react("✅") 

mohamed.react("❌") 

 }

});

client.login(process.env.TOKEN);
