const { Service } = require('nuxt-lynx')
const model = require('./model')
module.exports = (app) => {
  new Service('user', model(app)).configure(app)
}
