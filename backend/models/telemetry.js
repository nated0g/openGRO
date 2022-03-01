'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Telemetry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Telemetry.init({
    time: {
      type: DataTypes.DATE,
      primaryKey: true
    },
    location: {
      type: DataTypes.STRING, 
      primaryKey: true
    },
    tempC: DataTypes.REAL,
    RH: DataTypes.REAL,
    CO2: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Telemetry',
    tableName: 'telemetry',
    timestamps: false
  });
  return Telemetry;
};