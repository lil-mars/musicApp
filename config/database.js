const Sequelize = require('sequelize');
module.exports = new Sequelize('music', 'sa', 'Aviador1', {
    host: 'localhost',
    dialect:'mssql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

});