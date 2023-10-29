'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Device extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Device.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    inTheBox: DataTypes.STRING,
    modelNumber: DataTypes.STRING,
    modelName: DataTypes.STRING,
    color: DataTypes.STRING,
    simType: DataTypes.STRING,
    touchScreen: DataTypes.STRING,
    operationgSystem: DataTypes.STRING,
    internalStrorage: DataTypes.STRING,
    ram: DataTypes.STRING,
    networkType: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Device',
  });
  return Device;
};