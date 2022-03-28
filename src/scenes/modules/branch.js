const { Markup, Scenes } = require('telegraf');

const branch = function(id, buttonsProp, title) {
  const buttons = [];
  const branch = new Scenes.BaseScene(id);
  for (let button of buttonsProp) {
    buttons.push([Markup.button.callback(button.text, button.id)]);
    branch.action(button.id, async (ctx) => {
      ctx.answerCbQuery();
      return await ctx.scene.enter(button.id);
    })
  }

  branch.enter( async (ctx) => {
    await ctx.reply(title, Markup.inlineKeyboard(buttons));
  });



  return branch;
}

module.exports = branch;