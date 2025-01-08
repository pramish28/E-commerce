const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','sharma',{
 dialect: 'mysql',
 host: 'localhost'
});

 module.exports = sequelize;

