const db = require('../../config/db');
const { Markup, Scenes } = require('telegraf');

const questionScene = function (id, prevId) {
  const questionScene = new Scenes.BaseScene(id);

  questionScene.enter(async (ctx) => {
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
        ctx.answerCbQuery();
        await ctx.reply(`Вопрос: ${question.question}`);
        return await ctx.reply(`Ответ: ${question.answer}`);
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
      buttons.push([Markup.button.callback('Добавить вопрос', 'ADD_QUESTION')]);
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
  });

  questionScene.action('BACK', async (ctx) => {
    ctx.answerCbQuery();
    return await ctx.scene.enter(prevId);
  });

  questionScene.action('ADD_QUESTION', async (ctx) => {
    ctx.answerCbQuery();
    ctx.session.__scenes.state.addQuestion = true;
    await ctx.reply('Введите вопрос');
  });

  questionScene.action('DELETE_QUESTION', async (ctx) => {
    ctx.answerCbQuery();
    ctx.session.__scenes.state.deleteQuestion = true;
    ctx.session.__scenes.state.showDeletingQuestion = true;
    await ctx.reply('Введите номер вопроса');
  });

  return questionScene;
};

module.exports = questionScene;
