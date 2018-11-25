const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var emojiler1 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
	 var emojiler2 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
	 var emojiler3 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
	 var emojiler4 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
	 var emojiler5 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
	 var emojiler6 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
	 var emojiler7 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
	 var emojiler8 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
	 var emojiler9 = [
        ":green_apple:",
		":apple:",
		":pineapple:",
		":pear:",
		":tangerine:",
		":lemon:",
		":banana:",
		":watermelon:",
		":strawberry:",
		":grapes:",
		":melon:",
		":cherries:",
		":peach:",
		":tomato:",
		":eggplant:",
		":corn:"
		
    ]
    var emojiler1 = emojiler1[Math.floor(Math.random(1) * emojiler1.length)]
	var emojiler2 = emojiler2[Math.floor(Math.random(1) * emojiler2.length)]
	var emojiler3 = emojiler3[Math.floor(Math.random(1) * emojiler3.length)]
	var emojiler4 = emojiler4[Math.floor(Math.random(1) * emojiler4.length)]
	var emojiler5 = emojiler5[Math.floor(Math.random(1) * emojiler5.length)]
	var emojiler6 = emojiler6[Math.floor(Math.random(1) * emojiler6.length)]
	var emojiler7 = emojiler7[Math.floor(Math.random(1) * emojiler7.length)]
	var emojiler8 = emojiler8[Math.floor(Math.random(1) * emojiler8.length)]
	var emojiler9 = emojiler9[Math.floor(Math.random(1) * emojiler9.length)]
	const slotembed =  new Discord.RichEmbed()
	.setAuthor(message.author.username, message.author.avatarURL)
	.setFooter(`${message.author.username} tarafından kullanıldı.`)
	.setDescription(`[ :slot_machine: | **SLOTS** ] \n${emojiler1} **|** ${emojiler2} **|**  ${emojiler3} \n${emojiler4} **|** ${emojiler5} **|** ${emojiler6} **<** \n${emojiler7} **|** ${emojiler8} **|**  ${emojiler9}  \n \nNOT: Eğer en az **2** tane meyve yan yana gelirse oyunu kazanmış olursunuz.`)
	.setColor("RANDOM")
	return message.channel.sendEmbed(slotembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'slot',
  description: 'Gazinolarda oynanan slotlara eş değer...',
  usage: 'slot',
};
