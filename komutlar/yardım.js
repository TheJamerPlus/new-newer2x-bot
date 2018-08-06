const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Komutlar")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları:**", `n!banned = Dene ve Gör! \nn!avatarım = Avatarınınızı Gösterir. \nn!herkesebendençay = Herkese Çay Alırsınız. \nn!koş = Koşarsınız.\nn!çayiç = Çay İçersiniz. \nn!çekiç = İstediğiniz Kişiye Çekiç Atarsınız. \nn!çayaşekerat = Çaya Şeker Atarsınız. \nn!yumruh-at = Yumruk Atarsınız. \nn!yaz = Bota İstediğiniz Şeyi Yazdırırsınız. \nn!sunucuresmi = BOT Sunucunun Resmini Atar. \nn!sunucubilgi = BOT Sunucu Hakkında Bilgi Verir. \nn!kullanıcıbilgim = Sizin Hakkınızda Bilgi Verir. `)
  .addField("**Yetkilisi Komutlar**", `n!ban = İstediğiniz Kişiyi Sunucudan Banlar. \nn!kick  = İstediğiniz Kişiyi Sunucudan Atar. \nn!unban = İstediğiniz Kişinin Yasağını Açar. \nn!sustur = İstediğiniz Kişiyi Susturur. \nn!oylama = Oylama Açar. \nn!duyuru = Güzel Bir Duyuru Görünümü Sağlar.`)
  .addField("**Ana Komutlar**", "h!yardım = BOT Komutlarını Atar. \nn!bilgi = BOT Kendisi Hakkında Bilgi Verir. \nn!ping = BOT Gecikme Süresini Söyler. \nn!davet = BOT Davet Linkini Atar. \nn!istatistik = BOT İstatistiklerini Atar.")
  .addField("**Yapımcı**", " **@💻 NWR2X Helado Módem 💻#3812** ")
  .setFooter('**--------------------------**')
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
