const NuxtLynx = require('./lib/app/NuxtLynx')
const {ModelHandler, UploadHandler} = require('./lib/handler')
const {Service, UploadService} = require('./lib/service')
const parse = require('./lib/utils/parse')
const nuxtPlugins = require('./lib/plugins')


module.exports = {
  NuxtLynx,
  ModelHandler,
  UploadHandler,
  Service,
  UploadService,
  parse,
  nuxtPlugins,
}
