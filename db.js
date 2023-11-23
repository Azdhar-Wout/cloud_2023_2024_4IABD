const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  // TODO: database connection string
  'postgres://cloud_bdd_pu0p_user:mpg7uSzMlurURwrQAeCNyasYf8hMFM5O@dpg-clfl7uer45ec73bsu26g-a/cloud_bdd_pu0p', 
  USERNAME,
  PASSWORD,
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
