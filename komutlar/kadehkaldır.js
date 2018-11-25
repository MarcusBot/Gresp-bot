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
    .setDescription(`${message.author.username}, kadeh kaldırdı. 🍷`)
		.setImage(`https://media.giphy.com/media/DfLwM9kttDFEQ/giphy.gif`)
		.setFooter(`${message.author.username} tarafından istendi.`)
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
  name: 'kadehkaldır',
  description: 'Kadeh kaldırır.',
  usage: 'kadehkaldır'
};
