const createConfigureFunction = require('./configure')
const createServiceFunction = require('./service')
const createModelFunction = require('./model')
const createLogServiceFunction = require('./logServiceCreated')
module.exports = {
  createConfigureFunction,
  createServiceFunction,
  createModelFunction,
  createLogServiceFunction,
}
