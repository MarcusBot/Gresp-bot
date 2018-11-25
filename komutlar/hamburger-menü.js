const Discord = require('discord.js');

exports.run = (client, message) => {
	const embed  = new Discord.RichEmbed()
	.setAuthor("Hamburger Menü", client.user.displayAvatarURL)
	.setDescription("Hamburger menüsüne hoşgeldin! Buradan istediğin hamburgeri seçip yiyebilirsin. \n``Kullanım: g!hamburger-<bk,mcd> <sayı>`` \n \n**Burger King** \nWhooper® Menü **|** 1 \nRodeo Whooper® Menü **|** 2 \nJalapeno Whooper® Menü **|** 3 \nDouble Whooper® Menü **|** 4 \nWhooper Jr.® Menü **|** 5 \nTavuklu Barbekü Brioche® Menü **|** 6 \nEtli Barbekü Brioche® Menü **|** 7 \nKöfteburger® Menü **|** 8 \nDouble Köfteburger® Menü **|** 9 \nTexas Smokehouse Burger® Menü **|** 10 \nDouble Texas Smokehouse Burger® Menü **|** 11 \n \n**McDonalds** \nRamazan Menüsü **|** 1 \nİkili Mekonomik Menü **|** 2 \n2 McChicken® Menü **|** 3 \nBig Maç Menü **|** 4 \nDaba Daba Burger Menü **|** 5 \nGamer Menü **|** 6 \nBig Mac® Menü **|** 7 \nMcRoyal® Menü **|** 8 \nMaxBurger Menü **|** 9 \nDouble Cheeseburger Menü **|** 10")
	.setFooter(`${message.author.username} tarafından istendi. | Ramazan ayında tercih edilmez.`)
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
  name: 'hamburger-menü',
  description: 'Hangi hamburgerden almak istediğini öğreneceğin bir menü...',
  usage: 'hamburger-menü'
};