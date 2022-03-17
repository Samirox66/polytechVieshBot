const { Markup, Scenes} = require('telegraf');

const economy = new Scenes.BaseScene('ECONOMY_ID');

economy.enter(async (ctx) => {
  await ctx.reply('Выберите курс', Markup.inlineKeyboard([
    Markup.button.callback('1 курс', 'ONE'),
    Markup.button.callback('2 курс', 'TWO'),
    Markup.button.callback('3 курс', 'THREE'),
    Markup.button.callback('4 курс', 'FOUR'),
    Markup.button.callback('Назад', 'BACK'),
  ]));
});

economy.action('BACK', async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter('MAJORS_ID');
});

economy.action('ONE', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('1 курс');
  return ctx.scene.enter('MAJORS_ID');
});

economy.action('TWO', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('2 курс');
  return ctx.scene.leave();
});

economy.action('THREE', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('3 курс');
  return ctx.scene.leave();
});

economy.action('FOUR', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('4 курс');
  return ctx.scene.leave();
});

module.exports = economy;