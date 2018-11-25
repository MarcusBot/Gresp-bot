const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var responses = [
        "Adamın biri varmış , 2'nci dönem düzeltmiş.",
        "-Sana Kaya’nin selami var.. \n+Hangi Kaya’nin? \n-Sana kayanin…",
        "-En hizli sayi hangisidir? \n+10 \n-Niye? \n+Onun arabasi var…",
        "Bagirsak kurtlari bagirsakta yasarlar ,bagirmasak'ta",
        "Allah bana “Yürü Ya Kulum” dedi. Arabayi sattim, basladim yürümeye..",
        "Volkswagen Passat, sahsi oynama",
        "-Tomi’nin annesi kimdir? \n+Anatomi",
        "Bol keseden atmis, dar keseden esek.",
        "-Yıkanan tona ne denir? \n+Washington",
        "**Erkek** = Hani biz boy abdesti alıyoz ya…. \n**Kız** = eeeeee \n**Erkek** = Sizde girl abdesti mi alıyonuz? uahuahuh",
        "Basamakta durmayın otomatik kapı çarpar,böler,toplar,karekökünü alır.",
        "Almanlar ben anlamam.",
        "Fransızlar ben sızlamam.",
        "İspanyanlar ben yanlamam.",
        "Rock yapmayan kişiye ne denir \n-Yaprock.",
        "Sinemada on dakika ara dedi, aradım aradım açmadı.",
        "Yeni yapılmış resimlere ne denir? \n-‘nev’resim.",
        "Tebrikler kazandınız, şimdi tencere oldunuz!",
        "-Acıkan varmı ya? \n+Yok bizde tatlı kan var.",
        "-Bugünlerde gözüm çok KIZarıyor.",
        "En ihtiyaç duyulan arı? \n-başARI.",
        "Bizim CD sürücümüz ehliyeti nerden almış acaba ?",
		"Savaş oyununda arkadaşını iyileştirmeyi beceremeyen ekibe ne denir? \nBecere-medic",
		"Alman kurdu, fransız bozdu...",
		"Kirli çamaşırlarımı ortaya dökme vakti... \nDökme amk heryer kirlenecek."
    ]
    var result = responses[Math.floor(Math.random(1) * responses.length)]
	console.log("+espriyap komutu " + message.author.username + message.author.tag + " tarafından kullanıldı!")
    const embedespriyap = new Discord.RichEmbed()
	.setAuthor(message.author.username, message.author.avatarURL)
    .addField(`**Espri vakti!**`, `__${result}__`)
    .setColor("RANDOM")
	.setFooter(`${message.author.username} tarafından istendi. Bu esprilerde geçen küfürleri lütfen üstünüze alınmayınız. Bunlar komiklik için yapılmış küfürlerdir.`)
	return message.channel.sendEmbed(embedespriyap);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'espriyap',
  description: 'Espri yapar.',
  usage: 'espriyap'
};
