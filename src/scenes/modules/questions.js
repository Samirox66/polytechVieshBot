const db = require('../../config/db');
const { Markup, Scenes } = require('telegraf');

const questionScene = function (id, prevId) {
  const questionScene = new Scenes.BaseScene(id);

  questionScene.enter(async (ctx) => {
    const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.id}";`;
    const [isAdmin] = await db.execute(isAdminQuery);
    await ctx.reply('Вопросы');
    const questionsQuery = `SELECT question, answer FROM questions WHERE part="${id}";`;
    const [questions] = await db.execute(questionsQuery);
    let i = 1;
    let questionButtons = [];
    const buttons = [];
    let questionString = '';
    for (let question of questions) {
      questionScene.action(`QUESTION_${i}`, async (ctx) => {
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
    }

    await ctx.reply(questionString);
    const actionButtons = [];
    actionButtons.push(Markup.button.callback('Назад', 'BACK'));
    if (isAdmin.length) {
      actionButtons.push(
        Markup.button.callback('Добавить вопрос', 'ADD_QUESTION')
      );
    }

    buttons.push(actionButtons);
    await ctx.reply('Выберите вопрос', Markup.inlineKeyboard(buttons));
    return;
  });

  questionScene.action('BACK', async (ctx) => {
    ctx.answerCbQuery();
    return await ctx.scene.enter(prevId);
  });

  questionScene.action('ADD_QUESTION', async (ctx) => {
    ctx.answerCbQuery();
    ctx.scene.ctx.session.__scenes.state.question = true;
    await ctx.reply('Введите вопрос');
  });

  return questionScene;
};

module.exports = questionScene;
