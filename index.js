const NuxtLynx = require('./lib/app/NuxtLynx')
const Service = require('./lib/service/Service')
const plugins = require('./lib/plugins')
// const UploadService = require('./lib/service/UploadService')

module.exports = {
  NuxtLynx,
  Service,
  nuxtPlugins: plugins,
  // UploadService,
}
