const db = require('../../config/db');
const { Markup, Scenes } = require('telegraf');

const questionScene = function (id, prevId) {
  const questionScene = new Scenes.BaseScene(id);

  questionScene.enter(async (ctx) => {
    try {
      const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.id}";`;
      const [isAdmin] = await db.execute(isAdminQuery);
      const questionsQuery = `SELECT question, answer, id FROM questions WHERE part="${id}";`;
      const [questions] = await db.execute(questionsQuery);
      let i = 1;
      const buttons = [];
      let questionString = '';

      questions.forEach((question, index) => {
        questionString += `<b>${index + 1}. ${question.question}?</b>\n${
          question.answer
        }\n`;
      });

      if (questions.length != 0) {
        ctx.session.__scenes.state.questions = questions;
      }

      if (questionString !== '') {
        await ctx.replyWithHTML(questionString);
      } else {
        await ctx.reply('Здесь вопросов нет');
      }

      buttons.push([Markup.button.callback('Назад', 'BACK')]);
      if (isAdmin.length) {
        buttons.push([
          Markup.button.callback('Добавить вопрос', 'ADD_QUESTION'),
        ]);
        if (questions.length != 0) {
          buttons.push([
            Markup.button.callback('Удалить вопрос', 'DELETE_QUESTION'),
          ]);
          buttons.push([
            Markup.button.callback('Изменить ответ', 'CHANGE_ANSWER'),
          ]);
        }
      }

      return await ctx.replyWithHTML(
        '<i>Далее</i>',
        Markup.inlineKeyboard(buttons)
      );
    } catch (error) {
      console.log(error);
      await ctx.reply('База данных недоступна');
      await ctx.scene.enter(prevId);
    }
  });

  questionScene.action('BACK', async (ctx) => {
    try {
      ctx.answerCbQuery();
      return await ctx.scene.enter(prevId);
    } catch (error) {
      console.log(error);
    }
  });

  questionScene.action('ADD_QUESTION', async (ctx) => {
    try {
      ctx.answerCbQuery();
      ctx.session.__scenes.state.addQuestion = true;
      await ctx.reply('Введите вопрос');
    } catch (error) {
      console.log(error);
    }
  });

  questionScene.action('DELETE_QUESTION', async (ctx) => {
    try {
      ctx.answerCbQuery();
      ctx.session.__scenes.state.deleteQuestion = true;
      ctx.session.__scenes.state.showDeletingQuestion = true;
      await ctx.reply('Введите номер вопроса');
    } catch (error) {
      console.log(error);
    }
  });

  questionScene.action('CHANGE_ANSWER', async (ctx) => {
    try {
      ctx.answerCbQuery();
      ctx.session.__scenes.state.changeAnswer = true;
      ctx.session.__scenes.state.showChangingAnswer = true;
      await ctx.reply('Введите номер вопроса');
    } catch (error) {
      console.log(error);
    }
  });

  return questionScene;
};

module.exports = questionScene;
