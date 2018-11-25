const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(':no_entry: 8ball soruları "evet" ve "hayır" cevaplarına cevap verecek için tasarlandığı için "Evet,hayır"`lı sorular sorun...');
    var responses = [
        "Evet",
        "Hayır",
        "Belki"
    ]
    var result = responses[Math.floor(Math.random(1) * responses.length)]
	return message.channel.send(`:speech_balloon: **|** ${result}`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Sorularınıza rastgele cevaplar verir.',
  usage: '8ball [Soru]',
};
