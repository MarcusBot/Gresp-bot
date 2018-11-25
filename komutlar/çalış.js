const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var isler = [
	"Tamirci",
	"Berber",
	"Garson",
	"Araba yıkamacı",
	"Boyacı",
	"Taksici"
    ]
	
	var patronlar = [
	"Ahmet",
	"Niyazi",
	"Ali",
	"Uras",
	"Emre",
	"Deniz",
	"Samet",
	"İlyas",
	"Ömer",
	"Cem"
	
	]
	
	var maas = [
	"10",
	"15",
	"25",
	"20",
	"35",
	"40",
	"48",
	"51",
	"60",
	"75",
	"55",
	"47",
	"120",
	"30"
   ]
		var pararesmi = [
		"https://media2.giphy.com/media/VTxmwaCEwSlZm/giphy.gif"
		]
		var patron = patronlar[Math.floor(Math.random() * patronlar.length)]
		var isler = isler[Math.floor(Math.random() * isler.length)]
		var maas = maas[Math.floor(Math.random() * maas.length)]
		var pararesmi = pararesmi[Math.floor(Math.random() * pararesmi.length)] 
		
		message.channel.send("İş talebinizi aldım. Size iş aramak için hazırlanıyorum...")
	.then(nmsg => nmsg.edit('İşini buldum! :tada:'))
	.then(message.delete());
		const calisembed = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setImage(pararesmi)
		.setDescription(`${message.author.username}, ${isler} olarak çalıştı ve ${maas} TL maas aldı.`)
		.setFooter(`${message.author.username} bir yerde çalıştı.`)
		.setColor("RANDOM")
		return message.channel.sendEmbed(calisembed);
    };


	exports.conf = {
	  enabled: true,
	  guildOnly: false,
	  aliases: [],
	  permLevel: 0
	};

	exports.help = {
	  name: 'çalış',
	  description: 'Rastgele bir işte çalışır.',
	  usage: 'çalış'
	};
