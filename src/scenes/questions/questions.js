const study = require('./study');
const practice = require('./practice');

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

module.exports = questions;