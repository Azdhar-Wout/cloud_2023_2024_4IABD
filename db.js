const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  // TODO: database connection string
  process.env.INTERNAL_BDD_LINK,
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
