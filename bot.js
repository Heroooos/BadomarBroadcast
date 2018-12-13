const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const jimp = require('jimp');
const Canvas = require('canvas');
const data = {}
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`By : Alpha server.`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
}); // 


const RichEmbed = require("discord.js");

client.on('message', message => {
  if(!message.channel.guild) return;
var prefix = "+";
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let copy = "FeNiXo";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });

reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {

m.send(args)
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});

              


client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
 
  if(message.content.startsWith(prefix + "rolebc")) {
    if (!message.member.hasPermission("ADMINISTRATOR"))  return;
    let args = message.content.split(" ").slice(1);
 
    if(!args[0]) {
      message.channel.send("**قم بمنشنة الرتبة**")
        return;
    }
    if(!args[1]) {
      message.channel.send("**قم بكتابة الرسالة**")
        return;
    }
 
      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`)
        message.guild.members.forEach(m => {
          m.send(`${args[1]}`)
        })
        return;
      }
 
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("لا توجد رتبة بهذا الاسم")
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(n => {
          n.send(`${args[1]}`)
        })
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عضو`)
    }
});
                    client.on("message", message => {
                         var prefix = "+";
                        if (message.content.startsWith(prefix + "obc")) {
                                     if (!message.member.hasPermission("ADMINISTRATOR"))  return;
              let args = message.content.split(" ").slice(1);
              var argresult = args.join(' '); 
              message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
             m.send(`${argresult}\n ${m}`);
            })
             message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
             message.delete(); 
            };     
            });
			
	    client.on('message', message => {
    var prefix = "+";

      if (message.author.bot) return;
      if (!message.content.startsWith(prefix)) return;
     
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
     
      let args = message.content.split(" ").slice(1);
     
      if (command === "say") {
              message.delete()
        message.channel.sendMessage(args.join(" ")).catch(console.error);
      }
       
      
     
    if (command == "embed") {
        let say = new Discord.RichEmbed()
        .setDescription(args.join("  "))
        .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
      }
     
     
    });

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
      if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
     message.channel.send('**تم ارسال رسالة في الخاص**');




 message.author.sendMessage(`
 **
[❖═════ Broadcast Commands ═══════❖]

+bc



client.login(process.env.BOT_TOKEN);
