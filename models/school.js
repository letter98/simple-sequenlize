const sequelize = require('../config/connectDb');
const { DataTypes } = require('sequelize');
const ClassSV = require('./classSV');

const School = sequelize.define('school', {
    school_id: {
        //field: 'school_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    }   
}, {
    tableName: 'school',
    timestamps: false,
    underscored: true
});

//One-To-Many relationships
School.hasMany(ClassSV, {foreignKey: 'school_id'});
ClassSV.belongsTo(School, {foreignKey: 'school_id'});

module.exports = School;