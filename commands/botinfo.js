const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

                var botIcon = bot.user.displayAvatarURL;

                var botEmbed = new discord.MessageEmbed()
                        .setDescription("Bot Informatie")
                        .setColor("#065535")
                        .addField("Bot Naam", "NewAltsBot")
                        .setFooter("John - NewAlts", "https://bit.ly/39QKfEg");

                return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}