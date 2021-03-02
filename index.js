const Discord = require('discord.js');
const config = require('./config.json');
const RuntimeClientFactory = require('@voiceflow/runtime-client-js').default;

const discordClient = new Discord.Client();

const factory = new RuntimeClientFactory(config);

const START_COMMAND = '!start';

const stateStore = new Map();
let inConversation = false;

discordClient.on('message', async (message) => { 
  if (message.author.bot) return;
  if (message.content !== START_COMMAND && !inConversation) return;

  state = message.content !== START_COMMAND ? stateStore.get(message.author.username) : null;
  const runtimeClient = factory.createClient(state);

  const response = message.content === START_COMMAND ? await runtimeClient.start() : await runtimeClient.sendText(message.content);
  const traces = response.getTrace();

  traces.forEach(trace => {
    if (trace.type === 'speak') {
      message.reply(trace.payload.message);
    }
  });

  inConversation = !response.isEnding();

  stateStore.set(message.author.username, response.toJSON().state);
});

discordClient.login(config.BOT_TOKEN);
