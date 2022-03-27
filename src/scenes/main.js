const { Markup, Scenes } = require('telegraf');
const ID = require('../config/constants');

const main = new Scenes.BaseScene(ID.MAIN);

main.enter( async (ctx) => {
  await ctx.reply('Выберите раздел', Markup.inlineKeyboard([
    Markup.button.callback('Учебный вопрос', ID.STUDY),
    Markup.button.callback('Восстановление и переводы', ID.TRANSFERS),
    Markup.button.callback('Практика', ID.PRACTICE),
  ]));
});

main.action(ID.STUDY, async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter(ID.STUDY);
});

main.action(ID.TRANSFERS, async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter(ID.TRANSFERS);
});

main.action(ID.PRACTICE, async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter(ID.PRACTICE);
});

module.exports = main;