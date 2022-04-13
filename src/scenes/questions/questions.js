const study = require('./study');
const practice = require('./practice');
const applications = require('./applications');
const debts = require('./debts');

const questions = [];

questions.push(...study('PROFESSORS'));
questions.push(...study('SCHOLARSHIP'));
questions.push(...study('VKR'));
questions.push(...study('GIA'));
questions.push(...study('PAYMENT'));
questions.push(...study('SESSION'));

questions.push(...practice('PAPERWORK'));
questions.push(...practice('DATES'));
questions.push(...practice('EXAM'));
questions.push(...practice('TUTOR'));

questions.push(...applications('CHOOSE_PROFILE', false));
questions.push(...applications('MOBILITY_MODULE', true));
questions.push(...applications('DISCIPLINE_OF_CHOICE', true));
questions.push(...applications('ELECTIVE', false));

questions.push(...debts('ADDITIONAL_SESSION'));
questions.push(...debts('COMMISSION'));
questions.push(...debts('NUMBER_OF_DEBTS'));

module.exports = questions;
