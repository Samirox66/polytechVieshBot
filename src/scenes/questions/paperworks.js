const ID = require('../../config/constants');
const questions = require('../modules/questions');

const paperworks = [];

paperworks.push(questions(ID.P__B__F__PAPERWORK, ID.P__B__FULL));
paperworks.push(questions(ID.P__B__P__PAPERWORK, ID.P__B__PART));
paperworks.push(questions(ID.P__B__E__PAPERWORK, ID.P__B__EVENING));
paperworks.push(questions(ID.P__M__F__PAPERWORK, ID.P__B__FULL));
paperworks.push(questions(ID.P__M__P__PAPERWORK, ID.P__B__PART));
paperworks.push(questions(ID.P__M__E__PAPERWORK, ID.P__B__EVENING));
paperworks.push(questions(ID.P__S__F__PAPERWORK, ID.P__B__FULL));
paperworks.push(questions(ID.P__S__P__PAPERWORK, ID.P__B__PART));
paperworks.push(questions(ID.P__S__E__PAPERWORK, ID.P__B__EVENING));

module.exports = paperworks;