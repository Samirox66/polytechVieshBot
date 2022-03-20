const course = require('./modules/course');
const group = require('./group');

const scenes = [];

scenes.push(require('./majors'));
scenes.push(require('./economy'));
scenes.push(require('./security'));

scenes.push(course('ECONOMY_COURSE1_ID', 'ECONOMY_ID'));
scenes.push(course('ECONOMY_COURSE2_ID', 'ECONOMY_ID'));
scenes.push(course('ECONOMY_COURSE3_ID', 'ECONOMY_ID'));
scenes.push(course('ECONOMY_COURSE4_ID', 'ECONOMY_ID'));

scenes.push(course('SECURITY_COURSE1_ID', 'SECURITY_ID'));
scenes.push(course('SECURITY_COURSE2_ID', 'SECURITY_ID'));
scenes.push(course('SECURITY_COURSE3_ID', 'SECURITY_ID'));
scenes.push(course('SECURITY_COURSE4_ID', 'SECURITY_ID'));

scenes.push(group('ECONOMY_COURSE1_STUDY_ID', 'ECONOMY_COURSE1_ID'));

module.exports = scenes;