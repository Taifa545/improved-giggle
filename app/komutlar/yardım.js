const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("Yardım Menüsü")
.addField(":robot: .otorol-ayarla","Otorol Ayarlar",true)
.addField(":robot: .otorol-kapat","Oto Rolü Kapatır",true)
.addField(":robot: .otorol-msj","Otorol Mesajı Yolllar",true)
.addField(":robot: .otorol-yardım","Otorol Yardım Menüsünü Açar",true)
.addField(":robot: .oto-tag","Oto Tag Ayarlar",true)
.addField(":robot: .duyuru-kanal-ayarla","Duyuru Kanalını Ayarlar",true)
.addField(":robot: .ban","Kullanıcıyı banlar.",true)
.addField(":robot: .banları kaldır","Tüm banları kaldırır.",true)
.addField(":robot: .duyuru","Duyuru Yaparsın.",true)
.addField(":robot: .düello","Düello Atarsın.",true)
.addField(":robot: .herkese-rol-ver",".",true)
.addField(":robot: .istatistik","İstatistikleri Gösterir.",true)
.addField(":robot: .erkek","Erkek Üyeyi Kayıt Eder.",true)
.addField(":robot: .kız","Kız Üyeyi Kayıt Eder.",true)
.addField(":robot: .log-ayarla","Log Kanalı Ayarlar.",true)
.addField(":robot: .oylama-kanal","Oylama Kanalı Ayarlar.",true)
.addField(":robot: .oylama","Oylama Yapar.",true)
.addField(":robot: .rol-ver","TBelirlediğiniz Üyeye Belirlediğiniz Rolü Verir.",true)
.addField(":robot: .sil","Belirli Mesajları Siler.",true)
.addField(":robot: .yasaklar","Sunucudan Banlanan Üyeleri Gösterir.",true)
.addField(":robot: .üyedurum","Üye Durumunu Gösterir.",true)
.addField(":robot: .yardım","Yardım Menüsünü Açar.",true)


message.channel.sendEmbed(lembed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
  };