const db = require('../config/db');

const onAddQuestion = (ctx) => {
  ctx.answerCbQuery();
  if (ctx.session.__scenes.state.answer !== false) {
    const insertQuery = `INSERT questions(question, answer, part)
    VALUES("${ctx.session.__scenes.state.question}", "${ctx.session.__scenes.state.answer}", "${ctx.session.__scenes.current}")`;
    db.execute(insertQuery);
    ctx.reply('Успех!');
    ctx.session.__scenes.state.answer = false;
    ctx.session.__scenes.state.question = false;
    ctx.scene.enter(ctx.session.__scenes.current);
  }
};

module.exports = onAddQuestion;