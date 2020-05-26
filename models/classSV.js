const sequelize = require('../config/connectDb');
const { DataTypes } = require('sequelize');
const Student = require('./student');

const ClassSV = sequelize.define('class', {
    class_id: {
        //field: 'class_id',
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
    tableName: 'class',
    timestamps: false,
    underscored: true
});

//One-To-Many relationships
ClassSV.hasMany(Student, {foreignKey: 'class_id'});
Student.belongsTo(ClassSV, {foreignKey: 'class_id'});

module.exports = ClassSV;