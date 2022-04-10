const addAdmin = require('./addAdmin');
const message = require('./message');
const onAddQuestion = require('./onAddQuestion');
const onDeleteQuestion = require('./onDeleteQuestion');
const onChangeTutor = require('./onChangeTutor');

const commands = {
  addAdmin,
  message,
  onAddQuestion,
  onDeleteQuestion,
  onChangeTutor,
};

module.exports = commands;
