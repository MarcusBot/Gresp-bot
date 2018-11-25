const Discord = require('discord.js');

exports.run = (client, message, args) => {
	 let blockedChars = args.join(' ').toLowerCase().
    replace(/[a-z]/g, ':regional_indicator_$&:').
    replace(/1/g, ':one:').
    replace(/2/g, ':two:').
    replace(/3/g, ':three:').
    replace(/4/g, ':four:').
    replace(/5/g, ':five:').
    replace(/6/g, ':six:').
    replace(/7/g, ':seven:').
    replace(/8/g, ':eight:').
    replace(/9/g, ':nine:').
	replace(/ü/g, ':regional_indicator_u:').
	replace(/ğ/g, ':regional_indicator_g:').
	replace(/ı/g, ':regional_indicator_i:').
	replace(/ç/g, ':regional_indicator_c:').
	replace(/ş/g, ':regional_indicator_s:').
	replace(/ü/g, ':regional_indicator_u:').
    replace(/0/g, ':zero:');
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(':no_entry: Emoji yazıyı kullanmak için ilk önce birşeyler yazman gerekiyor!');
    return message.channel.send(blockedChars).catch(e => {
    client.log.error(e);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sayemoji', "emojiyaz"],
  permLevel: 0
};

exports.help = {
  name: 'emoji-yazı',
  description: 'Emojilerle güzel bir yazı yazabilirsiniz...',
  usage: 'emoji-yazı [emoji ile yazılacak şey]'
};
