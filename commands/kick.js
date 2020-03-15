const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    var kickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if (!kickUser) return message.channel.send("Gebruiker is niet gevonden!");


    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Jij hebt geen permissies hiervoor!");

    if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kun jij niet kicken!");

    var kick = new discord.MessageEmbed()
            
            .setTitle("kicked")
            .setColor("#065535")
            .addField("kickned gebruiker", kickUser)
            .addField("Gekickt door", message.author)
         .setFooter("John - NewAlts", "https://bit.ly/39QKfEg");

    

      message.guild.member(kickUser).kick();

         message.channel.send(kick);

        return;

}

module.exports.help = {
    name: "kick"
}