// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'bing') {
		await interaction.reply('Bong!');
	} else if (commandName === 'sweaters') {
		await interaction.reply('sweaters');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});




// Login to Discord with your client's token
client.login(token);

