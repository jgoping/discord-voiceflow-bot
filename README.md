# discord-voiceflow-bot

This project showcases how the Voiceflow runtime client SDK can be integrated with Discord bots powered by node.js.

## Getting Started

### Code set-up
- Ensure you have `nodejs` and `npm`/`yarn` installed
- Fork/Clone this repository
- run `yarn` or `npm install` to install the `@voiceflow/runtime-client-js` and `discord.js` dependencies

### Voiceflow Setup
See [here](https://github.com/voiceflow/runtime-client-js/blob/master/docs/setting-up-vf-app.md) for instructions on how to set-up a Voiceflow project, get an API key, and locate the version ID of the project.

Open `config.json` and put the API key and version ID there. This will give authorization to the Voiceflow SDK and tell it which project to make calls to.

### Discord Setup

To make a bot in discord, you will need to go to the [Discord Developer Portal](https://discord.com/developers/applications/). Click on "New Application" in the top-right corner, give the application a name, and create the application.

![Discord Developer Portal](https://user-images.githubusercontent.com/32006038/110726071-c5725e00-81e6-11eb-9c5f-3c2c1fb4ee10.png)

Click the bot tab on the left-side, then click `Add Bot` to create a bot.

![Bot Page](https://user-images.githubusercontent.com/32006038/110726441-619c6500-81e7-11eb-9da9-4c7450c43f51.png)

Get the token for the bot and paste it into the project's `config.json`.

![Getting the Bot Token](https://user-images.githubusercontent.com/32006038/110726454-652fec00-81e7-11eb-868e-9488c3b28c46.png)

Go to the OAuth2 tab now, select the `bot` scope, and give it the permissions `Send Messages` and `Read Message History`. Copy the generated URL into your browser and add the bot to a server.

### Running the bot
- Start the bot with `node index.js`. You will see the bot go online in your server. Type `!start` to it to begin the conversation.

![Bot in Action](https://user-images.githubusercontent.com/32006038/110727012-76c5c380-81e8-11eb-9f38-b81305746ec3.png)