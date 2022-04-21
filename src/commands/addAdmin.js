const { Markup } = require('telegraf');
const db = require('../config/db');

const addAdmin = async (ctx) => {
  try {
    if (ctx.session.__scenes.state.showNewAdmin) {
      ctx.session.__scenes.state.showNewAdmin = false;
      const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.update.message.text}";`;
      const [isAdmin] = await db.execute(isAdminQuery);
      if (isAdmin.length) {
        ctx.session.__scenes.state.addNewAdmin = false;
        return await ctx.reply('Данный человек уже админ');
      }

      ctx.session.__scenes.state.newAdmin = ctx.update.message.text;
      return await ctx.reply(
        `Сделать @${ctx.update.message.text} новым администратором?`,
        Markup.inlineKeyboard([Markup.button.callback('Да', 'ADD_NEW_ADMIN')])
      );
    }

    if (ctx.session.__scenes.state.newAdmin) {
      ctx.answerCbQuery();
      ctx.session.__scenes.state.addNewAdmin = false;
      const addAdminQuery = `INSERT admins(telegram_id)
      VALUES("${ctx.session.__scenes.state.newAdmin}");`;
      await db.execute(addAdminQuery);
      ctx.session.__scenes.state.newAdmin = undefined;
      ctx.replyWithHTML('<b>Успех!</b>');
      return await ctx.scene.enter(ctx.session.__scenes.current);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = addAdmin;
