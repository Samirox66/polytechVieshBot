const ID = require('../../config/constants');
const questions = require('../modules/questions');

const study = function(questionGroup) {
  const study = [];

  study.push(questions(ID[`S__B__F__${questionGroup}`], ID.S__B__FULL));
  study.push(questions(ID[`S__B__P__${questionGroup}`], ID.S__B__PART));
  study.push(questions(ID[`S__B__E__${questionGroup}`], ID.S__B__EVENING));
  study.push(questions(ID[`S__M__F__${questionGroup}`], ID.S__B__FULL));
  study.push(questions(ID[`S__M__P__${questionGroup}`], ID.S__B__PART));
  study.push(questions(ID[`S__M__E__${questionGroup}`], ID.S__B__EVENING));
  study.push(questions(ID[`S__S__F__${questionGroup}`], ID.S__B__FULL));
  study.push(questions(ID[`S__S__P__${questionGroup}`], ID.S__B__PART));
  study.push(questions(ID[`S__S__E__${questionGroup}`], ID.S__B__EVENING));
  return study;
}

module.exports = study;