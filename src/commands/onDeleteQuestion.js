const db = require('../config/db');
const { Markup } = require('telegraf');

const onDeleteQuestion = async (ctx) => {
  if (ctx.session.__scenes.state.showDeletingQuestion) {
    await ctx.reply(
      `Вопрос: ${
        ctx.session.__scenes.state.questions[ctx.update.message.text - 1]
          .question
      }\nOтвет: ${
        ctx.session.__scenes.state.questions[ctx.update.message.text - 1].answer
      }`
    );
    ctx.session.__scenes.state.number = ctx.update.message.text - 1;
    ctx.session.__scenes.state.showDeletingQuestion = false;
    ctx.session.__scenes.state.deleteQuestion;
    return await ctx.reply(
      'Удалить из базы данных?',
      Markup.inlineKeyboard([Markup.button.callback('Да', 'DELETE')])
    );
  } else {
    if (
      ctx.session.__scenes.state.questions[ctx.session.__scenes.state.number]
    ) {
      const deleteQuery = `DELETE FROM questions WHERE id="${
        ctx.session.__scenes.state.questions[ctx.session.__scenes.state.number]
          .id
      }";`;
      await db.execute(deleteQuery);
      await ctx.replyWithHTML('<b>Успех</b>');
    } else {
      ctx.reply('Неправильный номер вопроса');
    }
    return await ctx.scene.enter(ctx.session.__scenes.current);
  }
};

module.exports = onDeleteQuestion;
