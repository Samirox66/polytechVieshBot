//const group = require('./group');

const ID = require('../config/constants');
const branch = require('./branch');

const scenes = [];

scenes.push(branch(
  ID.MAIN,
  [
    { id: ID.STUDY, text: 'Учебный вопрос' },
    { id: ID.TRANSFERS, text: 'Восстановление и переводы' },
    { id: ID.PRACTICE, text: 'Практика' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.STUDY,
  [
    { id: ID.S__BACHELOR, text: 'Бакалавриат' },
    { id: ID.S__MASTER, text: 'Магистратура' },
    { id: ID.S__SPECIALIST, text: 'Специалитет' },
    { id: ID.MAIN, text: 'Назад' },
  ],
  'Ступень обучения'
));
scenes.push(branch(
  ID.PRACTICE,
  [
    { id: ID.P__BACHELOR, text: 'Бакалавриат' },
    { id: ID.P__MASTER, text: 'Магистратура' },
    { id: ID.P__SPECIALIST, text: 'Специалитет' },
    { id: ID.MAIN, text: 'Назад' },
  ],
  'Ступень обучения'
));
scenes.push(branch(
  ID.S__BACHELOR,
  [
    { id: ID.S__B__FULL, text: 'Очно' },
    { id: ID.S__B__PART, text: 'Очно-заочно' },
    { id: ID.S__B__EVENING, text: 'Заочно' },
    { id: ID.STUDY, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
scenes.push(branch(
  ID.S__MASTER,
  [
    { id: ID.S__M__FULL, text: 'Очно' },
    { id: ID.S__M__PART, text: 'Очно-заочно' },
    { id: ID.S__M__EVENING, text: 'Заочно' },
    { id: ID.STUDY, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
scenes.push(branch(
  ID.S__SPECIALIST,
  [
    { id: ID.S__S__FULL, text: 'Очно' },
    { id: ID.S__S__PART, text: 'Очно-заочно' },
    { id: ID.S__S__EVENING, text: 'Заочно' },
    { id: ID.STUDY, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
scenes.push(branch(
  ID.P__BACHELOR,
  [
    { id: ID.P__B__FULL, text: 'Очно' },
    { id: ID.P__B__PART, text: 'Очно-заочно' },
    { id: ID.P__B__EVENING, text: 'Заочно' },
    { id: ID.PRACTICE, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
scenes.push(branch(
  ID.P__MASTER,
  [
    { id: ID.P__M__FULL, text: 'Очно' },
    { id: ID.P__M__PART, text: 'Очно-заочно' },
    { id: ID.P__M__EVENING, text: 'Заочно' },
    { id: ID.PRACTICE, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
scenes.push(branch(
  ID.P__SPECIALIST,
  [
    { id: ID.P__S__FULL, text: 'Очно' },
    { id: ID.P__S__PART, text: 'Очно-заочно' },
    { id: ID.P__S__EVENING, text: 'Заочно' },
    { id: ID.PRACTICE, text: 'Назад' },
  ],
  'Выберите форму обучения'
));
scenes.push(branch(
  ID.S__B__FULL,
  [
    { id: ID.S__B__F__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__B__F__DEBTS, text: 'Долги' },
    { id: ID.S__B__F__GIA, text: 'ГИА' },
    { id: ID.S__B__F__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__B__F__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__B__F__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__B__F__VKR, text: 'Задание на ВКР' },
    { id: ID.S__B__F__SESSION, text: 'Сроки сессии' },
    { id: ID.S__B__F__OTHER, text: 'Свой вопрос' },
    { id: ID.S__BACHELOR, text: 'Назад' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.S__B__PART,
  [
    { id: ID.S__B__P__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__B__P__DEBTS, text: 'Долги' },
    { id: ID.S__B__P__GIA, text: 'ГИА' },
    { id: ID.S__B__P__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__B__P__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__B__P__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__B__P__VKR, text: 'Задание на ВКР' },
    { id: ID.S__B__P__SESSION, text: 'Сроки сессии' },
    { id: ID.S__B__P__OTHER, text: 'Свой вопрос' },
    { id: ID.S__BACHELOR, text: 'Назад' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.S__B__EVENING,
  [
    { id: ID.S__B__E__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__B__E__DEBTS, text: 'Долги' },
    { id: ID.S__B__E__GIA, text: 'ГИА' },
    { id: ID.S__B__E__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__B__E__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__B__E__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__B__E__VKR, text: 'Задание на ВКР' },
    { id: ID.S__B__E__SESSION, text: 'Сроки сессии' },
    { id: ID.S__B__E__OTHER, text: 'Свой вопрос' },
    { id: ID.S__BACHELOR, text: 'Назад' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.S__M__FULL,
  [
    { id: ID.S__M__F__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__M__F__DEBTS, text: 'Долги' },
    { id: ID.S__M__F__GIA, text: 'ГИА' },
    { id: ID.S__M__F__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__M__F__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__M__F__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__M__F__VKR, text: 'Задание на ВКР' },
    { id: ID.S__M__F__SESSION, text: 'Сроки сессии' },
    { id: ID.S__M__F__OTHER, text: 'Свой вопрос' },
    { id: ID.S__MASTER, text: 'Назад' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.S__M__PART,
  [
    { id: ID.S__M__P__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__M__P__DEBTS, text: 'Долги' },
    { id: ID.S__M__P__GIA, text: 'ГИА' },
    { id: ID.S__M__P__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__M__P__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__M__P__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__M__P__VKR, text: 'Задание на ВКР' },
    { id: ID.S__M__P__SESSION, text: 'Сроки сессии' },
    { id: ID.S__M__P__OTHER, text: 'Свой вопрос' },
    { id: ID.S__MASTER, text: 'Назад' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.S__M__EVENING,
  [
    { id: ID.S__M__E__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__M__E__DEBTS, text: 'Долги' },
    { id: ID.S__M__E__GIA, text: 'ГИА' },
    { id: ID.S__M__E__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__M__E__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__M__E__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__M__E__VKR, text: 'Задание на ВКР' },
    { id: ID.S__M__E__SESSION, text: 'Сроки сессии' },
    { id: ID.S__M__E__OTHER, text: 'Свой вопрос' },
    { id: ID.S__MASTER, text: 'Назад' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.S__S__FULL,
  [
    { id: ID.S__S__F__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__S__F__DEBTS, text: 'Долги' },
    { id: ID.S__S__F__GIA, text: 'ГИА' },
    { id: ID.S__S__F__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__S__F__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__S__F__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__S__F__VKR, text: 'Задание на ВКР' },
    { id: ID.S__S__F__SESSION, text: 'Сроки сессии' },
    { id: ID.S__S__F__OTHER, text: 'Свой вопрос' },
    { id: ID.S__SPECIALIST, text: 'Назад' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.S__S__PART,
  [
    { id: ID.S__S__P__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__S__P__DEBTS, text: 'Долги' },
    { id: ID.S__S__P__GIA, text: 'ГИА' },
    { id: ID.S__S__P__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__S__P__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__S__P__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__S__P__VKR, text: 'Задание на ВКР' },
    { id: ID.S__S__P__SESSION, text: 'Сроки сессии' },
    { id: ID.S__S__P__OTHER, text: 'Свой вопрос' },
    { id: ID.S__SPECIALIST, text: 'Назад' },
  ],
  'Выберите раздел'
));
scenes.push(branch(
  ID.S__S__EVENING,
  [
    { id: ID.S__S__E__APPLICATIONS, text: 'Заявления' },
    { id: ID.S__S__E__DEBTS, text: 'Долги' },
    { id: ID.S__S__E__GIA, text: 'ГИА' },
    { id: ID.S__S__E__PAYMENT, text: 'Оплата обучения' },
    { id: ID.S__S__E__PROFESSORS, text: 'Преподаватели' },
    { id: ID.S__S__E__SCHOLARSHIP, text: 'Стипендии' },
    { id: ID.S__S__E__VKR, text: 'Задание на ВКР' },
    { id: ID.S__S__E__SESSION, text: 'Сроки сессии' },
    { id: ID.S__S__E__OTHER, text: 'Свой вопрос' },
    { id: ID.S__SPECIALIST, text: 'Назад' },
  ],
  'Выберите раздел'
));


//scenes.push(group('ECONOMY_COURSE1_STUDY', 'ECONOMY_COURSE1'));

module.exports = scenes;