const user = require('./user')
module.exports = (app) => {
  app.configure(user)
}
