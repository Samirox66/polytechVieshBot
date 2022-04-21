const onSaveQuestion = require('./onSaveQuestion');
const onDeleteQuestion = require('./onDeleteQuestion');
const onChangeTutor = require('./onChangeTutor');
const onChangeAnswer = require('./onChangeAnswer');
const addAdmin = require('./addAdmin');

const message = async (ctx) => {
  try {
    if (ctx.message.from.id === 939838520) {
      ctx.reply('Иди погуляй');
    } else if (ctx.message.from.id === 1042745799) {
      ctx.reply(
        '<a>https://www.youtube.com/watch?v=jCkzNUM6Rx8&ab_channel=%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%A1%D0%B8%D1%81%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B0</a>'
      );
    } else if (ctx.message.from.id === 599678686) {
      ctx.replyWithHTML(
        'Секретарь <a>https://www.youtube.com/watch?v=jCkzNUM6Rx8&ab_channel=%D0%94%D0%BD%D0%B5%D0%B2%D0%BD%D0%B8%D0%BA%D0%A1%D0%B8%D1%81%D0%B0%D0%B4%D0%BC%D0%B8%D0%BD%D0%B0</a>'
      );
    } else if (ctx.message.from.id === 1023963762) {
      ctx.reply(
        'Ира, не стрессуй\nЛучше посмотри видяшку <a>https://www.youtube.com/watch?v=SfW-Ll4xtX4&ab_channel=Baraban-TV</a>'
      );
    } else if (
      ctx.session.__scenes.state &&
      (ctx.session.__scenes.state.answer ||
        ctx.session.__scenes.state.addQuestion)
    ) {
      onSaveQuestion(ctx);
    } else if (
      ctx.session.__scenes.state &&
      ctx.session.__scenes.state.deleteQuestion
    ) {
      onDeleteQuestion(ctx);
    } else if (
      ctx.session.__scenes.state &&
      ctx.session.__scenes.state.changeTutor
    ) {
      onChangeTutor(ctx);
    } else if (
      ctx.session.__scenes.state &&
      ctx.session.__scenes.state.changeAnswer
    ) {
      onChangeAnswer(ctx);
    } else if (ctx.session.__scenes.state.addNewAdmin) {
      addAdmin(ctx);
    } else {
      await ctx.reply('Я слишком глупый, чтобы на это ответить');
      console.log(ctx.message.from);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = message;
