const { Markup } = require('telegraf');
const db = require('../config/db');

const onChangeAnswer = async (ctx) => {
  try {
    if (ctx.session.__scenes.state.showChangingAnswer) {
      if (ctx.session.__scenes.state.questions[ctx.update.message.text]) {
        await ctx.reply(
          `Вопрос: ${
            ctx.session.__scenes.state.questions[ctx.update.message.text - 1]
              .question
          }\nOтвет: ${
            ctx.session.__scenes.state.questions[ctx.update.message.text - 1]
              .answer
          }`
        );
        ctx.session.__scenes.state.number = ctx.update.message.text - 1;
        ctx.session.__scenes.state.showChangingAnswer = false;
        ctx.session.__scenes.state.showNewAnswer = true;
        return await ctx.reply('Введите новый ответ');
      } else {
        ctx.reply('Неправильный номер вопроса');
      }
    } else if (ctx.session.__scenes.state.showNewAnswer) {
      ctx.session.__scenes.state.newAnswer = ctx.update.message.text;
      ctx.session.__scenes.state.showNewAnswer = false;
      await ctx.reply(
        `Вопрос: ${
          ctx.session.__scenes.state.questions[
            ctx.session.__scenes.state.number
          ].question
        }\nOтвет: ${ctx.session.__scenes.state.newAnswer}`
      );
      return await ctx.reply(
        'Изменить ответ?',
        Markup.inlineKeyboard([Markup.button.callback('Да', 'SAVE_NEW_ANSWER')])
      );
    } else {
      if (
        ctx.session.__scenes.state.questions[ctx.session.__scenes.state.number]
      ) {
        ctx.answerCbQuery();
        const changeAnswerQuery = `UPDATE questions SET answer="${
          ctx.session.__scenes.state.newAnswer
        }" WHERE id="${
          ctx.session.__scenes.state.questions[
            ctx.session.__scenes.state.number
          ].id
        }";`;
        await db.execute(changeAnswerQuery);
        await ctx.replyWithHTML('<b>Успех</b>');
        ctx.session.__scenes.state.changeAnswer = false;
      } else {
        ctx.reply('Неправильный номер вопроса');
      }
      return await ctx.scene.enter(ctx.session.__scenes.current);
    }
  } catch (error) {
    ctx.reply('База данных недоступна');
    console.log(error);
  }
};

module.exports = onChangeAnswer;
