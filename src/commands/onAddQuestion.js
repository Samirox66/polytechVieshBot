const db = require('../config/db');

const onAddQuestion = (ctx) => {
  ctx.answerCbQuery();
  console.log(ctx.session.__scenes.state.answer);
  if (ctx.session.__scenes.state.answer !== false && ctx.session.__scenes.state.answer !== undefined) {
    const insertQuery = `INSERT questions(question, answer, part)
    VALUES("${ctx.session.__scenes.state.question}", "${ctx.session.__scenes.state.answer}", "${ctx.session.__scenes.current}")`;
    db.execute(insertQuery);
    ctx.reply('Успех!');
    ctx.scene.enter(ctx.session.__scenes.current);
  }
};

module.exports = onAddQuestion;