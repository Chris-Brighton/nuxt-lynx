
const createDefaultModel = require('../models/upload')
const UploadHandler = require('../handler/UploadHandler')
const fileUpload = require('express-fileupload')

module.exports = class UploadService {
  constructor(name = 'upload', model = null) {
    this.name = name
    this.model = model
  }

  configure(app) {
    if (!this.model) {
      this.model = createDefaultModel(this.name, app)
    }
    this.handler = new UploadHandler(this.model)
    const { create, get, find, remove } = this.handler
    const base = ['/', this.name].join('')
    const full = ['/', this.name, '/', ':id'].join()
    app.use(fileUpload())
    app.post(base, create)
    app.get(full, get)
    app.get(base, find)
    app.delete(full, remove)
    app.set(`[SERVICE:${this.name}]`, this)
    app.logServiceCreated(this.name)
  }
}