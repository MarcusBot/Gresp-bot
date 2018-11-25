const Discord = require('discord.js');

exports.run = (client, message) => {
    var cm = [
        "5 cm **----->**",
		"11 cm **----------->**",
		"17 cm **----------------->**",
		"1 cm **->**",
		"4 cm **---->**",
		"6 cm **------>**",
		"2 cm **-->**",
		"3 cm **--->**",
		"7 cm **------->**",
		"8 cm **-------->**",
		"9 cm **--------->**",
		"10 cm **---------->**",
		"12 cm **------------>**",
		"13 cm **------------->**",
		"14 cm **-------------->**",
		"15 cm **--------------->**",
		"16 cm **---------------->**"

	]
    var cm = cm[Math.floor(Math.random(1) * cm.length)]
	const embed  = new Discord.RichEmbed()
	.setAuthor(message.author.username, message.author.avatarURL)
	.setDescription(`${message.author.username}'inki ${cm}`)
	.setFooter(`${message.author.username} tarafından istendi.`)
	.setColor("RANDOM")
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kaçcm',
  description: 'Kaç cm?',
  usage: 'kaçcm'
};