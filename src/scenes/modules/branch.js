const { Markup, Scenes } = require('telegraf');
const db = require('../../config/db');

const branch = function (id, buttonsProp, title, main) {
  const buttons = [];
  const branch = new Scenes.BaseScene(id);
  for (let button of buttonsProp) {
    buttons.push([Markup.button.callback(button.text, button.id)]);
    branch.action(button.id, async (ctx) => {
      try {
        ctx.answerCbQuery();
        if (button.link) {
          const tutorQuery = `SELECT link FROM tutors where question="${id}";`;
          const [tutor] = await db.execute(tutorQuery);
          const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.id}";`;
          const [isAdmin] = await db.execute(isAdminQuery);
          if (tutor.length && isAdmin.length) {
            return await ctx.reply(
              `Вот, кто вам поможет ${tutor[0].link}`,
              Markup.inlineKeyboard([
                Markup.button.callback(
                  'Изменить ответственного',
                  'REPLACE_TUTOR'
                ),
              ])
            );
          } else if (tutor.length) {
            return await ctx.reply(`Вот, кто вам поможет ${tutor[0].link}`);
          } else if (isAdmin.length) {
            return await ctx.reply(
              `Пока что вам тут никто не поможет`,
              Markup.inlineKeyboard([
                Markup.button.callback(
                  'Добавить ответственного',
                  'WRITE_TUTOR'
                ),
              ])
            );
          }

          return await ctx.reply('Пока что вам тут никто не поможет');
        }

        await ctx.replyWithHTML(`<b>${button.text}</b>`);
        return await ctx.scene.enter(button.id);
      } catch (error) {
        console.log(error);
        await ctx.reply('База данных недоступна');
      }
    });
  }

  branch.action('WRITE_TUTOR', async (ctx) => {
    try {
      ctx.answerCbQuery();
      ctx.session.__scenes.state.changeTutor = true;
      return await ctx.reply('Добавьте ссылку');
    } catch (error) {
      console.log(error);
    }
  });

  branch.action('REPLACE_TUTOR', async (ctx) => {
    try {
      ctx.answerCbQuery();
      ctx.session.__scenes.state.changeTutor = true;
      ctx.session.__scenes.state.replaceTutor = true;
      return await ctx.reply('Добавьте ссылку');
    } catch (err) {
      console.log(err);
    }
  });

  if (main) {
    branch.action('NEW_ADMIN', async (ctx) => {
      try {
        ctx.answerCbQuery();
        ctx.session.__scenes.state.addNewAdmin = true;
        ctx.session.__scenes.state.showNewAdmin = true;
        return await ctx.reply('Введите ник нового администратора\n(без @)');
      } catch (err) {
        console.log(err);
      }
    });
  }

  branch.enter(async (ctx) => {
    try {
      if (main) {
        const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.username}";`;
        const [isAdmin] = await db.execute(isAdminQuery);
        if (isAdmin.length) {
          return await ctx.reply(
            title,
            Markup.inlineKeyboard([
              ...buttons,
              [Markup.button.callback('Добавить нового админа', 'NEW_ADMIN')],
            ])
          );
        }
      }

      return await ctx.reply(title, Markup.inlineKeyboard(buttons));
    } catch (error) {
      console.log(error);
    }
  });

  return branch;
};

module.exports = branch;
