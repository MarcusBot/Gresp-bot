const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var responses = [
        "Ananı varya bir sikerim anan ayakta duramaz.",
        "Sana oksijen veren ağacın kökünü sikeyim!",
        "Senin babanın ruhunu sikeyim.",
        "Ananın amına demlik koyayım",
        "Bu göt ne paspas çeker amına koyayım",
        "Suratının şeklini sikeyim senin",
        "Ananın amına yogurt sokar ayran yapar icerim.",
        "Ananın amına elma ağacı sokar , oradaki elmaları alır çocuklarıma yediririm.",
		"Kulaklarını tırnak makasıyla siktiğimin evladı",
		"Ananın amını kerpentenle siktiğimin evladı"
    ]
    var result = responses[Math.floor(Math.random(1) * responses.length)]
    return message.channel.send(result);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'söv',
  description: 'Rastgele küfürler eder, söver.',
  usage: 'söv'
};
