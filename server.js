require('dotenv').config("C:\Users\ramio\Documents\BaaaatBot\.env");
var lol = ["batchest","bat","chills","wowzers"];
const tmi = require('tmi.js');
console.log(process.env.TWITCH_BOT_USERNAME);
const client = new tmi.Client({
    options: { debug: true }, 
    connection:{
        reconnect: true
    },
	channels: ['baaaatbot','automak'],
    identity: {
		username: process.env.TWITCH_BOT_USERNAME,
		password: process.env.TWITCH_OAUTH_TOKEN

	},
});
let message=[,,,,];

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
  let x=message.toLowerCase();
  let words=x.split(" ");
    //if(lol.indexOf(x) > -1 ) {
      console.log(words);
     if(words.includes('discord')){ 
		client.say(channel, `@${tags.username}  discord:adress`);
    return;
    }
    else if(message.toLowerCase() === 'trolling') {
		client.say(channel, `@${tags.username}, :tf:`);
    }
	console.log(`${tags['display-name']}: ${message}`);
});