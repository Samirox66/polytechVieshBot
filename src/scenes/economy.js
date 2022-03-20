const { Markup, Scenes} = require('telegraf');

const economy = new Scenes.BaseScene('ECONOMY');

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
  return await ctx.scene.enter('MAJORS');
});

economy.action('ONE', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('1 курс');
  return ctx.scene.enter('ECONOMY_COURSE1');
});

economy.action('TWO', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('2 курс');
  return ctx.scene.enter('ECONOMY_COURSE2');
});

economy.action('THREE', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('3 курс');
  return ctx.scene.enter('ECONOMY_COURSE3');
});

economy.action('FOUR', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('4 курс');
  return ctx.scene.enter('ECONOMY_COURSE4');
});

module.exports = economy;