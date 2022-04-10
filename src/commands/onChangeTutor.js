const { Markup } = require('telegraf');
const db = require('../config/db');

const onChangeTutor = async (ctx) => {
  try {
    if (ctx.session.__scenes.state.tutor) {
      ctx.answerCbQuery();
      if (ctx.session.__scenes.state.replaceTutor) {
        const replaceTutorQuery = `UPDATE tutors SET link="${ctx.session.__scenes.state.tutor}" WHERE question="${ctx.session.__scenes.current}";`;
        await db.execute(replaceTutorQuery);
        return await ctx.reply('Успех');
      }

      const writeTutorQuery = `INSERT INTO tutors(link, question)
      VALUES("${ctx.session.__scenes.state.tutor}", "${ctx.session.__scenes.current}");`;
      await db.execute(writeTutorQuery);
      return await ctx.reply('Успех');
    }

    ctx.session.__scenes.state.tutor = ctx.update.message.text;
    return await ctx.reply(
      `Изменить ответсвенного на ${ctx.session.__scenes.state.tutor}?`,
      Markup.inlineKeyboard([Markup.button.callback('Да', 'CHANGE_TUTOR')])
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports = onChangeTutor;
