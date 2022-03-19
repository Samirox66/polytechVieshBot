const { Markup, Scenes } = require('telegraf');

const group = function(id, prevId) {
 const group = new Scenes.BaseScene(id);

 group.enter( async (ctx) => {
  return await ctx.reply('Выберите отдел', Markup.inlineKeyboard([
    Markup.button('Назад', 'BACK'),
  ]));
 });

 group.action('BACK', async (ctx) => {
   return await ctx.scene.enter(prev);
 });

 return group;
}

module.exports = group;