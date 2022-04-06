const onSaveQuestion = require('./onSaveQuestion');
const onDeleteQuestion = require('./onDeleteQuestion');

const message = async (ctx) => {
  try {
    if (ctx.message.from.id === 939838520) {
      ctx.reply('Иди погуляй');
    } else if (ctx.message.from.id === 599678686) {
      ctx.replyWithHTML(
        'Секретарь <a>https://www.youtube.com/watch?v=jCkzNUM6Rx8&ab_channel=%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%A1%D0%B8%D1%81%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B0</a>'
      );
    } else if (ctx.session.__scenes.state) {
      if (
        ctx.session.__scenes.state.answer ||
        ctx.session.__scenes.state.addQuestion
      ) {
        onSaveQuestion(ctx);
      } else if (ctx.session.__scenes.state.deleteQuestion) {
        onDeleteQuestion(ctx);
      }
    } else {
      await ctx.reply('Я слишком глупый, чтобы на это ответить');
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = message;
