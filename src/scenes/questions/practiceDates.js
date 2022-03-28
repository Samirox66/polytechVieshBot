const ID = require('../../config/constants');
const questions = require('../modules/questions');

const practiceDates = [];

practiceDates.push(questions(ID.P__B__F__DATES, ID.P__B__FULL));
practiceDates.push(questions(ID.P__B__P__DATES, ID.P__B__PART));
practiceDates.push(questions(ID.P__B__E__DATES, ID.P__B__EVENING));
practiceDates.push(questions(ID.P__M__F__DATES, ID.P__B__FULL));
practiceDates.push(questions(ID.P__M__P__DATES, ID.P__B__PART));
practiceDates.push(questions(ID.P__M__E__DATES, ID.P__B__EVENING));
practiceDates.push(questions(ID.P__S__F__DATES, ID.P__B__FULL));
practiceDates.push(questions(ID.P__S__P__DATES, ID.P__B__PART));
practiceDates.push(questions(ID.P__S__E__DATES, ID.P__B__EVENING));

module.exports = practiceDates;
