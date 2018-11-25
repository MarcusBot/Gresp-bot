const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var yazıtura = [
        "https://cdn.discordapp.com/attachments/358322476167462914/366966782252023808/1503472_o8efa.png",
        "https://cdn.discordapp.com/attachments/358322476167462914/366966718486282240/1TL_reverse.png "
    ]
    var yazıtura = yazıtura[Math.floor(Math.random(1) * yazıtura.length)]
    const embedeightball = new Discord.RichEmbed()
	.setAuthor("Yazı mı tura mı?", message.author.avatarURL)
  .setImage(yazıtura)
	.setColor("RANDOM")
	return message.channel.sendEmbed(embedeightball);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı mı tura mı?',
  usage: 'yazı-tura',
};
