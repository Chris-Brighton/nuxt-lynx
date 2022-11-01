module.exports = (app) => {
  const func = (name) => {
    return app.get(`[SERVICE:${name}]`)
  }
  return func
}
