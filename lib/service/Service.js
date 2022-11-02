const ModelHandler = require('../handler/ModelHandler')
const parse = require('../utils/parse')
const _ = require('lodash')
module.exports = class Service {
  constructor(name, model, paginate = { default: 50 }) {
    this.name = name
    this.model = model
    this.paginate = paginate
    this.handler = new ModelHandler(model, {
      limit: paginate.default,
      offset: 0,
    })
    this.extraRoutes = []
  }

  parseRequest(request) {
    const { params } = request
    return parse(params, this.model)
  }

  addRoute(type, route, asyncFunc) {
    this.routes.push({ type, route, asyncFunc })
  }

  /**
   * @private
   * @param {Object} app
   */
  _buildRoutes(app) {
    for (let i = 0; i < this.extraRoutes.length; i++) {
      const { type, route, asyncFunc } = this.extraRoutes[i]
      app[type](`/${this.name}${route}`, asyncFunc)
    }
  }

  configure(app) {
    this._buildRoutes(app)
    if (this.model) {
      const { create, get, find, update, remove } = this.handler
      const base = ['/', this.name].join('')
      const full = ['/', this.name, '/', ':id'].join('')
      app.post(base, create)
      app.get(full, get)
      app.get(base, find)
      app.delete(full, remove)
      app.put(full, update)
    }
    app.set(`[SERVICE:${this.name}]`, this)
    app.logServiceCreated(this.name)
  }
}
