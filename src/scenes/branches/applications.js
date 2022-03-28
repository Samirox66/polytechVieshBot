const ID = require("../../config/constants");
const branch = require("../modules/branch");

const applications = [];

applications.push(branch(
  ID.S__B__F__APPLICATIONS,
  [
    { id: ID.B__F__A__CHOOSE_PROFILE, text: 'Выбор профиля' },
    { id: ID.B__F__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.B__F__A__MOBILITY_MODULE, text: 'Модуль мобильности' },
    { id: ID.B__F__A__ELECTIVE, text: 'Факультатив' },
    { id: ID.S__B__FULL, text: 'Назад' },
  ],
  'Выберите раздел'
));
applications.push(branch(
  ID.S__B__P__APPLICATIONS,
  [
    { id: ID.B__P__A__CHOOSE_PROFILE, text: 'Выбор профиля' },
    { id: ID.B__P__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.B__P__A__MOBILITY_MODULE, text: 'Модуль мобильности' },
    { id: ID.B__P__A__ELECTIVE, text: 'Факультатив' },
    { id: ID.S__B__PART, text: 'Назад' },
  ],
  'Выберите раздел'
));
applications.push(branch(
  ID.S__B__E__APPLICATIONS,
  [
    { id: ID.B__E__A__CHOOSE_PROFILE, text: 'Выбор профиля' },
    { id: ID.B__E__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.B__E__A__MOBILITY_MODULE, text: 'Модуль мобильности' },
    { id: ID.B__E__A__ELECTIVE, text: 'Факультатив' },
    { id: ID.S__B__EVENING, text: 'Назад' },
  ],
  'Выберите раздел'
));
applications.push(branch(
  ID.S__S__F__APPLICATIONS,
  [
    { id: ID.S__F__A__CHOOSE_PROFILE, text: 'Выбор профиля' },
    { id: ID.S__F__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.S__F__A__MOBILITY_MODULE, text: 'Модуль мобильности' },
    { id: ID.S__F__A__ELECTIVE, text: 'Факультатив' },
    { id: ID.S__S__FULL, text: 'Назад' },
  ],
  'Выберите раздел'
));
applications.push(branch(
  ID.S__S__P__APPLICATIONS,
  [
    { id: ID.S__P__A__CHOOSE_PROFILE, text: 'Выбор профиля' },
    { id: ID.S__P__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.S__P__A__MOBILITY_MODULE, text: 'Модуль мобильности' },
    { id: ID.S__P__A__ELECTIVE, text: 'Факультатив' },
    { id: ID.S__S__PART, text: 'Назад' },
  ],
  'Выберите раздел'
));
applications.push(branch(
  ID.S__S__E__APPLICATIONS,
  [
    { id: ID.S__E__A__CHOOSE_PROFILE, text: 'Выбор профиля' },
    { id: ID.S__E__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.S__E__A__MOBILITY_MODULE, text: 'Модуль мобильности' },
    { id: ID.S__E__A__ELECTIVE, text: 'Факультатив' },
    { id: ID.S__S__EVENING, text: 'Назад' },
  ],
  'Выберите раздел'
));
applications.push(branch(
  ID.S__M__F__APPLICATIONS,
  [
    { id: ID.M__F__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.M__F__A__MOBILITY_MODULE, text: 'Модуль моюильности' },
    { id: ID.S__M__FULL, text: 'Назад' },
  ],
  'Выберите раздел'
));
applications.push(branch(
  ID.S__M__P__APPLICATIONS,
  [
    { id: ID.M__P__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.M__P__A__MOBILITY_MODULE, text: 'Модуль моюильности' },
    { id: ID.S__M__PART, text: 'Назад' },
  ],
  'Выберите раздел'
));
applications.push(branch(
  ID.S__M__E__APPLICATIONS,
  [
    { id: ID.M__E__A__DISCIPLINE_OF_CHOICE, text: 'Дисциплины по выбору' },
    { id: ID.M__E__A__MOBILITY_MODULE, text: 'Модуль моюильности' },
    { id: ID.S__M__EVENING, text: 'Назад' },
  ],
  'Выберите раздел'
));

module.exports = applications;