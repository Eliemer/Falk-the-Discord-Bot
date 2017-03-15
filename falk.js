var Discord = require("discord.js");
var bot = new Discord.Client();
var token = "MjcyMDE0NDEwNTIyOTUxNjgw.C5lo4w.SpJBWNsC2JCJYjR19AHBLUQz9Sc";
var prefix = "falk.";
var idle = "with his prey";

// Confirmation of bot start
bot.on("ready", () => {
	console.log("Bot is running");
	bot.user.setGame(idle);
});

// basic response to Falk being mentioned
bot.on("message", msg => {
	if(msg.isMentioned(bot.user.id)) {
		console.log(msg.author.username + " just mentioned Falk");
		msg.reply("**BORK!! BORK!! DO NOT MENTION THE WOLF!! BORK!! BORK!!**");
	}
});

// autorole plus console message
bot.on("guildMemberAdd", member => {
	newMember = true;
	bot.on("message", msg => { 
		while (newMember) {
          	console.log(member.user.username + "(" + member.user.id + ")" + " has joined");
			msg.channel.send(member.user.username + " has joined the server");
			newMember = false;
		}
        console.log ("New user: " + member.user.id + " has been processed");
	})
});

// display your avatar
bot.on("message", msg => {
	if (msg.content === prefix + "myavatar") {
		bot.user.setGame("with an avatar");
		console.log(msg.author.username + " requested their avatar");
		msg.reply("Here is your avatar - " + msg.author.avatarURL).catch(console.error);
		bot.user.setGame(idle);
	}
});

// leave server console message
bot.on("guildMemberRemove", member => {
	console.log(member.user.username + "(" + member.user.id + ")" + " left the server");
             msg.channel.send(member.user.username + " has left the server").catch(console.error);
});

// ping pong
bot.on("message", msg => {
	if (msg.content === prefix + "ping") {
		console.log("pong");
		msg.reply("BORK! (" + bot.ping + "ms)").catch(console.error);
	}
});

// bot destroy command
bot.on("message", msg => {
	if (msg.content === prefix + "die") {
		bot.user.setGame("with fire");
		console.log("destroy");
		msg.channel.send(":dog::wave:");
		bot.destroy().catch(console.error);
	}
});

// bot restart
bot.on("message", msg => {
	if (msg.content === prefix + "restart") {
		bot.user.setGame("with resurrection");
		console.log("restart");
		msg.channel.send(":wave:");
		bot.destroy().catch(console.error);
		bot.login(token).catch(console.error);
	}
});

// login to bot account
console.log("Connecting...");
bot.login(token).catch(console.error);