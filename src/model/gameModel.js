const { DataTypes } = require('sequelize');
const tester = require ('../index')
const sequelize = require('../config/db');

// Verifique se o sequelize está definido
if (!sequelize || !sequelize.define) {
    throw new Error('Sequelize is not properly initialized.');
}

const Game = sequelize.define('Games', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    platform: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Game;
