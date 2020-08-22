require('dotenv').config();

const Sequelize = require('sequelize');

//DB_NAME, DB_USER, and DB_PW are saved in the .env file, and may be diffent for each implementation of this project
//based on your database name, user, and password
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
