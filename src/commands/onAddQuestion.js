const db = require('../config/db');

const onAddQuestion = async (ctx) => {
  ctx.answerCbQuery();
  if (
    ctx.session.__scenes.state.answer !== false &&
    ctx.session.__scenes.state.answer !== undefined
  ) {
    const insertQuery = `INSERT questions(question, answer, part)
    VALUES("${ctx.session.__scenes.state.addQuestion}", "${ctx.session.__scenes.state.answer}", "${ctx.session.__scenes.current}")`;
    await db.execute(insertQuery);
    ctx.replyWithHTML('<b>Успех!</b>');
    ctx.scene.enter(ctx.session.__scenes.current);
  }
};

module.exports = onAddQuestion;
