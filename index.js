/*
Aviable cities:

Dnipropetrovsk
Kiev
L'viv (L\'viv)
Odessa
*/

var Weather = require('./weather_module');

var city = 'Dnipropetrovsk';

var weather = new Weather(city);

weather.getWeather();