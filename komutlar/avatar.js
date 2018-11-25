const Discord = require('discord.js');
exports.run = function(client, message, args) {
 let user = message.mentions.users.first();
 if (message.mentions.users.size < 1) return message.channel.send(':no_entry: Eğer bir kişiyi etiketlemezseniz o kişinin avatarını atamam.').catch(console.error);
const avatar = new Discord.RichEmbed()
.setDescription(`Avatar;`)
.setImage(`${message.mentions.users.avatarURL}`)
.setFooter(`${message.author.username} tarafından istendi.`)
.setColor("RANDOM")
return message.channel.sendEmbed(avatar)
};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'avatar',
 description: 'Etiketlediğiniz kişinin avatarını atar.',
 usage: 'avatar'
};
