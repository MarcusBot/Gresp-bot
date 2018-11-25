const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setDescription('')
  .setColor("RANDOM")
  .addField("**Yemek Komutları**", '\n' + prefix + 'kahvaltı | Güzel bir kahvaltı yaparsınız. \n' + prefix + 'kahveiste | Bottan kahve istersiniz. \n' + prefix + 'kadehkaldır | Kadeh kaldırırsınız. \n' + prefix + 'hamburger | Hamburger yersiniz. \n' + prefix + 'hamburgerinesaldır | Etiketlediğiniz kişinin hamburgerine saldırırsınız. \n' + prefix + 'kek-menü | Kekleri gösteren bir menü... \n' + prefix + 'kek | İstediğiniz sayıyı yazarak kek yiyebilirsiniz.')
  .setFooter('Gresp | Yemek komutlarını ramazanda denemeniz uygun bulunmaz.', client.user.displayAvatarURL)
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
  aliases: ['food'],
  permLevel: 0
};

exports.help = {
  name: 'yemek',
  description: 'Botun yemek komutlarını gösterir.',
  usage: 'yemek'
};
