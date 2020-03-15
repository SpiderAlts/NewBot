const discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{

    return message.channel.send("De prijzen kun je zien in <#687394920943976520>");

}

module.exports.help = {
    name: "prijzen"
}