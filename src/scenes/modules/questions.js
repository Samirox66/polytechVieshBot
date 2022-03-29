const db = require('../../config/db');
const { Markup, Scenes } = require('telegraf');


const questionScene = function(id, prevId) {
  const questionScene = new Scenes.BaseScene(id);

  const getQuestions = async () => {
    const questionsQuery = `SELECT question, answer FROM questions WHERE part="${id}";`;
    return await db.execute(questionsQuery);
  }

  const questions = getQuestions();

  questionScene.enter( async (ctx) => {
    const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.id}";`;
    const [isAdmin] = await db.execute(isAdminQuery);
    await ctx.reply('Вопросы');
    const questionsQuery = `SELECT question, answer FROM questions WHERE part="${id}";`
    const [questions] = await db.execute(questionsQuery);
    let i = 1;
    const questionButtons = [];
    for (let question of questions) {
      await ctx.reply(`${i}. ${question.question}`);
      questionButtons.push(Markup.button.callback(i, `QUESTION_${i}`));
      i += 1;
    }

    const buttons = [];
    buttons.push(Markup.button.callback('Назад', 'BACK'));
    if (isAdmin.length) {
        buttons.push(Markup.button.callback('Добавить вопрос', 'ADD_QUESTION'))
    }

    await ctx.reply('Выберите вопрос', Markup.inlineKeyboard([questionButtons, buttons]));
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
  })

  return questionScene;
}

module.exports = questionScene;