module.exports = (app) => {
  const func = (name) => {
    return app.get('sequelize').models[name]
  }
  return func
}
