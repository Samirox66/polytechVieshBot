const ID = require('../../config/constants');
const questions = require('../modules/questions');

const gias = [];

gias.push(questions(ID.S__B__F__GIA, ID.P__B__FULL));
gias.push(questions(ID.S__B__P__GIA, ID.P__B__PART));
gias.push(questions(ID.S__B__E__GIA, ID.P__B__EVENING));
gias.push(questions(ID.S__M__F__GIA, ID.P__B__FULL));
gias.push(questions(ID.S__M__P__GIA, ID.P__B__PART));
gias.push(questions(ID.S__M__E__GIA, ID.P__B__EVENING));
gias.push(questions(ID.S__S__F__GIA, ID.P__B__FULL));
gias.push(questions(ID.S__S__P__GIA, ID.P__B__PART));
gias.push(questions(ID.S__S__E__GIA, ID.P__B__EVENING));

module.exports = gias;