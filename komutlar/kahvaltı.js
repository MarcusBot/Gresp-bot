const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(message.author.username + ' Kahvaltı yapıyor!')
		.setImage(`http://www.damakdiyari.com.tr/content/images/thumbs/0000765_serpme-kahvalti.jpeg`)
		.setFooter(`${message.author.username} tarafından kullanıldı.`)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kahvaltı',
  description: 'Kahvaltı yaparsınız.',
  usage: 'kahvaltı'
};
