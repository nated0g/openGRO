'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('telemetry', {
      time: {
        type: Sequelize.DATE,
        primaryKey: true
      },
      location: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      tempC: {
        type: Sequelize.REAL
      },
      RH: {
        type: Sequelize.REAL
      },
      CO2: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('telemetry');
  }
};