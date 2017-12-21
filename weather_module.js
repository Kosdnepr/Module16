/*
needs module 'needle' be installed: https://www.npmjs.com/package/needle
*/

var needle = require('needle');

var Weather = function(city) {
	this.city = city;
};

Weather.prototype.getWeather = function() {

	var URL = 'http://api.wunderground.com/api/7ada34f225aac135/forecast/lang:EN/q/Ukraine/' + this.city + '.json';
	console.log('Weather forecast for ' + this.city);
	
	needle.get(URL, function(err, res){
		if (err) throw err;

		//select data according to API
		var data = res.body.forecast.simpleforecast.forecastday;
		var temp_data;
		for(var prop in data) {
			temp_data = data[prop];
			console.log('\nDate : ' + temp_data.date.day + '.' + temp_data.date.month + '.' + temp_data.date.year);
			console.log('Weather conditions: ' + temp_data.conditions);
			console.log('t min: ' + temp_data.low.celsius + ' °C');
			console.log('t max: ' + temp_data.high.celsius + ' °C');
		}
	});

	return this;
};

module.exports = Weather;

