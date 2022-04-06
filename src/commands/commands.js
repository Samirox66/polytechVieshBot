const addAdmin = require('./addAdmin');
const message = require('./message');
const onAddQuestion = require('./onAddQuestion');
const onDeleteQuestion = require('./onDeleteQuestion');

const commands = {
  addAdmin,
  message,
  onAddQuestion,
  onDeleteQuestion,
};

module.exports = commands;
