const Discord = require('discord.js');

exports.run = (client, message, args) => {
	var saldırdıktansonra = [
	"adlı kişi hamburgerine saldırdığın için seni dövdü. Ne yapmak istersin? \nSeçenekler = ``sikayetci-ol``, ``affet``, ``sülaleyi-topla``",
	"adlı kişinin hamburgerine saldırdıktan sonra o da seninkine saldırdı. :smile:"
	]
	var saldırdıktansonra = saldırdıktansonra[Math.floor(Math.random(1) * saldırdıktansonra.length)]
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(':no_entry: Kimin hamburgerine saldırmamı yazmalısın. ``\nKullanım; g!hamburgerinesaldır @Gresp``');
    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
	.setFooter(`${message.author.username} tarafından kullanıldı.`)
		.setTimestamp()
    .setDescription(` ${mesaj} ` + message.author.username + ' adlı kullanıcı senin hamburgerine saldırdı! 🍔')
		.setImage('https://media.giphy.com/media/3o7WTCBePyp2GCamIM/giphy.gif')
    message.channel.sendEmbed(embed)
	return message.channel.send(`${mesaj} ${saldırdıktansonra}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hamburgerinesaldır',
  description: 'İstediğiniz kişinin hamburgerine saldırır.',
  usage: 'hamburgerinesaldır'
};
