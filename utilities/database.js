const Sequelize = require('sequelize')

var sequelize = new Sequelize("dakikayir", "safa", "123", {
  host: "localhost",
  dialect: 'mssql',
  port: 51527,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    instanceName: "localhost\\MSSQLSERVER16",
    domain: "localhost", 
    options: {
      encrypt: true
    }
  },
  define: {
    hooks: {
      beforeCreate(model) {
        model.AppId = 3;
      }
    }
  }
})

module.exports = sequelize;