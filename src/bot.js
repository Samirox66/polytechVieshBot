const course = require('./scenes/modules/course');

const majors = require('./scenes/majors');
const economy = require('./scenes/majors/economy/economy');
const security = require('./scenes/majors/security/security');
const economyCourse1 = course('ECONOMY_COURSE1_ID', 'ECONOMY_ID');
const economyCourse2 = course('ECONOMY_COURSE2_ID', 'ECONOMY_ID');
const economyCourse3 = course('ECONOMY_COURSE3_ID', 'ECONOMY_ID');
const economyCourse4 = course('ECONOMY_COURSE4_ID', 'ECONOMY_ID');
const securityCourse1 = course('SECURITY_COURSE1_ID', 'SECURITY_ID');
const securityCourse2 = course('SECURITY_COURSE2_ID', 'SECURITY_ID');
const securityCourse3 = course('SECURITY_COURSE3_ID', 'SECURITY_ID');
const securityCourse4 = course('SECURITY_COURSE4_ID', 'SECURITY_ID');
const dotenv = require('dotenv');
const db = require('./config/db');
const { Telegraf, Scenes, session } = require('telegraf');
dotenv.config();

const stage = new Scenes.Stage();
stage.register(majors, economy, security, economyCourse1, economyCourse2, economyCourse3, economyCourse4,
  securityCourse1, securityCourse2, securityCourse3, securityCourse4);

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
  return ctx.scene.enter('MAJORS_ID');
});
bot.launch();


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));