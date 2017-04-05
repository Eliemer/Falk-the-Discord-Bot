var Discord = require("discord.js");
var bot = new Discord.Client();
//var ytdl = require("ytdl-core");
//var youtube = require("./youtube.js");
//var ytAudioQueue = [];
//var dispatcher = null;

var token = "Mjc0MjY2NjgwMzkyMjg2MjE4.C8ahQQ.V7q3QHTdUcfSMVgj90UD1_gRW5Y";
var prefix = "falk.";
var idle = "with his prey";
var ready = true;
var newbRole = "249282809515081729";
var afk = "alone, afk";

// Confirmation of bot start
bot.on("ready", () => {
	console.log("Bot is running");
	bot.user.setGame(idle);
});

// show whether the bot is reconnecting
bot.on("reconnecting", () => {
	console.log("Reconnecting...");
	bot.user.setGame("Reconnecting");
});

bot.on("message", msg => {
    var msgParts = msg.content.split(" ");
    var command = msgParts[0].toLowerCase();// first word of message
    var parameters = msgParts.splice(1, msgParts.length);

    console.log("command: " + command);
    console.log("parameters: " + parameters);

    switch (command) {
        case prefix + "help":
            console.log(msg.author.username + " just asked for help");
            msg.channel.send("`Falk's Help Menu`\n\n" +
            "All commands have the form of " + prefix + "[command]\n\n" +
            "`myavatar`: Display your current Discord Avatar\n" +
            "`ping`: Display Falk's latency\n" +
            "`restart`: Restart Falk (for host only)\n" +
            "`die`: Shutdown Falk (for host only)\n").catch(console.error);
            break;
        case prefix + "myavatar":
            console.log(msg.author.username + " requested their avatar");
            bot.user.setGame("with an avatar");
            msg.reply("Here is you avatar - " + msg.author.avatarURL).catch(console.error);
            bot.user.setGame(idle);
            break;
        case "buttsax":
            console.log(msg.author.username + " initiated the call of the buttsax");
            msg.channel.send(":peach::saxophone::notes::notes::notes::notes::notes::notes:");
            break;
        case prefix + "ping":
            console.log("pong");
            msg.reply("BORK! (" + bot.ping + "ms)").catch(console.error);
            break;
        case prefix + "die":
            console.log("destroy");
            bot.user.setGame("with fire");
            msg.channel.send(":dog::wave:");
            bot.destroy().catch(console.error);
            break;
        case prefix + "restart":
            bot.user.setGame("with resurrection");
            console.log("restart");
            msg.channel.send(":wave:");
            bot.destroy().catch(console.error);
            bot.login(token).catch(console.error);
            break;
    }//end of switch command

    if(msg.isMentioned(bot.user.id)){
        console.log(msg.author.username + " just mentioned Falk");
        msg.reply("**BORK!! BORK!! DO NOT MENTION THE WOLF!! BORK!! BORK!!**");
    }
});//end of msg listener

// login to bot account
console.log("Connecting...");
bot.login(token).catch(console.error);
