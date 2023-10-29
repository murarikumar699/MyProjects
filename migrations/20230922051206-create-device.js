'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Devices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      inTheBox: {
        type: Sequelize.STRING
      },
      modelNumber: {
        type: Sequelize.STRING
      },
      modelName: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      simType: {
        type: Sequelize.STRING
      },
      touchScreen: {
        type: Sequelize.STRING
      },
      operationgSystem: {
        type: Sequelize.STRING
      },
      processorType: {
        type: Sequelize.STRING
      },
      internalStrorage: {
        type: Sequelize.STRING
      },
      ram: {
        type: Sequelize.STRING
      },
      networkType: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING, //laptop,mobile
        comment: 'laptop,mobile'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Devices');
  }
};