const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription('Bot için oy vermek istiyorsun demek... Özel mesajlarını kontrol et.');
    message.channel.sendEmbed(ozelmesajkontrol) }
	const pingozel = new Discord.RichEmbed()
    .setColor("RANDOM")
	.setTitle('Destek çıkacağın için teşekkürler.')
	.setDescription('[DBL Oy Linki](https://discordbots.org/bot/453137622173351936/vote)')
	.setFooter(`Gresp DBL`, client.user.displayAvatarURL)
    message.author.sendEmbed(pingozel)
	return message.author.send('Eğer gerçekten oy vereceksen oy verdikten sonra fotoğrafını çek ve botun sahibine at ve "oy veren" rolünü al. (tabiki botun destek sunucusunda isen...)')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek-çık', 'dbloy'],
  permLevel: 0
};

exports.help = {
  name: 'oyver',
  description: 'Botun DBL oy linkini atar.',
  usage: 'oyver'
};
