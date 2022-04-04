const ID = require('../../config/constants');
const branch = require('../modules/branch');

const studyTime = [];
studyTime.push(
  branch(
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
      { id: ID.S__B__F__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__BACHELOR, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
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
      { id: ID.S__B__P__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__BACHELOR, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
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
      { id: ID.S__B__E__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__BACHELOR, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
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
      { id: ID.S__M__F__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__MASTER, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
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
      { id: ID.S__M__P__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__MASTER, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
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
      { id: ID.S__M__E__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__MASTER, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
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
      { id: ID.S__S__F__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__SPECIALIST, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
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
      { id: ID.S__S__P__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__SPECIALIST, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
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
      { id: ID.S__S__E__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.S__SPECIALIST, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__B__FULL,
    [
      { id: ID.P__B__F__DATES, text: 'Сроки практики' },
      { id: ID.P__B__F__EXAM, text: 'Сдача практики' },
      { id: ID.P__B__F__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__B__F__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__B__F__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__BACHELOR, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__B__PART,
    [
      { id: ID.P__B__P__DATES, text: 'Сроки практики' },
      { id: ID.P__B__P__EXAM, text: 'Сдача практики' },
      { id: ID.P__B__P__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__B__P__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__B__P__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__BACHELOR, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__B__EVENING,
    [
      { id: ID.P__B__E__DATES, text: 'Сроки практики' },
      { id: ID.P__B__E__EXAM, text: 'Сдача практики' },
      { id: ID.P__B__E__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__B__E__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__B__E__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__BACHELOR, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__M__FULL,
    [
      { id: ID.P__M__F__DATES, text: 'Сроки практики' },
      { id: ID.P__M__F__EXAM, text: 'Сдача практики' },
      { id: ID.P__M__F__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__M__F__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__M__F__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__MASTER, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__M__PART,
    [
      { id: ID.P__M__P__DATES, text: 'Сроки практики' },
      { id: ID.P__M__P__EXAM, text: 'Сдача практики' },
      { id: ID.P__M__P__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__M__P__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__M__P__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__MASTER, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__M__EVENING,
    [
      { id: ID.P__M__E__DATES, text: 'Сроки практики' },
      { id: ID.P__M__E__EXAM, text: 'Сдача практики' },
      { id: ID.P__M__E__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__M__E__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__M__E__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__MASTER, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__S__FULL,
    [
      { id: ID.P__S__F__DATES, text: 'Сроки практики' },
      { id: ID.P__S__F__EXAM, text: 'Сдача практики' },
      { id: ID.P__S__F__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__S__F__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__S__F__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__SPECIALIST, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__S__PART,
    [
      { id: ID.P__S__P__DATES, text: 'Сроки практики' },
      { id: ID.P__S__P__EXAM, text: 'Сдача практики' },
      { id: ID.P__S__P__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__S__P__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__S__P__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__SPECIALIST, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);
studyTime.push(
  branch(
    ID.P__S__EVENING,
    [
      { id: ID.P__S__E__DATES, text: 'Сроки практики' },
      { id: ID.P__S__E__EXAM, text: 'Сдача практики' },
      { id: ID.P__S__E__PAPERWORK, text: 'Оформление документов' },
      { id: ID.P__S__E__TUTOR, text: 'Руководитель практики' },
      { id: ID.P__S__E__OTHER, text: 'Свой вопрос', link: true },
      { id: ID.P__SPECIALIST, text: 'Назад' },
    ],
    'Выберите раздел'
  )
);

module.exports = studyTime;
