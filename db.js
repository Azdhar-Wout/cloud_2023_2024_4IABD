const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgres://cloud_bdd_pu0p_user:mpg7uSzMlurURwrQAeCNyasYf8hMFM5O@dpg-clfl7uer45ec73bsu26g-a/cloud_bdd_pu0p', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
