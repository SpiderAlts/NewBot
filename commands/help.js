const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var botLogo = bot.user.displayAvatarURL;

                var botEmbed2 = new discord.MessageEmbed()
                        .setTitle("Help - NewAlts")
                        .setColor("#065535")
                        .setThumbnail("https://bit.ly/39QKfEg")
                        .addFields(
                                { name: '!botinfo', value: 'Zie informatie over onze bot!' },
                                { name: '!ban', value: 'Verban een stout joch!', },
                                { name: '!kick', value: 'Kick een stout joch!', },
                                { name: '!help', value: 'Zie alle hulp commands', },
                        )
                        .setFooter("John - NewAlts", "https://bit.ly/39QKfEg");


                return message.channel.send(botEmbed2);

}

module.exports.help = {
    name: "help"
}