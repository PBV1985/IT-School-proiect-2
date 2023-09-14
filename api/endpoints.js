const apiKey= "8334d5d2b510d62a532f5eabe87c666f";

function getCurrentWeatherEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${apiKey}`
  }
function getForecastEndpoint(city) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${apiKey}`
  }

function getCurrentWeatherEndpoint(country) {`https://api.openweathermap.org/data/2.5/weather?q=${country}&lang=ro&units=metric&appid=${apiKey}`
  return 
}