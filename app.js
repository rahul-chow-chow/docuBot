const { App } = require('@slack/bolt');

const app = new App({
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.APP_TOKEN,
    socketMode: true
});


app.message('hey', async ({ command, say }) => {
    try {
        say('Hello World!');
    } catch (error) {
        console.log("err")
        console.error(error);
    }
});




/* Add functionality here */

(async () => {
    // Start the app
    await app.start(3000);

    console.log('⚡️ Bolt app is running!');
})();