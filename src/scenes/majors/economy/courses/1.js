const { Markup, Scenes } = require('telegraf');

const course1 = new Scenes.BaseScene('ECONOMY_COURSE1_ID');

course1.enter( async (ctx) => {
  return await ctx.reply('Выберите раздел', Markup.inlineKeyboard([
    Markup.button.callback('Учёба', 'STUDYING'),
    Markup.button.callback('Ещё', 'ELSE'),
    Markup.button.callback('Назад', 'BACK'),
  ]))
});

course1.action('STUDYING', async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter('MAJORS_ID');
});

course1.action('ELSE', async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter('MAJORS_ID');
});

course1.action('BACK', (ctx) => {
  ctx.answerCbQuery();
  return ctx.scene.enter('ECONOMY_ID');
});

module.exports = course1;