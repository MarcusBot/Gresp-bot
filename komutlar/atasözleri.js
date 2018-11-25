const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var responses = [
    "**Atasözü** Abanın kadri yağmurda bilinir. \n**Anlamı** Her şeyin bir değeri vardır. Bir şeyin gerçek değeri (kadri) ise, ona gerçekten ihtiyaç duyulduğu zaman ortaya çıkar.",
    "**Atasözü** Abdal (derviş) tekkede, hacı Mekke`de bulunur. \n**Anlamı** Hemen herkesin ilgi duyduğu bir alanı, kendine özgü bir işi vardır. İlgi duyduğu alan ya da iş neredeyse kişi de orada bulunur.",
    "**Atasözü** Abdala(dervişe) `kar yağıyor` demişler, `titremeye hazırım` demiş. \n**Anlamı** Yoksulluk ve sıkıntı içinde yaşayıp eziyet çekmekte olan kimseler, karşılaşacakları zor şartlardan endişe duymazlar. Çünkü onlar bu şekilde yaşamaya alışıktırlar.",
    "**Atasözü** Acele bir ağaçtır, meyvesi pişmanlık. \n**Anlamı** Telâşla, sabırsızca ve ivedilikle yapılan işler genellikle kötü sonuçlar doğurur; kişiyi pişmanlığın içine iter.",
    "**Atasözü** Acele ile menzil alınmaz. \n**Anlamı** Telâşlanıp ivmekle, sabırsız davranmakla daha çabuk sonuç alacağımız, başarı kazanacağımız sanılmamalıdır. Bilinmelidir ki her işin bir süresi vardır.",
    "**Atasözü** Acele işe şeytan karışır. \n**Anlamı** Düşünüp taşınmadan, çabuk davranılarak yapılan işten iyi sonuç beklenmemelidir; o iş ya yanlış ya da bozuk olur.",
    "**Atasözü** Acemi katır kapı önünde yük indirir. \n**Anlamı** Bir işin yabancısı olan, bir işe alışmamış, beceriksiz ya da anlayışsız kişi, kendisinden beklenen işi eksik yapar ve istenildiği gibi yerine getiremez; daha başlangıç anında veya en önemli yerinde işi bırakıverir.",
    "**Atasözü** Acıkan doymam (sanır), susayan kanmam sanır. \n**Anlamı** Uzun süre bir şeyin yokluğunu çekip ona ihtiyaç duyan kimse, o şeyden ne kadar çok elde ederse etsin tatmin olmaz; kendisine yetmeyeceği duygusu içinde bulunur.",
    "**Atasözü** Acıkmış kudurmuştan beterdir. \n**Anlamı** Bir şeyden uzun süre yoksun kalan kimse, onu gördüğü anda ele geçirmek ister; kendinden geçercesine ona saldırır, sanki kudurmuş gibidir, gözü hiçbir şeyi görmez, tek düşündüğü uzun süre yokluğunu çektiği o nesnedir.",
    "**Atasözü** Acındırırsan arsız olur, acıktırırsan hırsız olur. \n**Anlamı** Bir kimsenin acınmasına yol açar, başkalarını ona merhamete getirirseniz, o kimse yerli yersiz yardım dilemeye başlar ve gittikçe arsızlaşır; bunun yanında kimilerinin hakkını kısar, emeklerinin karşılığını vermez ve onları aç-yoksul bırakırsanız, onlar da hırsızlık yapmaya başlarlar.",
    "**Atasözü** Acı patlıcanı kırağı çalmaz. \n**Anlamı** Kötü durumda olan bir kimseyi, ortaya çıkacak yeni kötü durumlar etkilemez; pek çok zorluğa katlanabilir; çünkü o, böylesi kötü durumlara alışmıştır. Ayrıca, işe yaramayacak hâle gelmiş kimseler de, tutar bir yanları olmadığı için felâketlerden çekinmezler.",
    "**Atasözü** Acı (kötü) söz insanı (adamı) dininden (çıkarır), tatlı söz (dil) yılanı deliğinden (ininden) çıkarır. \n**Anlamı** Onur kırıcı, sert, kötü sözler insanı öfkelendirir; sabrını taşırır, çileden çıkarır, hoş olmayan davranışlara sürükler. Bunun aksine yumuşak, tatlı, hoş sözler de öfkeli, geçimsiz, saldırgan insanları yatıştırabilir; zarar vermelerinin önüne geçip onları doğru yola sokabilir.",
    "**Atasözü** Aç aman bilmez, çocuk zaman bilmez. \n**Anlamı** Aç, yemek yeme ihtiyacı olan, yemesi gereken kimsedir. Bu insanın düşüncesi de karnını doyurmaktır. Onun bu isteği kimi özürlerle giderilip geçiştirilemez, böyle yapılmak istenirse kimi anlamsız ve aşırı davranışlara kaymasına neden olunur. Çocuklar da bir şey istediler mi hemen onun yerine getirilmesini isterler, beklemek nedir bilmezler.",
    "**Atasözü** Aç (arık) at yol almaz, aç (arık) it av almaz. \n**Anlamı** İş gördürülen kimselerden verim umuluyorsa onlar aç, yoksul ve zaruret içinde bırakılmamalı, her yönden tatmin edilmelidirler.",
	"**Atasözü** Aç ayı oynamaz. \n**Anlamı** Kendisinden iş beklenilen kimseden emeğinin karşılığı esirgenmemelidir; insan ya da hayvan olsun, çalışan mutlaka doyurulmalıdır.",
	"**Atasözü** Aç bırakma hırsız edersin, çok söyleme arsız (yüzsüz) edersin. \n**Anlamı** Yönetiminde bulunan, gözetiminde olan kimseleri maddî ve manevî yönden tatmin etmelisin. İnsanları bu yönlerden sıkıntıya düşürür, emeklerinin karşılığını vermez, kötü muameleye maruz bırakırsan yanlış yola saparlar; söz dinlemez olurlar, arsızlaşırlar.",
	"**Atasözü** Atılan ok geri dönmez. \n**Anlamı** Kimi zaman iyi düşünüp taşınmadan, olacakları hesaplamadan bazı eylemlere girişir ve sonuçta pişman olur insan. O anda ilk durumuna dönmek ister ama bu mümkün değildir. Çünkü olan olmuş, iş işten geçmiştir çoktan.",
	"**Atasözü** Ateş olmayan yerden duman çıkmaz \n**Anlamı** Bir olay ya da durumun varlığı, gerçekten ortada olup olmadığı, belirtisinin görülmesiyle anlaşılacak bir şeydir. Eğer meydanda bir belirti varsa, olay veya durum da var demektir.",
	"**Atasözü** Ava giden avlanır. \n**Anlamı** Bir çıkar sağlamak için birilerine tuzak kuran, onları aldatan, onlara zarar vermeye çalışan kimse, yapmaya çalıştığı kötülüğe kendisi düşer; zarara uğrar.",
	"**Atasözü** Av avlayanın, kemer bağlayanın. \n**Anlamı** Bir uğraş vererek bir şeyi ele geçiren kimse, onu hak eder; o, onundur. Doğrusu ve yakışık alanı da budur. Aksini düşünmek yanlıştır. Bunun yanında, bir şey, onu kullanmasını becerip faydalanmasını bilenindir."
    ]
    var result = responses[Math.floor(Math.random(1) * responses.length)]
	const embed = new Discord.RichEmbed()
	.setAuthor(message.author.username, message.author.avatarURL)
	.setDescription(`__Atasözü ve Anlamı__ \n${result}`)
	.setFooter(`${message.author.username} tarafından istendi.`)
	.setColor("RANDOM")
    return message.channel.send(embed)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atasözleri',
  description: 'Atasözlerini, anlamları ile söyler.',
  usage: 'atasözleri'
};
