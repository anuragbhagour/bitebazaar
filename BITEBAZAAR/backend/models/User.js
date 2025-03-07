const{DataTypes} = require('sequelize');
const sequelize = require('../db/database');

const User = sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    profilePic: {
      type: DataTypes.STRING, // Store URL or file path
      defaultValue: ''
    },
    location: {
      type: DataTypes.STRING,
      defaultValue: ''
    },
    bio: {
      type: DataTypes.TEXT,
      defaultValue: ''
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  }, {
    timestamps: false // Disable automatic createdAt & updatedAt fields
  });
  
  module.exports = User;

