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
      let questionButtons = [];
      const buttons = [];
      let questionString = '';
      for (let question of questions) {
        questionScene.action(`QUESTION_${i}`, async (ctx) => {
          try {
            ctx.answerCbQuery();
            await ctx.reply(`Вопрос: ${question.question}`);
            return await ctx.reply(`Ответ: ${question.answer}`);
          } catch (error) {
            console.log(error);
          }
        });

        questionString += `${i}. ${question.question}\n`;
        questionButtons.push(Markup.button.callback(i, `QUESTION_${i}`));
        if (i % 6 === 0) {
          buttons.push(questionButtons);
          questionButtons = [];
        }
        i += 1;
      }

      if (questionButtons.length != 0) {
        buttons.push(questionButtons);
        ctx.session.__scenes.state.questions = questions;
      }

      if (questionString !== '') {
        await ctx.reply(questionString);
      }

      buttons.push([Markup.button.callback('Назад', 'BACK')]);
      if (isAdmin.length) {
        buttons.push([
          Markup.button.callback('Добавить вопрос', 'ADD_QUESTION'),
        ]);
        if (questionButtons.length != 0) {
          buttons.push([
            Markup.button.callback('Удалить вопрос', 'DELETE_QUESTION'),
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

  return questionScene;
};

module.exports = questionScene;
