const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(':no_entry: Hangi kullanıcı ile öpüşeceğini yazmalısın!');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} tarafından istendi.`)
		.setTimestamp()
    .setDescription(`${mesaj} adlı kişi ile ${message.author.username} öpüştü.`)
		.setImage('https://media.giphy.com/media/xUOrwhv5n3vaxIKSVG/giphy.gif')
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'öpüş',
  description: 'İstediğiniz kişiyle öpüşmenizi sağlar.',
  usage: 'öpüş'
};
