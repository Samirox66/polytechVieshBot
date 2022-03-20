const scenes = require('./scenes/scenes');
const dotenv = require('dotenv');
const db = require('./config/db');
const { Telegraf, Scenes, session } = require('telegraf');
dotenv.config();

const stage = new Scenes.Stage();
stage.register(...scenes);

const bot = new Telegraf(process.env.TOKEN);
bot.use(session());
bot.use(stage.middleware());
bot.help((ctx) => ctx.reply('commands:\n/start\n/hello\n/majors\n/addAdmin'));
bot.command('addAdmin', async (ctx) => {

  const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.id}";`;
  const [isAdmin] = await db.execute(isAdminQuery);
  console.log(isAdmin);
  if (isAdmin.length) {
    ctx.reply('Вы уже админ');
    return;
  }

  const addToAdminsQuery = `INSERT INTO admins(
    telegram_id,
    first_name,
    second_name
    )
    VALUES("${ctx.from.id}", "${ctx.from.first_name}", "${ctx.from.last_name}");`;
  const addAdmin = await db.execute(addToAdminsQuery);
  console.log(addAdmin);
  ctx.reply(`${addAdmin.first_name} ${addAdmin.second_name}, стали админом`);
});

bot.start((ctx) => ctx.reply('Нажмите или введите /majors'));
bot.command('majors', (ctx) => {
  return ctx.scene.enter('MAJORS');
});
bot.launch();


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));