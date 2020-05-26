const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/connectDb');
const Student = require('./models/student');
const ClassSV = require('./models/classSV');
const School = require('./models/school');
// Test db connect
sequelize.authenticate()
    .then(() => console.log('database connected...'))
    .catch(err => console.log('Error: ' + err))

const app = express();
const PORT = process.env.PORT || 8888;

//Test routing
app.get('/index', (req, res) => {
    res.send('Response from Node server');
});


// Test query select all
app.get('/student', async (req, res) => {
    try {
        const result = await Student.findAll();
        const result_full = await ClassSV.findAll({include: [School, Student]} );

        res.status(200).json(result_full);
    } catch (err) {
        console.log('Error: ' + err);
        res.send('Error...');
    }
});

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
