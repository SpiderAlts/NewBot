const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if (!banUser) return message.channel.send("Gebruiker is niet gevonden!");


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij hebt geen permissies hiervoor!");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kun jij niet banen!");

    var ban = new discord.MessageEmbed()
            
            .setTitle("Banned")
            .setColor("#065535")
            .addField("Banned gebruiker", banUser)
            .addField("Gebant door", message.author)
         .setFooter("John - NewAlts", "https://bit.ly/39QKfEg");

    

      message.guild.member(banUser).ban();

         message.channel.send(ban);

        return;

}

module.exports.help = {
    name: "ban"
}