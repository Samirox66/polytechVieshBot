const scenes = require('./scenes/scenes');
const commands = require('./commands/commands');
const ID = require('./config/constants');
const db = require('./config/db');
const dotenv = require('dotenv');
const { Telegraf, Scenes, session } = require('telegraf');
dotenv.config();

const stage = new Scenes.Stage();
stage.register(...scenes);

const bot = new Telegraf(process.env.TOKEN);
bot.use(session());
bot.use(stage.middleware());
bot.help((ctx) => ctx.reply('commands:\n/start\n/hello\n/majors\n/addAdmin'));
bot.command('addAdmin', commands.addAdmin);

bot.start((ctx) => {
  return ctx.scene.enter(ID.MAIN);
});

bot.command('majors', (ctx) => {
  return ctx.scene.enter('MAJORS');
});

bot.action('YES', commands.onAddQuestion);

bot.on('message', commands.message);
bot.launch();


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
