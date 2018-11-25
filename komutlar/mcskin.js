 const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setDescription('Özel mesajlarda komut kullanımı kapatılmıştır.')
  return message.author.sendEmbed(ozelmesajuyari); }
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send(':no_entry: Lütfen istediğiniz bir minecraft kullanıcısının adını yazınız.');
    const mesaj2 = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${mesaj} kullanıcısının skini`)
    .setImage(`https://visage.surgeplay.com/full/404/${mesaj}.png`)
  message.channel.sendEmbed(mesaj2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcskin', 'mcs'],
  permLevel: 0
};

exports.help = {
  name: 'mcskin',
  description: 'İstediğiniz minecraft kullanıcısının skinini gösterir.',
  usage: 'mcs'
};