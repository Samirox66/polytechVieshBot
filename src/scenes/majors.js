const { Markup, Scenes } = require('telegraf');

const majors = new Scenes.BaseScene('MAJORS_ID');

majors.enter( async (ctx) => {
  await ctx.reply('Выберите направление', Markup.inlineKeyboard([
    Markup.button.callback('Экономика', 'ECONOMY'),
    Markup.button.callback('Экономическая безопасность', 'SECURITY'),
  ]));
});

majors.action('ECONOMY', async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter('ECONOMY_ID');
});

majors.action('SECURITY', async (ctx) => {
  ctx.answerCbQuery();
  return await ctx.scene.enter('SECURITY_ID');
})

module.exports = majors;
