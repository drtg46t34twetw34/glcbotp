const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

const discord_token = "NTUxNjQxNTcxMDgzMjg4NTk2.D1z7zw.3JVRPks-TdsKc1Jw3hQUN-KqbTg";
client.login(discord_token);
client.on('ready', function() {
	console.log(`i am ready ${client.user.username}`);


});



	
client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'GamersLifeCommunity',
            type: "Streaming",
            url: "https://www.twitch.tv/dangerrpg1"
        }
    });
  
});


client.on('message', message => {
    if (message.content === '!glc') {
    	message.channel.send('Gamers Life Community');
  	}
});




client.on('message', function(message) {
    if (message.content == "!g_clear") {
        if (message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                    	message.channel.send('its Clear xD');
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

}); 









client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "g-delete") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد السطور التي تريد مسحها ```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد السطور التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
}); 



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
			
    return message.reply(`** يمنع النشر - الرجاء مراجعة قوانين السيرفر**`).then(m => m.delete(5000)); 

    }
	

});


	client.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "! P L A Y E R S"); 
    member.addRole(role).catch(console.error);
});


client.on("message", message => {

            if (message.content.startsWith(prefix + "g-bc-p")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== '').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : Online Members`); 
 message.delete(); 
};     
});


client.on('message', message => {
if(message.content.startsWith(prefix + 'g-moveall')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });

client.login(process.env.BOT_TOKEN);
