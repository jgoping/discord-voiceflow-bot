const Discord = require('discord.js');
const config = require('./config.json');
const RuntimeClientFactory = require('@voiceflow/runtime-client-js').default;

const discordClient = new Discord.Client();

const factory = new RuntimeClientFactory(config);
const runtimeClient = factory.createClient();

const START_COMMAND = '!start';

let inConversation = false;

discordClient.on('message', async (message) => { 
  if (message.author.bot) return;
  if (message.content !== START_COMMAND && !inConversation) return;

  const response = message.content === START_COMMAND ? await runtimeClient.start() : await runtimeClient.sendText(message.content);
  const traces = response.getTrace();

  traces.forEach(trace => {
    if (trace.payload?.message && trace.type === 'speak') {
      message.reply(trace.payload.message);
    }
  });

  inConversation = !response.isEnding();
});

discordClient.login(config.BOT_TOKEN);
