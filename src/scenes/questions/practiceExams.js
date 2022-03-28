const ID = require('../../config/constants');
const questions = require('../modules/questions');

const practiceExams = [];

practiceExams.push(questions(ID.P__B__F__EXAM, ID.P__B__FULL));
practiceExams.push(questions(ID.P__B__P__EXAM, ID.P__B__PART));
practiceExams.push(questions(ID.P__B__E__EXAM, ID.P__B__EVENING));
practiceExams.push(questions(ID.P__M__F__EXAM, ID.P__B__FULL));
practiceExams.push(questions(ID.P__M__P__EXAM, ID.P__B__PART));
practiceExams.push(questions(ID.P__M__E__EXAM, ID.P__B__EVENING));
practiceExams.push(questions(ID.P__S__F__EXAM, ID.P__B__FULL));
practiceExams.push(questions(ID.P__S__P__EXAM, ID.P__B__PART));
practiceExams.push(questions(ID.P__S__E__EXAM, ID.P__B__EVENING));

module.exports = practiceExams;