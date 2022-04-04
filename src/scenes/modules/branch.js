const { Markup, Scenes } = require('telegraf');
const db = require('../../config/db');

const branch = function (id, buttonsProp, title) {
  const buttons = [];
  const branch = new Scenes.BaseScene(id);
  for (let button of buttonsProp) {
    buttons.push([Markup.button.callback(button.text, button.id)]);
    branch.action(button.id, async (ctx) => {
      ctx.answerCbQuery();
      if (button.link) {
        const tutorQuery = `SELECT link FROM tutors where question="${button.id}";`;
        const [tutor] = await db.execute(tutorQuery);
        if (tutor) {
          return await ctx.reply(`Вот, кто вам поможет ${tutor[0].link}`);
        }

        return await ctx.reply('Слишком сложный вопрос');
      }

      await ctx.replyWithHTML(`<b>${button.text}</b>`);
      return await ctx.scene.enter(button.id);
    });
  }

  branch.enter(async (ctx) => {
    await ctx.reply(title, Markup.inlineKeyboard(buttons));
  });

  return branch;
};

module.exports = branch;
