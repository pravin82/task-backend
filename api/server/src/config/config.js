require('dotenv').config();


module.exports = {

  development: {
    database: 'task_dev',
    username: 'root',
    password: 'Pravin@1996',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  test: {
    database: 'task_dev',
    username: 'root',
    password: 'Pravin@1996',
    host: '127.0.0.1',
    dialect: 'postgres'
  },

  production: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
};