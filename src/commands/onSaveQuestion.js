const { Markup } = require('telegraf');

const onSaveQuestion = async (ctx) => {
  try {
    if (ctx.session.__scenes.state.addQuestion === true) {
      ctx.session.__scenes.state.addQuestion = ctx.update.message.text;
      ctx.session.__scenes.state.answer = true;
      await ctx.reply('Введите ответ');
    } else if (ctx.session.__scenes.state.answer === true) {
      ctx.session.__scenes.state.answer = ctx.update.message.text;
      await ctx.reply(
        `Вопрос: ${ctx.session.__scenes.state.addQuestion}\nOтвет: ${ctx.update.message.text}`
      );
      await ctx.reply(
        'Добавить в базу данных?',
        Markup.inlineKeyboard([Markup.button.callback('Да', 'YES')])
      );
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = onSaveQuestion;
