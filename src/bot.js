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
bot.help((ctx) => ctx.reply('commands:\n/start\n/help\n/adminGuide'));

bot.start((ctx) => {
  return ctx.scene.enter(ID.MAIN);
});

bot.command('adminGuide', async (ctx) => {
  try {
    await ctx.replyWithHTML(
      '<b>Данная информация релеватна для администраторов данного бота</b>'
    );
    await ctx.replyWithHTML(
      '\nДля <i>добавления вопроса</i> в определенную категорию нужно перейти к этой категории и нажать кнопку "Добавить вопрос", после этого ввести вопрос и ответ и нажать кнопку "Да" для подтверждения изменений'
    );
    await ctx.replyWithHTML(
      '\nДля <i>изменения ответа</i> на определенный вопрос в определенной категории нужно перейти к этой категории и нажать кнопку "Изменить ответ", после этого ввести номер вопроса, который нужно изменить, ввести новый ответ и нажать кнопку "Да" для подтверждения изменений'
    );
    await ctx.replyWithHTML(
      '\nДля <i>удаления вопроса</i> из определенной категории нужно перейти к этой категории и нажать кнопку "Удалить вопрос", после этого ввести номер вопроса и нажать кнопку "Да" для подтверждения изменений'
    );
    await ctx.replyWithHTML(
      '\nдля <i>изменения ссылки</i> на человека, отвественного за ответы на другие вопросы, перейдите к пункту, в котором нужно поменять человека, нажмите кнопку "Изменить ответственного", далее введите ник человека в телеграмме и нажмите кнопку "Да" для подтверждения изменений'
    );
    await ctx.replyWithHTML(
      '\nдля <i>добавления администратора</i> выберете команду /start,  нажмите кнопку "Добавить нового админа", далее введите ник человека в телеграмме без @ и нажмите кнопку "Да" для подтверждения изменений'
    );
  } catch (error) {
    console.log(error);
  }
});

bot.action('YES', commands.onAddQuestion);
bot.action('DELETE', commands.onDeleteQuestion);
bot.action('CHANGE_TUTOR', commands.onChangeTutor);
bot.action('SAVE_NEW_ANSWER', commands.onChangeAnswer);
bot.action('ADD_NEW_ADMIN', commands.addAdmin);

bot.on('message', commands.message);
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
