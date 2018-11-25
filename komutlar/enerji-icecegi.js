const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
    var responses = [
        "Enerji içeceği içtin! :white_check_mark:",
        "Çok fazla enerji içeceği mi içtin? Çok fazla içmemeni tavsiye ederim.",
        "Enerjin şuan tam yerinde, enerji içeceği içmene gerek yok!"
    ]
    var result = responses[Math.floor(Math.random(1) * responses.length)]
    const enerji = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`${result}`)
    .setImage('https://4.bp.blogspot.com/-_H0e74Ey344/WNLA1_BhReI/AAAAAAAAMCo/LVpWW67MdP8UfX1XMyEtxQN4LCo4wS6zQCLcB/s1600/009.JPG')
    .setColor("RANDOM")
	return message.channel.sendEmbed(enerji);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'enerji-icecegi',
  description: 'Enerji içeceği içersiniz ve enerji depolarsınız.',
  usage: 'enerji-icecegi',
};
