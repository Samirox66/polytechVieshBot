//const group = require('./group');

const ID = require('../config/constants');
const branch = require('./modules/branch');

const scenes = [];

scenes.push(
  branch(
    ID.MAIN,
    [
      { id: ID.STUDY, text: 'Учебный вопрос' },
      { id: ID.TRANSFERS, text: 'Восстановление и переводы' },
      { id: ID.PRACTICE, text: 'Практика' },
    ],
    'Выберите раздел',
    true
  )
);
scenes.push(
  branch(
    ID.STUDY,
    [
      { id: ID.S__BACHELOR, text: 'Бакалавриат' },
      { id: ID.S__MASTER, text: 'Магистратура' },
      { id: ID.S__SPECIALIST, text: 'Специалитет' },
      { id: ID.MAIN, text: 'Назад' },
    ],
    'Ступень обучения'
  )
);
scenes.push(
  branch(
    ID.PRACTICE,
    [
      { id: ID.P__BACHELOR, text: 'Бакалавриат' },
      { id: ID.P__MASTER, text: 'Магистратура' },
      { id: ID.P__SPECIALIST, text: 'Специалитет' },
      { id: ID.MAIN, text: 'Назад' },
    ],
    'Ступень обучения'
  )
);
scenes.push(...require('./branches/studyStage'));
scenes.push(...require('./branches/studyTime'));
scenes.push(...require('./branches/applications'));
scenes.push(...require('./branches/debts'));

scenes.push(...require('./questions/questions'));

//scenes.push(group('ECONOMY_COURSE1_STUDY', 'ECONOMY_COURSE1'));

module.exports = scenes;
