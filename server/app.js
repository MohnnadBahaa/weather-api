    const express = require('express');
    const db = require('../database/index');
    const fs = require('fs');
    const {
    	fetchWeatherDataApi
    } = require('./apiRequest');
    const {
    	destractionWeatherFeed,
    } = require('./helperFunction');

    const app = express();

    // this function it will excute each 5 min 
    setInterval(() => {

    	fetchWeatherDataApi((result) => {
    		let weatherFeed = destractionWeatherFeed(result);

    		let writeFilePromise = new Promise((resolve, reject) => {
    			// write the data into wetherFeed it already Async
    			fs.writeFile("wetherFeed.json", JSON.stringify(weatherFeed), (err, res) => {
    				if (err) {
    					reject(err)
    				}
    				resolve();
    				console.log("File has been saved ...");
    			});

    		})

    		let InsertIntoDbpromise = new Promise((resolve, reject) => {
    			// insert data into weather Table 
    			db.insertWetherLog(weatherFeed, (err, result) => {
    				if (err) {
    					reject(err);
    				}
    				resolve();
    				console.log("Data has been saved in weather table");
    			});
    		})

    		// read the file after writeFilePromise/ InsertIntoDbpromise excute async
    		Promise.all([InsertIntoDbpromise, writeFilePromise]).then(() => {
    			fs.readFile("wetherFeed.json", 'utf8', (err, res) => {
    				if (err) throw err;
    				console.log('====================================');
    				console.log("log file after save the file and inserted into database ...\n", JSON.parse(res));
    				console.log('====================================');

    			})
    		})

    	});

    }, 300000);

    const port = process.env.PORT || 4000;
    app.listen(port, () => console.log(`server running on port ${port}`));