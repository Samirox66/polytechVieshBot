const ID = require('../../config/constants');
const questions = require('../modules/questions');

const applications = (questionGroup, isMag) => {
  const applications = [];

  applications.push(
    questions(ID[`B__F__A__${questionGroup}`], ID.S__B__F__APPLICATIONS)
  );
  applications.push(
    questions(ID[`B__P__A__${questionGroup}`], ID.S__B__P__APPLICATIONS)
  );
  applications.push(
    questions(ID[`B__E__A__${questionGroup}`], ID.S__B__E__APPLICATIONS)
  );
  if (isMag) {
    applications.push(
      questions(ID[`M__F__A__${questionGroup}`], ID.S__M__F__APPLICATIONS)
    );
    applications.push(
      questions(ID[`M__P__A__${questionGroup}`], ID.S__M__P__APPLICATIONS)
    );
    applications.push(
      questions(ID[`M__E__A__${questionGroup}`], ID.S__M__E__APPLICATIONS)
    );
  }
  applications.push(
    questions(ID[`S__F__A__${questionGroup}`], ID.S__S__F__APPLICATIONS)
  );
  applications.push(
    questions(ID[`S__P__A__${questionGroup}`], ID.S__S__P__APPLICATIONS)
  );
  applications.push(
    questions(ID[`S__E__A__${questionGroup}`], ID.S__S__E__APPLICATIONS)
  );

  return applications;
};

module.exports = applications;
