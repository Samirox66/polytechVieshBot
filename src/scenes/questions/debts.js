const ID = require('../../config/constants');
const questions = require('../modules/questions');

const debts = (questionGroup) => {
  const debts = [];

  debts.push(
    questions(ID[`B__F__D__${questionGroup}`], ID.S__B__F__APPLICATIONS)
  );
  debts.push(
    questions(ID[`B__P__D__${questionGroup}`], ID.S__B__P__APPLICATIONS)
  );
  debts.push(
    questions(ID[`B__E__D__${questionGroup}`], ID.S__B__E__APPLICATIONS)
  );
  debts.push(
    questions(ID[`M__F__D__${questionGroup}`], ID.S__M__F__APPLICATIONS)
  );
  debts.push(
    questions(ID[`M__P__D__${questionGroup}`], ID.S__M__P__APPLICATIONS)
  );
  debts.push(
    questions(ID[`M__E__D__${questionGroup}`], ID.S__M__E__APPLICATIONS)
  );
  debts.push(
    questions(ID[`S__F__D__${questionGroup}`], ID.S__S__F__APPLICATIONS)
  );
  debts.push(
    questions(ID[`S__P__D__${questionGroup}`], ID.S__S__P__APPLICATIONS)
  );
  debts.push(
    questions(ID[`S__E__D__${questionGroup}`], ID.S__S__E__APPLICATIONS)
  );

  return debts;
};

module.exports = debts;
