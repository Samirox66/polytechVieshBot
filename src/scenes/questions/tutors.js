const ID = require('../../config/constants');
const questions = require('../modules/questions');

const tutors = [];

tutors.push(questions(ID.P__B__F__TUTOR, ID.P__B__FULL));
tutors.push(questions(ID.P__B__P__TUTOR, ID.P__B__PART));
tutors.push(questions(ID.P__B__E__TUTOR, ID.P__B__EVENING));
tutors.push(questions(ID.P__M__F__TUTOR, ID.P__B__FULL));
tutors.push(questions(ID.P__M__P__TUTOR, ID.P__B__PART));
tutors.push(questions(ID.P__M__E__TUTOR, ID.P__B__EVENING));
tutors.push(questions(ID.P__S__F__TUTOR, ID.P__B__FULL));
tutors.push(questions(ID.P__S__P__TUTOR, ID.P__B__PART));
tutors.push(questions(ID.P__S__E__TUTOR, ID.P__B__EVENING));

module.exports = tutors;