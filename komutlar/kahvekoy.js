const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(client.username, client.avatarURL)
    .addField('Bu komut botumuzun özel mesajlarında kullanılamaz, diğer komutlardaki gibi...')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setColor("RANDOM")
    .setTimestamp()
    .setDescription(message.author.username + ' Kahve içmeye bayıldığı için kendine bir bardak kahve koydu!')
	.setImage(`https://media.giphy.com/media/12cIZ9qinsCVos/giphy.gif`)
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
  name: 'kahvekoy',
  description: 'Kahve koyar.',
  usage: 'kahvekoy'
};
