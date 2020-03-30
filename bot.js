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
 
 const developers = ["644722284359188490","id"]

client.on('message', message => {

    var argresult = message.content.split(` `).slice(1).join(' ');

      if (!developers.includes(message.author.id)) return;

      

  if (message.content.startsWith(adminprefix + 'setg')) {

    client.user.setGame(argresult);

      message.channel.send(`**✅   ${argresult}**`)

  } else 

     if (message.content === (adminprefix + "leave")) {

    message.guild.leave();        

  } else  

  if (message.content.startsWith(adminprefix + 'setw')) {

  client.user.setActivity(argresult, {type:'WATCHING'});

      message.channel.send(`**✅   ${argresult}**`)

  } else 

  if (message.content.startsWith(adminprefix + 'setl')) {

  client.user.setActivity(argresult , {type:'LISTENING'});

      message.channel.send(`**✅   ${argresult}**`)

  } else 

  if (message.content.startsWith(adminprefix + 'sets')) {

    client.user.setGame(argresult, "https://www.twitch.tv/naimabdl");

      message.channel.send(`**✅**`)

  }

  if (message.content.startsWith(adminprefix + 'setname')) {

  client.user.setUsername(argresult).then

      message.channel.send(`Changing The Name To ..**${argresult}** `)

} else

if (message.content.startsWith(adminprefix + 'setava')) {

  client.user.setAvatar(argresult);

    message.channel.send(`Changing The Avatar To :**${argresult}** `);

}

});

});


client.on('message', message => {

if(message.content.startsWith("اقترح")) {

      message.delete()

 

const args = message.content.slice(prefix.length).trim().split(/ +/g);

 

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
