const express = require('express')
const bodyParser = require('body-parser')
const logger = require('../utils/logger')
const {
  createConfigureFunction,
  createServiceFunction,
  createModelFunction,
  createLogServiceFunction,
} = require('./functions')

const app = express()
app.use(bodyParser.json())

app.logger = logger
app.configure = createConfigureFunction(app)
app.service = createServiceFunction(app)
app.model = createModelFunction(app)
app.logServiceCreated = createLogServiceFunction(app)

app.start = () => {
  const sequelize = app.get('sequelize')
  if (sequelize) {
    const models = sequelize.models
    Object.keys(models).forEach((name) => {
      if ('associate' in models[name]) {
        models[name].associate(models)
      }
    })
  }
}

module.exports = app
