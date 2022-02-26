'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.query("SELECT create_hypertable('page_loads', 'time');");
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
