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
    var bilgi = [ 
      "'Atatürk' lafını ilk kez dönemin Türk Dil Kurumu Başkanı bir konuşmasında kullanmış, Mustafa Kemal'de çok beğenerek soyadı olarak almıştı. Kendisine 'Ata' diye hitap edilmesinden hiç hoşlanmazdı.",
      "Manastır Askeri Lisesi yıllarından kalan bir alışkanlıkla hayatı boyunca en sevdiği yemek kuru fasulye ve pilav olarak kaldı. Tatlıya düşkün değildi ama canı istediğinde çok sevdiği gül reçelini tercih ederdi.",
      "Ömrü yetseydi bir dünya turuna çıkıp Türk dili ve tarihi üzerindeki çalışmalarını genişletmek en büyük hayaliydi.",
      "Binlerce kitabı vardı. Ama bunların arasında bir tanesini hayatı boyunca hatta cephede bile başucundan ayırmadı. Reşat Nuri Güntekin´in ünlü 'Çalıkuşu' romanını hep yanında taşır, her gün rast gele bir yerinden acar, birkaç sayfa okurdu.",
      "Atlardan sonra en sevdiği hayvan köpekti. 'Fox' adını verdiği köpeği, Gazi`nin yatağının ayak ucunda uyurdu. Hayvanlara düşkünlüğü o dereceydi ki bir gün misafirlerinin de görebilmesi için yeni doğmuş bir tayla annesinin Çankaya Köşkü kabul salonuna getirilmesini bile emretmişti.",
      "En sevdiği dans valsti. Müzik zevki çeşitlilik gösteriyordu. Klasik Batı müziği dışında Anadolu ezgilerini de severek dinlerdi.",
      "Gömleklerinin hepsi beyazdı. Bu gömlekler ilk yıllarda İsviçrede özel olarak dikilirken sonra yerli malı kullanma kampanyasına öncülük edebilmek için Beyoğlunda bir terziye diktirilmeye başlanmıştı.",
      "Takım elbiselerinin tasarımlarını hep kendisi çizerdi. Lacivert takım giymeyi sevmezdi.",
      "Boyu 1.74 idi. Hayatinin son dönemlerine kadar 76 olan kilosu hastalığının ilerlemeye başlamasıyla 46´ya kadar düşmüştü. 43 numara siyah rugan ayakkabı giyerdi.",
      "Özenli ve temiz bir Türkçe konuşurdu. Ancak bazı kelimeleri Rumeli şivesiyle telaffuz ederdi.",
      "Hayatında bir dönem çok önemli yer tutan Mustafa Kemalin evlenmesinden sonra hayatına trajik bir şekilde son veren Fikriye Hanımın mezarının nerede olduğu bilinmiyor",
      "Hayatının çoğunu geçirdiği savaş cephelerinden sonra Cumhurbaşkanı olarak geçirdiği yıllar ona bir tecrit yaşantısı gibi geliyor, çok sevdiği halkından ve sade bir vatandaş yaşamından uzaklaştığını düşünüyordu.",
      "Kıyafet Kanunu çerçevesinde tüm din adamlarının dini kıyafetleriyle sokağa çıkmaları yasaklanınca, Monsenyör Roncalli`ye kendi terzisi Kemal Milaslı eliyle bir koleksiyon hazırlattı.",
      "Sabah kahvaltılarıyla arası hiç hoş değildi.Yataktan kalkar kalkmaz odasındaki divanın üzerine bağdaş kurarak oturur, günün ilk kahvesini sigarasını içerdi. Bir özelliği de kendi kendine tıraş olmamasıydı.",
      "Evinde, çevresinde hatta konuk olduğu evlerde bile eğri duran eşyaları düzeltmeden rahat edemezdi.",
      "Köylünün birinin gazete kağıdına sardığı tütünü içmeye çalışırken eli yanmış, 'Alın bunu kendi içsin' diyerek Atatürk`e küfretmişti. Mahkemeye çıkarılacaktı. Atatürk olayı dinledikten sonra 'Onu mahkemeye vereceğinize doğru dürüst sigara içmesini temin edin' dedi.",
      "Hastalığının başlangıcında kendisini muayene eden Dr. Fissinger günde kaç paket sigara içtiğini sormuş, Atatürk 'sekiz' demişti. Doktor bunu günde iki pakete indirmesi gerektiğini söyleyince gülümseyerek cevap vermişti:'Ben zaten iki paket içiyorum. Bundan sonra bunu sizin izninizle yapacağım'.",
      "Bir sabah milletvekilleri ile trene binmişti. Kondüktörün milletvekillerinden bilet parası almamasına şaşırmış nedenin sormuştu. Trenin milletvekillerine bedava olduğunu öğrenince epey sinirlenmiş, 'Ne de güzel halkçılık ama' demişti.",
      "İlk mecliste bir oturum sırasında üyelerden biri laikliğin ne manaya geldiğini anlamadığını söyleyince Gazi çok sinirlenmiş ve elini kürsüye vurarak bir din bilgini olan üyeye cevap vermişti: 'Adam olmak demektir hocam, adam olmak!'",
      "Gittiği yurt gezilerinde kendisi için kurban edilen hayvanlara bakamaz böyle durumlarda sırtını döner yada kesilmelerini engellerdi.",
      "Askeri lisede öğrenmeye başladığı Fransızca´yı sonraki yıllarda geliştirdi. Zengin bir kelime bilgisi vardı. Konuşurken araya Fransızca sözcükler de eklerdi.",
      "Kumardan hoşlanmaz ama arkadaşlarıyla fasulyesine poker oynardı. Oyun sonunda kazandıklarını iade ederdi.",
      "Cephelerde düşmanla göğüs göğüse savaşmış biri olarak en ilginç özelliği savaş meydanları dışında kan görünce fenalaşmasıydı.",
      "Fransız tarihçisi Herriot Ankaraya geldiğinde Gazinin kulaklarının duyuyor olmasına şaşırmış anılarında bunu esprili bir dille anlatmıştı: 'T.C`de bir tane kulakları duyan kişi var onu da Cumhurbaşkanı yapmışlar'.",
      "Bir gün halk arasında dolaşırken çarşaflı bir kadına rastlamış, 'Hafız Hanım benim hatırım için başındaki örtüyü acar mısın?' diye sormuştu. Kadın baş örtüsünü açarak, Atatürk`ün önünde eğildi ve ellerini öptü.",
      "Sportmen kişiliği vardı. Her gün at biner, yüzmeye gider ve bilardo oynardı.",
      "Eğitim hayatı boyunca en başarılı dersi matematikti. Pozitif bilimlere ilgisi hayatı boyunca sürdü",
      "Yağcılara çok kızardı. Bir akşam sofrasında kendisine gereksiz şekilde iltifat eden Abdülhak Hamit`e müdahale etti.",
      "1937yi 1938e bağlayan son yılbaşı gecesini Dışişleri Bakanı Tevfik Rüştü Aras ile baş başa geçirmişti. O gece dolabındaki bazı elbiseleri bakana hediye etmişti.",
      "Kuşları çok severdi.Çankaya Köşkü`nde özel bir bakıcının ilgilendiği güvercinliği vardı." ]
    var atatürkfotolink = responses[Math.floor(Math.random(1) * responses.length)]
    var atatürkbilgi = bilgi[Math.floor(Math.random(1) * bilgi.length)]
    const atatürk = new Discord.RichEmbed()
    .addField('Atatürk Hakkında Bilgiler', message.author.avatarURL)
    .setDescription(`${atatürkbilgi}`)
    .setColor("RANDOM")
    .setFooter('Atatürk!', client.user.displayAvatarURL)
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
  name: 'atatürk-bilgi',
  description: 'Atatürkün bilinen ve bilinmeyen bilgilerini yollar.',
  usage: 'atatürk-bilgi',
};
