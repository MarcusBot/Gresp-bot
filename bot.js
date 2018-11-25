const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const haste = require('hastebin-gen');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send(':regional_indicator_a: :regional_indicator_s:')
  }
  });
  client.on('guildMemberAdd', member => {
    let guild = member.guild;
    let joinRole = guild.roles.find('name', 'Üyeler');
    member.sendMessage("Sunucuya katıldığın için teşekkürler! Botumuzun destek sunucusuna gelmek için |--> https://discord.gg/yZduSWC")
    member.addRole(joinRole);

    const channel = member.guild.channels.find('name', 'bot-test-commands');
    if (!channel) return;
    const embeds = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`📥 | ${member.user.username} sunucuya katıldı, hoşgeldin!`)
    .setTimestamp()
    message.channel.sendEmbed(embeds); 
  });
  
  client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.find('name', 'bot-test-commands');
    if (!channel) return;
    const embedsd = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`📤 | ${member.user.username} sunucudan ayrıldı, görüşmek üzere!`)
    .setTimestamp()
    message.channel.sendEmbed(embedsd); 
  });
client.on ('message', message => {
if (message.content === prefix + "sunucuemojileri") {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" \n");
  const emojiembed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription(`${message.guild.name} adlı sunucuda bulunan emojiler; \n${emojiList}`)
  .setFooter(`${message.guild.name} sunucusunda bulunan emojiler yukarıda görünmektedir.`)
  return message.channel.sendEmbed(emojiembed);
}
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'nasılsın?') {
    msg.reply('İyiyim sen?');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'sikayetci-ol') {
	  var sebepler = [
	  "1 yıl tutukladılar. 1 yıl rahatsın.",
	  "serbest bıraktılar. Bence hemen eve git ve kapıları kilitle.",
	  "para cezası verdiler. Ohh canıma da deysin.",
	  "1 ay ev hapsi verdiler. Galiba nezarethane'lerden daha iyidir?!"
	  ]
  var sebepler = sebepler[Math.floor(Math.random(1) * sebepler.length)]
    msg.reply(`:speech_left: **|** Sana saldırdığı için ${sebepler}`);
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'affet') {
	  var sebepler = [
	  "Hiçbirşey yapmadan gitti.",
	  "Geldi, senden özür diledi ve seni bir eğlence mekanına götürdü.",
	  "Sana vurduğu için özür diledi ve bir hediye verdi. :gift:"
	  
	  ]
  var sebepler = sebepler[Math.floor(Math.random(1) * sebepler.length)]
    msg.reply(`:speech_left: **|** ${sebepler}`);
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'sülaleyi-topla') {
	  var sebepler = [
	  "Senin o kaslı dayılarını görünce eve kaçtı. :joy:",
	  "O da kendi sülalesini topladı ve ortalık meydan muharebesine döndü. :scream:",
	  "Adam polisi çağırdı ve bütün sülalenizi karakola yolladı."
	  ]
  var sebepler = sebepler[Math.floor(Math.random(1) * sebepler.length)]
    msg.reply(`:speech_left: **|** ${sebepler}`);
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'tkm') {
    msg.channel.send(':no_entry: Taş kağıt makas komutunu kullanmak için herhangi bir seçeneği yazmalısınız! Kullanım: g!tkm ``taş``, ``makas``, ``kağıt``');
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'tkm taş') {
  var tascevap = [
    "Ah lanet olsun! Niye taş diyorsun ki?! Kaybettim!",
    "Hahaha, seni gidi acemi, ben kazandım!",
    ":expressionless: Berabere!"
  ]
  var tascevap = tascevap[Math.floor(Math.random(1) * tascevap.length)]
     msg.reply(tascevap);
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'tkm kağıt') {
  var kagitcevap = [
    ":thinking: Kağıt nasıl taş'ı alabiliyor hala aklım almıyor. Kaybettim!",
    ":grin: Makas, kağıdı keser canım! Kazandım!",
    ":expressionless: Berabere!"
  ]
  var kagitcevap = kagitcevap[Math.floor(Math.random(1) * kagitcevap.length)]
     msg.reply(kagitcevap);
  }
});
client.on('message', msg => {
  if (msg.content === prefix + 'tkm makas') {
  var makascevap = [
    "Taş, makası kırar. Kazandım! :tada:",
    ":grin: Kağıt makası keser, kaybettim!",
    ":expressionless: Berabere!"
  ]
  var makascevap = makascevap[Math.floor(Math.random(1) * makascevap.length)]
     msg.reply(makascevap);
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.reply('İyilik , senden?');
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamun aleyküm') {
    msg.channel.send(':regional_indicator_a: :regional_indicator_s:')
	.then(nmsg => nmsg.edit('Nasılsın iyisindir inşallah?'))
	.then(nmsg => nmsg.edit('İyi ramazanlar bu arada'))
	.then(nmsg => nmsg.edit('Oruç tutuyorsan allah kabul etsin.'))
	.then(nmsg => nmsg.edit('Hadi bakalım allaha emanet...'))
	.then(nmsg => nmsg.edit(':regional_indicator_a: :regional_indicator_s:'));
  }
});
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'selamın aleyküm') {
    msg.channel.send(':regional_indicator_a: :regional_indicator_s:')
	.then(nmsg => nmsg.edit('Nasılsın iyisindir inşallah?'))
	.then(nmsg => nmsg.edit('İyi ramazanlar bu arada'))
	.then(nmsg => nmsg.edit('Oruç tutuyorsan allah kabul etsin.'))
	.then(nmsg => nmsg.edit('Hadi bakalım allaha emanet...'))
	.then(nmsg => nmsg.edit(':regional_indicator_a: :regional_indicator_s:'));
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'kek-menü') {
    const kekmenü = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor('Kek Menü', client.user.displayAvatarURL)
    .setFooter(`${msg.author.username} tarafından istendi. | Ramazan ayında tercih edilmez.`)
    .setDescription(`${msg.author.username} merhaba! Kek menüsüne hoşgeldin! Buradan istediğin keki seçip yiyebilirsin. **Kullanım: g!kek [sayı]** \n \nÇikolatlı Kek [**1**] \nÇilekli Kek [**2**] \nBöğürtlenli Kek [**3**] \nÇikolatalı Fındıklı Kek [**4**]`)
    return msg.channel.sendEmbed(kekmenü)
	}
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'kek') {
    msg.reply(' Hangi keki yemek istiyorsan o numarayı yazıp atınız. **Kullanım: g!kek [sayı]**');
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 1') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/whopper-menu.png?v=117')
    .setAuthor('Whooper® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 2') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/rodeo-whopper-menu.png?v=117')
    .setAuthor('Rodeo Whooper® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 3') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/jalapeno-whopper-menu.png?v=117')
    .setAuthor('Jalapeno Whooper® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 4') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/double-whopper-menu.png?v=117')
    .setAuthor('Double Whooper® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 5') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/whopper-jr-menu-1.png?v=117')
    .setAuthor('Whooper Jr.® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 6') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/tavuklu-barbeku-brioche-menu-1.png?v=117')
    .setAuthor('Tavuklu Barbekü Brioche® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 7') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/etli-barbeku-brioche-menu.png?v=117')
    .setAuthor('Etli Barbekü Brioche® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 8') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/kofteburger-menu.png?v=117')
    .setAuthor('Köfteburger® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 9') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/double-kofteburger-menu.png?v=117')
    .setAuthor('Double Köfteburger® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 10') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/texas-smokehouse-burger-menu.png?v=117')
    .setAuthor('Texas Smokehouse Burger® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-bk 11') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.burgerking.com.tr/cmsfiles/products/double-texas-smokehouse-burger-menu.png?v=117')
    .setAuthor('Double-Texas Smokehouse Burger® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 1') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/ramazan-menusu_636620904131038016.png')
    .setAuthor('Ramazan Menüsü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 10') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/634430503981059091.png')
    .setAuthor('Double Cheeseburger Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 9') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/maxburger-menu_636086934660488015.png')
    .setAuthor('MaxBurger Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 8') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/634430494194243091.png')
    .setAuthor('McRoyal® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 7') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/634430420621991091.png')
    .setAuthor('Big Mac® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 6') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/gamer-menu_636307813587865000.png')
    .setAuthor('Gamer Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 5') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/daba-daba-burger-menu.png')
    .setAuthor('Daba Daba Burger Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 4') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/big-mac-menu_636445527869733750.png')
    .setAuthor('Big Maç Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 3') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/2-mcchicken-menu.png')
    .setAuthor('2 McChicken® Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'hamburger-mcd 2') {
    const hamburger = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://www.mcdonalds.com.tr/CMSFiles/Product/BigImage/ikili-mekonomik-menu_636625939867133905.png')
    .setAuthor('İkili Mekonomik Menü', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(hamburger)
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'kek 1') {
    const cikolatali = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://im0-tub-tr.yandex.net/i?id=f5ce28c664d70ff35c6c2508409af56e&n=13')
    .setAuthor('Çikolatalı Kek', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(cikolatali);
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'kek 3') {
    const bögürtlenli = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('http://i2.haber7.net/haber/haber7/photos/2016/42/bogurtlenli_kek_tarifi_1477221648_1734.jpg')
    .setAuthor('Böğürtlenli Kek', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(bögürtlenli);
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'kek 2') {
    const cilekli = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('https://hamarat.org/images/Cilekli-Kek-55.jpg')
    .setAuthor('Çilekli Kek', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(cilekli);
  }
});
client.on('message', msg => {
	if (msg.content.toLowerCase() === prefix + 'kek 4') {
    const cikolatafindik = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`${msg.author.username} tarafından istendi.`)
    .setImage('http://3.bp.blogspot.com/-UbBt4RUE_D8/UdlkjFtaGCI/AAAAAAAAAyc/E1ac6eylJnk/w1200-h630-p-k-no-nu/IMG_9758.JPG')
    .setAuthor('Çikolatalı Fındıklı Kek', client.user.displayAvatarURL)
    return msg.channel.sendEmbed(cikolatafindik);
  }
});
const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on("message", message => {
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + "eval")) {
    if(message.author.id !== "439820061939597312") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});
