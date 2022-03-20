const db = require('../config/db');
const { Markup, Scenes } = require('telegraf');

const group = function(id, prevId) {
 const group = new Scenes.BaseScene(id);

 group.enter( async (ctx) => {
  const isAdminQuery = `SELECT telegram_id FROM admins WHERE telegram_id="${ctx.from.id}";`;
  const [isAdmin] = await db.execute(isAdminQuery);
  const questionsQuery = `SELECT question, answer FROM questions WHERE part="${id}";`
  const [questions] = await db.execute(questionsQuery);
  let i = 1;
  for (let question of questions) {
    await ctx.reply(`${i}. ${question.question}`);
    i += 1;
  }

  if (isAdmin.length) {
    return await ctx.reply('Выберите вопрос', Markup.inlineKeyboard([
      Markup.button.callback('Назад', 'BACK'),
      Markup.button.callback('Добавить вопрос', 'ADD_QUESTION'),
    ]));
  }
  
  return await ctx.reply('Выберите отдел', Markup.inlineKeyboard([
    Markup.button.callback('Назад', 'BACK'),
  ]));
 });

 group.action('BACK', async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter(prevId);
 });

 group.action('ADD_QUESTION', async (ctx) => {
  ctx.answerCbQuery();
  ctx.reply('Когда-нибудь вы сможете добавить вопрос');
 })

 return group;
}

module.exports = group;