const service = (name) => {
  return `const { Service } = require('nuxt-lynx')
const model = require('./model')
module.exports = (app) => {
  new Service('${name.text}', model(app)).configure(app)
}
`
}

const model = (name) => {
  return `module.exports = (app) => {
  const sequelize = app.get('sequelize')
  const { INTEGER, STRING, TEXT } = app.get('DataTypes')
  const ${name.js} = sequelize.define(
    '${name.db}',
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        },
      },
    }
  );
  ${name.js}.associate = (models) => {}
  return ${name.js}
}
`
}

module.exports = {
  service,
  model,
}
