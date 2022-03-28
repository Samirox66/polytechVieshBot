const ID = require('../../config/constants');
const questions = require('../modules/questions');

const payments = [];

payments.push(questions(ID.S__B__F__PAYMENT, ID.P__B__FULL));
payments.push(questions(ID.S__B__P__PAYMENT, ID.P__B__PART));
payments.push(questions(ID.S__B__E__PAYMENT, ID.P__B__EVENING));
payments.push(questions(ID.S__M__F__PAYMENT, ID.P__B__FULL));
payments.push(questions(ID.S__M__P__PAYMENT, ID.P__B__PART));
payments.push(questions(ID.S__M__E__PAYMENT, ID.P__B__EVENING));
payments.push(questions(ID.S__S__F__PAYMENT, ID.P__B__FULL));
payments.push(questions(ID.S__S__P__PAYMENT, ID.P__B__PART));
payments.push(questions(ID.S__S__E__PAYMENT, ID.P__B__EVENING));

module.exports = payments;