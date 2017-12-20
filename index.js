const Application = require('./lib/application');
const Agent = require('./lib/agent');
const egg = require('egg');

Object.assign(exports, egg);

exports.Application = Application;
exports.Agent = Agent;