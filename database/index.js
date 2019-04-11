const db = require('./config');

/** 
 * @param {*} wetherFeed it is an object has a spec data 
 * 
 */

const insertWetherLog = (wetherFeed, callback) => {

	//  sql query to insert the data into database 
	let sqlInsertQuery = `INSERT INTO  weather  (last_updated ,weather_status ,current_temp ,wind_speed ) 
                        	VALUES('${wetherFeed.last_updated}', '${wetherFeed.weather_status}',
							'${wetherFeed.current_temp}', '${wetherFeed.wind_speed}');`;

	db.query(sqlInsertQuery, (err, result) => {
		if (err) {
			console.log('Error during insert into weather table');
			callback(err, null);
		} else {
			callback(null, result);
		}
	})
}


module.exports.insertWetherLog = insertWetherLog;