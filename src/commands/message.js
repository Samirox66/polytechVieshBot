const onSaveQuestion = require('./onSaveQuestion');

const message = (ctx) => {
  if (ctx.message.from.id === 939838520) {
    ctx.reply('Иди погуляй')
  } else if (ctx.session.__scenes.state) {
    onSaveQuestion(ctx);
  }
}

module.exports = message;