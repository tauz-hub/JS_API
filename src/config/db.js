const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('games', 'root', 'Papamen123!', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    logging: false,
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to MySQL using Sequelize');
    })
    .catch(err => {
        console.error('Error connecting to MySQL using Sequelize:', err);
    });

module.exports = sequelize;
