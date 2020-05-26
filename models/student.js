const sequelize = require('../config/connectDb');
const { DataTypes } = require('sequelize');

const Student = sequelize.define('student', {
    student_id: {
        //field: 'student_id',
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    dtb: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // class_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'class',
    //         key: 'class_id'
    //     }
    // }
}, {
    tableName: 'student',
    timestamps: false,
    underscored: true
});

module.exports = Student;
// Description:
// - The name of the model. The model will be stored in sequelize.models under this name
// - Define a new model, representing a table in the DB