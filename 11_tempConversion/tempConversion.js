const convertToCelsius = function(fahrenheitTemp) {
  const temperatureInCelsius = (fahrenheitTemp - 32) * (5 / 9);
  if(temperatureInCelsius !== Math.floor(temperatureInCelsius)) return +temperatureInCelsius.toFixed(1);
  else { return temperatureInCelsius; }
};

const convertToFahrenheit = function(celsiusTemp) {
  const temperatureInFahrenheit = (celsiusTemp * (9 / 5) + 32);
  if(temperatureInFahrenheit !== Math.floor(temperatureInFahrenheit)) return +temperatureInFahrenheit.toFixed(1);
  else { return temperatureInFahrenheit; }
};
convertToCelsius(32);
convertToCelsius(100);
convertToCelsius(-100);
convertToFahrenheit(0);
convertToFahrenheit(73.2);
convertToFahrenheit(-10);
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
