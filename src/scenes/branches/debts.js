const ID = require("../../config/constants");
const branch = require("../modules/branch");

const debts = [];

debts.push(branch(
  ID.S__B__F__DEBTS,
  [
    { id: ID.B__F__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.B__F__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.B__F__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__B__FULL, text: 'Назад' },
  ],
  'Выберите раздел'
));
debts.push(branch(
  ID.S__B__P__DEBTS,
  [
    { id: ID.B__P__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.B__P__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.B__P__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__B__PART, text: 'Назад' },
  ],
  'Выберите раздел'
));
debts.push(branch(
  ID.S__B__E__DEBTS,
  [
    { id: ID.B__E__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.B__E__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.B__E__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__B__EVENING, text: 'Назад' },
  ],
  'Выберите раздел'
));
debts.push(branch(
  ID.S__M__F__DEBTS,
  [
    { id: ID.M__F__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.M__F__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.M__F__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__M__FULL, text: 'Назад' },
  ],
  'Выберите раздел'
));
debts.push(branch(
  ID.S__M__P__DEBTS,
  [
    { id: ID.M__P__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.M__P__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.M__P__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__M__PART, text: 'Назад' },
  ],
  'Выберите раздел'
));
debts.push(branch(
  ID.S__M__E__DEBTS,
  [
    { id: ID.M__E__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.M__E__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.M__E__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__M__EVENING, text: 'Назад' },
  ],
  'Выберите раздел'
));
debts.push(branch(
  ID.S__S__F__DEBTS,
  [
    { id: ID.S__F__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.S__F__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.S__F__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__S__FULL, text: 'Назад' },
  ],
  'Выберите раздел'
));
debts.push(branch(
  ID.S__S__P__DEBTS,
  [
    { id: ID.S__P__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.S__P__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.S__P__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__S__PART, text: 'Назад' },
  ],
  'Выберите раздел'
));
debts.push(branch(
  ID.S__S__E__DEBTS,
  [
    { id: ID.S__E__D__ADDITIONAL_SESSION, text: 'Срок дополнительной сесии' },
    { id: ID.S__E__D__COMMISSION, text: 'Срок комиссии' },
    { id: ID.S__E__D__NUMBER_OF_DEBTS, text: 'Узнать количество долгов' },
    { id: ID.S__S__EVENING, text: 'Назад' },
  ],
  'Выберите раздел'
));

module.exports = debts;