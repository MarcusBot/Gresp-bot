const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var responses = [
      "https://i.pinimg.com/originals/a6/81/4c/a6814cc8cabcb509967a8e35ddf0a56f.jpg",
      "https://i.pinimg.com/originals/7b/60/9f/7b609f6d913516d159ae7f79f319c72a.jpg",
      "https://www.memurpostasi.com/d/gallery/2168_7.jpg",
      "https://i.pinimg.com/736x/43/69/17/436917e73ceae64fbf045b100476ac8c.jpg",
      "http://i.sabah.com.tr/sb/galeri/turkiye/1127/27693_d.jpg",
      "https://www.dunyavegercekler.com/wp-content/uploads/2017/11/ataturkun-gormediginiz-arsiv-fotograflari-5a05d33bc58ad.jpg",
      "http://media.altersozluk.com/entries/7795/77952/5ab0a9eac1e0c.jpg",
      "http://www.cemalhaki.com/site/dosyalar/2018/05/Slayt881-768x576.jpg",
      "https://i.pinimg.com/originals/4b/21/5c/4b215c8e738a0ac8250ea9975b102d35.jpg",
      "http://img7.mynet.com/galeri/2016/05/18/040645788/1765739-620x886.jpg",
      "https://im0-tub-tr.yandex.net/i?id=e93f205315a5858c92ec53446d0876b1&n=13",
      "http://www.insanhaber.com/images/album/14844395-custom.jpg",
      "http://i.sabah.com.tr/sb/galeri/turkiye/1127/27638.jpg",
      "https://iaahbr.tmgrup.com.tr/8a44d2/0/0/0/0/0/0?u=https://isbh.tmgrup.com.tr/sb/album/2017/11/09/iste-ataturkun-bilinmeyen-fotograflari-1510228989860.jpg",
      "https://i.pinimg.com/originals/c2/fb/2e/c2fb2e89d249a82887267b0e8a6c84bd.jpg",
      "https://im0-tub-tr.yandex.net/i?id=6cb731a09420a4d9211f66adf3d023ea&n=13",
      "https://i.pinimg.com/originals/2a/4d/22/2a4d226596b3791b3583c055bfa139ec.jpg",
      "https://isteataturk.com/gorseller/thumb/1512244782_ataturk.jpg",
      "https://isteataturk.com/gorseller/thumb/1513623972_ataturk.JPG",
      "https://pbs.twimg.com/media/Drk_SaCWoAAhEfa.jpg",
      "http://images.beyazgazete.com/fotogaleri/2016/11/25548_ataturkun-hic-bilinmeyen-fotograflari_25174.jpg",
      "https://im0-tub-tr.yandex.net/i?id=03a851cd86f01bc7f09b9395f3e4bc11&n=13",
      "https://i.pinimg.com/736x/28/05/cd/2805cd132efa5f3c192070b0303d0797.jpg",
      "https://i.pinimg.com/736x/31/25/93/31259324fda3361868105036c0e8bace--ankara-turkey.jpg",
      "https://i.pinimg.com/736x/71/02/09/710209df466c007fbb3176e329fee978.jpg",
      "https://iasbh.tmgrup.com.tr/986b90/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/galeri/turkiye/1127/27791.jpg&mw=600",
      "http://demo.safirtema.com/webportalv2/wp-content/uploads/2014/10/iste-ataturk-un-son-bir-yili-119.jpg",
      "http://media.altersozluk.com/entries/7795/77952/5a95014538583.jpg",
      "https://iasbh.tmgrup.com.tr/ab6ac9/0/0/0/0/0/0?u=http://i.sabah.com.tr/sb/galeri/turkiye/mustafa-kemal-ataturkun-anitkabire-yolculugu-1478767239/34.jpg",
      "https://im0-tub-tr.yandex.net/i?id=ce343a920c80fce78b439d08d6f1b105&n=13"
    ]
    var atatürkfotolink = responses[Math.floor(Math.random(1) * responses.length)]
    const atatürk = new Discord.RichEmbed()
    .setDescription("")
    .setColor("RANDOM")
    .setFooter(`Atatürkün bilinen ve bilinmeyen fotoğrafları`)
    .setImage(`${atatürkfotolink}`)
	return message.channel.sendEmbed(atatürk);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atatürk',
  description: 'Atatürkün bilinen ve bilinmeyen fotoğraflarını atar.',
  usage: 'atatürk',
};
