const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const LogRobo = sequelize.define(
  'LogRobo',
  {
    date_time_end: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    obs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'tb_log_robos',
    timestamps: false,
  }
)

module.exports = LogRobo
