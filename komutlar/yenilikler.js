const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(' \nSürüm: **1.0** \n \n``g!hamburger-menü`` komutu eklendi! \n``g!hamburger-<bk,mcd> <sayı>`` komutu eklendi! \n``g!tkm`` komutu eklendi! \n``g!yazı-tura`` komutu eklendi! \n``g!kek-menü`` komutu eklendi! \n \nBütün komutları görmek için g!komutlar kullanabilirsiniz.')
  .setColor("RANDOM")
  .setFooter(`${message.author.username} tarafından istendi.`)
  .setThumbnail(client.user.avatarURL)
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Botta olan yenilikleri gösterir.',
  usage: 'yenilikler'
};
