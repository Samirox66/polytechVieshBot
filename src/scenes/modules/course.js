const { Markup, Scenes } = require('telegraf');

const course = function(id, prevId) {
  const course = new Scenes.BaseScene(id);

  course.enter( async (ctx) => {
    return await ctx.reply('Выберите раздел', Markup.inlineKeyboard([
      Markup.button.callback('Учёба', 'STUDYING'),
      Markup.button.callback('Ещё', 'ELSE'),
      Markup.button.callback('Назад', 'BACK'),
    ]))
  });

  course.action('STUDYING', async (ctx) => {
    ctx.answerCbQuery();
    return await ctx.scene.enter('MAJORS_ID');
  });

  course.action('ELSE', async (ctx) => {
    ctx.answerCbQuery();
    return await ctx.scene.enter('MAJORS_ID');
  });

  course.action('BACK', (ctx) => {
    ctx.answerCbQuery();
    return ctx.scene.enter(prevId);
  });

  return course;
}

module.exports = course;