client.on('guildCreate', async guild => {
        const girismesaj = [
          '**Gresp** adlı botu sunucunuza eklediğiniz için teşekkürler!',
          'Botun komutlarını görmek için g!komutlar yazabilirsiniz!'	  
		  ]
        guild.owner.send(girismesaj)

        client.log(`data`, `${guild.name} sunucusuna katıldım!`);
    });
client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud: :cloud: :cloud: :cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit(':no_smoking: Sigara bitti! Lütfen çok fazla sigara içmeyin. Çünkü sigara sağlığa zararlıdır!'));
}
});
client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "saat") {
msg.channel.send(`Türkiye saatine göre şuan saat; ${moment().format('HH:mm:ss')}`);
}
});
client.on("message", message => {
    const dmchannel = client.channels.find("name", "bot-dm");
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: "RANDOM",
                title: ``,
                description: `**${message.author.username} #${message.author.discriminator}** \n${message.content}`
              }})
    }
    if (message.channel.bot) return;
});
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(ayarlar.prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'topla') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p+c);
    message.channel.sendMessage(`:heavy_plus_sign: Sonuç: ${total}`);
  }
  if (command === 'çıkar') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p-c);
    message.channel.sendMessage(`:heavy_minus_sign: Sonuç: ${total}`);
  }
  if (command === 'çarp') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p*c);
    message.channel.sendMessage(`:heavy_multiplication_x: Sonuç: ${total}`);
  }
  if (command === 'böl') {
    let numArray = args.map(n=> parseInt(n));
    let total = numArray.reduce( (p, c) => p/c);
    message.channel.sendMessage(`:heavy_division_sign: Sonuç: ${total}`);
  }
});
client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);
