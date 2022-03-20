const { Markup, Scenes } = require('telegraf');

const security = new Scenes.BaseScene('SECURITY');

security.enter((ctx) => {
  ctx.reply('Выберите курс', Markup.inlineKeyboard([
    Markup.button.callback('1 курс', 'ONE'),
    Markup.button.callback('2 курс', 'TWO'),
    Markup.button.callback('3 курс', 'THREE'),
    Markup.button.callback('4 курс', 'FOUR'),
    Markup.button.callback('Назад', 'BACK'),
  ]));
});

security.action('BACK', async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter('MAJORS');
});

security.action('ONE', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('1 курс');
  return ctx.scene.enter('SECURITY_COURSE1');
});

security.action('TWO', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('2 курс');
  return ctx.scene.enter('SECURITY_COURSE1');
});

security.action('THREE', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('3 курс');
  return ctx.scene.enter('SECURITY_COURSE1');
});

security.action('FOUR', async (ctx) => {
  ctx.answerCbQuery();
  await ctx.reply('4 курс');
  return ctx.scene.enter('SECURITY_COURSE1');
});

module.exports = security;