const { NuxtLynx } = require('nuxt-lynx')
const Sequelize = require('sequelize')
const server = new NuxtLynx()
const services = require('./services')
server.sequelize(
  new Sequelize({
    dialect: 'sqlite',
    logging: false,
    storage: `${process.env.PWD}/database.sqlite`,
    query: { raw: true },
    define: {
      freezeTableName: true,
      underscored: false,
      createdAt: false,
      updatedAt: false,
    },
  })
)

const app = server.app()
app.configure(services)
app.start()

export default {
  path: '/api',
  handler: app,
}
