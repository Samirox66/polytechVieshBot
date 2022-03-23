const course = require('./course');
const group = require('./group');

const scenes = [];

scenes.push(require('./majors'));
scenes.push(require('./economy'));
scenes.push(require('./security'));

scenes.push(course('ECONOMY_COURSE1', 'ECONOMY'));
scenes.push(course('ECONOMY_COURSE2', 'ECONOMY'));
scenes.push(course('ECONOMY_COURSE3', 'ECONOMY'));
scenes.push(course('ECONOMY_COURSE4', 'ECONOMY'));

scenes.push(course('SECURITY_COURSE1', 'SECURITY'));
scenes.push(course('SECURITY_COURSE2', 'SECURITY'));
scenes.push(course('SECURITY_COURSE3', 'SECURITY'));
scenes.push(course('SECURITY_COURSE4', 'SECURITY'));

scenes.push(group('ECONOMY_COURSE1_STUDY', 'ECONOMY_COURSE1'));

module.exports = scenes;