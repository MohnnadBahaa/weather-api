const mysql = require('mysql');


// create database connection 
const db = mysql.createConnection({

    host: "db4free.net",
    user: "admin94",
    password: "12345678",
    database: "weather_api"
});

// connect the database 
db.connect((err, res) => {
    if (err) throw err;
    console.log('====================================');
    console.log('Database has been connacted ...');
    console.log('====================================');

});


module.exports = db;