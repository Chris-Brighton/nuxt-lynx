module.exports = (name, app) => {
  const sequelize = app.get('sequelize')
  const { INTEGER, STRING, TEXT } = app.get('DataTypes')

  const model = sequelize.define(
    name,
    {
      id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: STRING,
        allowNull: false,
      },
      path: {
        type: TEXT,
        allowNull: false,
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true
        },
      },
    }
  )
  return model
}