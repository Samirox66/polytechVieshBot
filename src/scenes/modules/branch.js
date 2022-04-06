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
        const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.id}";`;
        const [isAdmin] = await db.execute(isAdminQuery);
        if (tutor && isAdmin.length) {
          return await ctx.reply(
            `Вот, кто вам поможет ${tutor[0].link}`,
            Markup.inlineKeyboard([
              Markup.button.callback('Изменить ответственного', 'CHANGE_TUTOR'),
            ])
          );
        } else if (tutor) {
          return await ctx.reply(`Вот, кто вам поможет ${tutor[0].link}`);
        } else if (isAdmin.length) {
          return await ctx.reply(
            `Пока что вам тут никто не поможет`,
            Markup.inlineKeyboard([
              Markup.button.callback('Изменить ответственного', 'CHANGE_TUTOR'),
            ])
          );
        }

        return await ctx.reply('Пока что вам тут никто не поможет');
      }

      await ctx.replyWithHTML(`<b>${button.text}</b>`);
      return await ctx.scene.enter(button.id);
    });
  }

  branch.action('CHANGE_TUTOR', async (ctx) => {
    ctx.answerCbQuery();
    ctx.session.__scenes.state.changeTutor = true;
    return await ctx.reply('Добавьте ссылку');
  });

  branch.enter(async (ctx) => {
    await ctx.reply(title, Markup.inlineKeyboard(buttons));
  });

  return branch;
};

module.exports = branch;
