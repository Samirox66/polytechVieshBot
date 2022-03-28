const ID = require('../../config/constants');
const questions = require('../modules/questions');

const practice = function(questionGroup) {
  const practice = [];

  practice.push(questions(ID[`P__B__F__${questionGroup}`], ID.P__B__FULL));
  practice.push(questions(ID[`P__B__P__${questionGroup}`], ID.P__B__PART));
  practice.push(questions(ID[`P__B__E__${questionGroup}`], ID.P__B__EVENING));
  practice.push(questions(ID[`P__M__F__${questionGroup}`], ID.P__B__FULL));
  practice.push(questions(ID[`P__M__P__${questionGroup}`], ID.P__B__PART));
  practice.push(questions(ID[`P__M__E__${questionGroup}`], ID.P__B__EVENING));
  practice.push(questions(ID[`P__S__F__${questionGroup}`], ID.P__B__FULL));
  practice.push(questions(ID[`P__S__P__${questionGroup}`], ID.P__B__PART));
  practice.push(questions(ID[`P__S__E__${questionGroup}`], ID.P__B__EVENING));
  return practice;
}

module.exports = practice;