const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,     // .env file
    process.env.DB_USER,     // 
    process.env.DB_PASSWORD, 
    {
      host: 'localhost',     // Database host
      dialect: 'mysql',      // Database dialect
      port: 3306             // Database port (default for MySQL)
    }
  );
  
  module.exports = sequelize;