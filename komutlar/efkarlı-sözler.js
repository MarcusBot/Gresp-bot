const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var responses = [
      "Çok pahalısın ulan mutluluk.",
      "Gönül yorgun düştüğünde, yürek dilsiz kalır.",
      "Gitsem ayrılık kalsam yalnızlık.",
      "Gönlüm deniz değil ki efkarım sahile vursun.",
      "Efkarın demir attığı liman yürektir.",
      "Bazen gözlerden yaş akmaz kalp ağlar sadece.", 
      "Yüreğiyle gelmeyen bahanesiyle gelir.",     
      "Gidecek yerin kalmadığında zoruna gider hayat.",    
      "En son utanacağın şey ağlamak olsun.",
      "Tespih gibi oldu acılarım çektikçe başa dönüyorum.",
      "Etrafım çok kalabalık ama hepsi merhabalık.",
      "Sevebiliyorum ama doğru insanı denk getiremiyorum.",
      "Söylesene bıraktığın düşü şimdi kim büyütecek?",
      "Ben yağmur yüklü bir bulutum kime çarpsam ağlarım.",
      "Dökmeye niyetim yok içimi zaten zor sığdırdım!",
      "Kabullenmek kendi mezarına toprak atmak gibidir bazen.",
      "Hiçbir harfi sensiz bir cümleye kurban etmedim.",
      "Sonra geldin güldün papatya tarlası oldu çorak topraklar.",
      "Sanki bir şeyleri unutamayacak kadar eskimiş içim!",
      "Gece uyuyamayan insanların gündüze sığmayan acıları vardır.",
      "Var bir canımın acısı içime atıp içimden atamadığım.",
      "Gittin mi büyük gideceksin ayrılık bile gurur duyacak seninle.",
      "Bazen susmak gerekiyor acı dolu hayatı anlamak için.",
      "Ucuz insanların üzerine kurulan hayaller size pahalıya patlar.",
      "Bazen doğruyu bilse bile yanlış anlamak ister insan.",
      "Biliyorum imkânsızdı ama ben mucizelere çok inanmıştım. Yazık.",
      "Seni içimde yaşatmak için neleri öldürdüm bir bilsen.",
      "Rengârenk hayallerimiz vardı ama kapkara hayatlarımız ağır bastı.",
      "Denize kıyısı var sanki yüreğimin hep serin hep rutubetli.",
      "Yüzümün hep gülüyor olması yorgun olmadığım anlamına gelmez.",
      "Beni yıpratan hayatın kahpeliği değil, insanların sahteliği.",
      "Ömrünü verecekmiş gibi hayatınıza girenler ömrünüzü alır giderler.",
      "İkimizi bir kefene saralar, bir kabirde sır olalım sevdiğim.",
      "Mutsuzluk mutluluktan daha yaygındır. Kabullenmesi zor ama böyledir.",
      "Bir gün bir yerde tekrar karşılaşırsak eğer benimle yeniden tanış.",
      "Denize ilk kez giren çocuk masumiyetiyle seviyorum seni. Boğulacakmışım gibi.",
      "Sustuğun anlar değil yutkunmak zorunda kaldığın anlar rahat bırakmaz.",
      "Özledim diyorsun mektubunda. Sadece kuru bir özledim mi yazdı yanık yüreğin.",
      "Birini ne kadar çok seversen sev hayat onu senden o kadar uzaklaştırır.",
      "Ben sadece üzgün olmaktan bıktım. Bir süreliğine başka bir şey hissetmek istiyorum.",
      "Bilemezsin kim dost kim düşman. Bazen tuttuğun eldir seni arkadan vuran.",
      "Düşme; düşünce sahili olmayan bir deniz olur dünya. Sığınacak bir liman bulamazsın.",
      "Şurama batan diyor şair. Şurama batana özlem demeselerdi bıçak derdim.",
      "İlk bakışta aşık oldun oldun adamım yoksa ikinci bakışta kimin ne mal olduğunu anlarsın.",
      "Tutacak bir el bulamazsak bizde elimizi cebimize sokar yürürüz. Sıkıntı yok.",
      "Aklıma geldiğinde hala gözleri dolan bir insanım. Sen beni çoktan unutmuşsundur diyorsun.",
      "Gecenin zifirisinde tozpembe hayallere dalmak aşkın en yalın hali olsa gerek.",
      "Bir zamanlar aklımdan çıkmayan sen şimdi geçmiş zamanda biri olarak anlattığım oldun.",
      "Bütün aşklar bir mucize olarak başlar ve çoğunlukla bir kâbus olarak sona erer.",
      "İnsan iki insanın yüzünü unutmaz; ihtiyaç anında yanında olanı zor zamanda yalnız bırakanı.",
      "Beni benden alan şarkılar yapmışlar ama seni oradan alıp buraya getireni hala yok.",
      "Parlatıcıyla aydınlanmaz gelecek fön çekince düzelmez hayat ve fondötenle kapanmaz yaralar.",
      "Dönüp dolaşıp zurnanın zırt dediği yere geliyorum. Neyse bir zırt alayım sol kulağa.",
      "Ona sor bakayım! Küstüğümü biliyor muymuş? Yoksa kendi kendime mi gelin güvey oluyormuşum!",
      "Her erkeğin göz bebeklerine gömülen bir kız vardır içinde olmayan ama efkârlanınca var olan.",
      "Ben umutlarımı boş kovanlara doldurdum. Acemidir aldığım nişanlar ben her aşkta kendim vurdum.",
      "Bakma ağır başlı dik kafalı asi sözlü olduğuma. Sol yanımda hep garip bir çocuk ağlar benim.",
      "Görünürde bir kusurumuz olmasa da birader. Kalbimizin damarları arkasında müebbet yemiş hayaller.",
      "Cesaret bir gaz pedalıdır ve korku da bir fren; hedefinize giderken ikisine de ihtiyacınız vardır.",
      "Yalnızım. Çünkü herhangi biriyle değil beklediğime değecek kişiyle devam etmeliyim bu yola. Can Yücel",
      "Bunca vefasızlıktan sonra bazılarının ederi kalmadı artık gönlümde. Kaça deseler hiçe sayarım.",
      "Olmayacak insanlarla kalıbını aşan hayaller kuruyoruz. Ama unutuyoruz. Ağaçtan maşa aptaldan paşa olmaz.",
      "Başkalarının hatalarından ders alın. İnsan bütün hataları kendi yapacak kadar uzun yaşamıyor.",
      "Yolcu denmez her gidene herkes o yolun taraftarı olmayabilir. Hiçbir sürgün gittiği yolu sevmez mesela.",
      "Hayat adanmak için değil yaşanmak içinmiş. Bunu sana adadığım hayatı mahvettiğinde anladım.",
      "Tenine dokunabilmek mi? Hâşâ! Gözüm göz menziline girsin yeter. Hadi düş düşlerime; tutmayana aşk olsun.",
      "Umut; insanın vazgeçemediği illüzyon.  Aynı anda en büyük güç ve en büyük zayıflık kaynağınız.",
      "Her gün biraz daha artan sensizliğe kafa tuttum. Ama mutlu ol seni unutamadığım yerde kendimi unuttum.",
      "Seni hala nasıl sevebildiğimi anlayamıyorlar. Uğraşmayın boşuna ben bile bilmiyorum diyorum.",
      "Tek dileğim ne biliyor musun? Gözlerimi kapamış senli hayaller kurarken gözlerimi açtığımda yanımda olman.",
      "Hayat: yaşayamadığımız belkiler yaşadığımız keşkeler ve içimizde tuttuğumuz neyselerden ibaret.",
      "Gülmek her zaman mutlu olmak için değildir. Bazen öyle gülmeler vardır ki; en büyük acıları gizlemek içindir.",
      "Ey yar! Seninle ölmeye geldim. Ateşsen yanmaya, yağmursan ıslanmaya, soğuksan donmaya geldim.",
      "Seni sevmeyene asla sabır gösterme! Çünkü sabrının adı yüzsüzlük fedakârlığın adı eziklik sevginin adı kişiliksizlik olur.",
      "Bazen doğru olanı yapmak için en çok istediklerimizden vazgeçmemiz gerekir. Hayallerimizden bile.",
      "Garibim namıma kerem diyorlar hastayım derdime verem diyorlar aslımı eller almış haram diyorlar Maraşlı Şeyhoğlu satılmışım ben.",
      "Ne gülünecek halime ağlıyorum ne de ağlanacak halime gülüyorum. Ne yaptığım belli değil beni bırakın siz devam edin.",
      "Defolu şehirlerde ihraç fazlası kadınlarsa payına düşen senden önce öpülmüş dudaklarda sana dair cümleler aramayacaksın.",
      "Yolların uzaklığı fark etmezdi seven yürek için. Bahaneler üretiyorsa gel vazgeç. Değmez üzülmeye yalan bir sevda için.",
      "Aslında söylediklerimden çok sakladıklarımda gizliyim. En iyisi anlamak için konuştuklarımdan çok sustuklarıma kulak verin."
      
    ]
    var result = responses[Math.floor(Math.random(1) * responses.length)]
    const efkar = new Discord.RichEmbed()
    .setDescription(`${result} :smoking:`)
    .setColor("RANDOM")
    .setFooter('E F K A R L A N D I N I Z', client.user.avatarURL)
	return message.channel.sendEmbed(efkar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'efkarlı-sözler',
  description: 'E F K A R L A N D I N I Z.',
  usage: 'efkarlı-sözler',
};
