const ID = require('../../config/constants');
const branch = require('../modules/branch');

const studyStage = [];

studyStage.push(branch(
  ID.S__BACHELOR,
  [
    { id: ID.S__B__FULL, text: 'Очно' },
    { id: ID.S__B__PART, text: 'Очно-заочно' },
    { id: ID.S__B__EVENING, text: 'Заочно' },
    { id: ID.STUDY, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
studyStage.push(branch(
  ID.S__MASTER,
  [
    { id: ID.S__M__FULL, text: 'Очно' },
    { id: ID.S__M__PART, text: 'Очно-заочно' },
    { id: ID.S__M__EVENING, text: 'Заочно' },
    { id: ID.STUDY, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
studyStage.push(branch(
  ID.S__SPECIALIST,
  [
    { id: ID.S__S__FULL, text: 'Очно' },
    { id: ID.S__S__PART, text: 'Очно-заочно' },
    { id: ID.S__S__EVENING, text: 'Заочно' },
    { id: ID.STUDY, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
studyStage.push(branch(
  ID.P__BACHELOR,
  [
    { id: ID.P__B__FULL, text: 'Очно' },
    { id: ID.P__B__PART, text: 'Очно-заочно' },
    { id: ID.P__B__EVENING, text: 'Заочно' },
    { id: ID.PRACTICE, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
studyStage.push(branch(
  ID.P__MASTER,
  [
    { id: ID.P__M__FULL, text: 'Очно' },
    { id: ID.P__M__PART, text: 'Очно-заочно' },
    { id: ID.P__M__EVENING, text: 'Заочно' },
    { id: ID.PRACTICE, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
studyStage.push(branch(
  ID.P__SPECIALIST,
  [
    { id: ID.P__S__FULL, text: 'Очно' },
    { id: ID.P__S__PART, text: 'Очно-заочно' },
    { id: ID.P__S__EVENING, text: 'Заочно' },
    { id: ID.PRACTICE, text: 'Назад' },
  ],
  'Выберите форму обучения'
));

module.exports = studyStage;