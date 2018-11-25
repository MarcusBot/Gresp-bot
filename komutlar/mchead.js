 const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setDescription('Özel mesajlarda komut kullanımı kapatılmıştır.')
  return message.author.sendEmbed(ozelmesajuyari); }
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(':no_entry: Lütfen istediğiniz minecraft kullanıcısının adını yazınız.');
    const mesaj2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${mesaj} kullanıcısının kafa avatarı`)
    .setImage(`http://cravatar.eu/head/${mesaj}/128.png`)
  message.channel.sendEmbed(mesaj2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mchead', 'mch'],
  permLevel: 0
};

exports.help = {
  name: 'mchead',
  description: 'İstediğiniz minecraft kullanıcısının kafa avatarını atar.',
  usage: 'mch'
};