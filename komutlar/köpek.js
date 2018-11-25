const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
    var responses = [
    "https://media.giphy.com/media/4NkqE0peQFAbSU0vhT/giphy.gif",
	"https://media.giphy.com/media/51Uiuy5QBZNkoF3b2Z/giphy.gif",
	"https://media.giphy.com/media/RQSuZfuylVNAY/giphy.gif",
	"https://media.giphy.com/media/DvyLQztQwmyAM/giphy.gif",
	"https://media.giphy.com/media/fpXxIjftmkk9y/giphy.gif",
	"https://media.giphy.com/media/qpP7VsPNeBtpC/giphy.gif",
	"https://media.giphy.com/media/Pk20jMIe44bHa/giphy.gif",
	"https://media.giphy.com/media/qpP7VsPNeBtpC/giphy.gif",
	"https://media.giphy.com/media/xThtadSLoInlcD1UmA/giphy.gif",
	"https://media.giphy.com/media/oDLDbBgf0dkis/giphy.gif",
	"https://media.giphy.com/media/f4HpCDvF84oh2/giphy.gif",
	"https://media.giphy.com/media/1iTItUOuJLsbev28/giphy.gif",
	"https://media.giphy.com/media/oebOcslmnSXMQ/giphy.gif",
	"https://media.giphy.com/media/1xOOQSMJ9X4UykElSk/giphy.gif",
	"https://media.giphy.com/media/121Ve4tjzKoQda/giphy.gif",
	"https://media.giphy.com/media/NGALQBUgvmVTa/giphy.gif",
	"https://media.giphy.com/media/8ResycO3Hq0gw/giphy.gif",
	"https://media.giphy.com/media/DNkYWBa2GfCPC/giphy.gif",
	"https://media.giphy.com/media/fSH81w53BWMIU/giphy.gif",
	"https://media.giphy.com/media/YO9XgJrhZXFSM/giphy.gif"
	] 
    var köpek = responses[Math.floor(Math.random() * responses.length)]
    const embed = new Discord.RichEmbed()
	.setAuthor(message.author.username, message.author.avatarURL)
	.setDescription('')
	.setImage(köpek)
	.setFooter(`${message.author.username} tarafından istendi.`)
	.setColor("RANDOM")
	return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'köpek',
  description: 'Köpek resimleri atar.',
  usage: 'köpek',
};
