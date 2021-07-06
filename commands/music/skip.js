const { replies } = require('../../config.json');

module.exports = {
	name: 'skip',
	description: 'Skips the playing song.',
	execute: async ({ client, message }) => {
		if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(replies.sameVC);

		const queue = await client.distube.getQueue(message);

		if(queue) {
			client.distube.skip(message);

			message.channel.send('▶ **The song has skipped.**');
		}
		else if (!queue) {
			return;
		}
	},
};