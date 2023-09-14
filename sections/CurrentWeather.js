function displayCurrentWeather(city){
  const currentWeatherEndpoint = getCurrentWeatherEndpoint(city);
  fetch(currentWeatherEndpoint)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const { name, dt, main, weather, wind} = data;
    const day = getDayOfTheWeek(dt);
    const hours = getHour(dt);
    const temperature = Math.round(main.temp);
    const realFeel = Math.round(main.feels_like);
    const weatherDescription = weather[0].description;
    const weatherIcon = getWeatherIcon(weather[0].icon);
    const windspeed = Math.round(windToKmPerHour(wind.speed));
    let currentWeatherContainer = document.querySelector(".current-weather");
    currentWeatherContainer.innerHTML =`<div class="vremea">
    <div class="name">${name}</div>
    <div class="day">${day}, ${hours}</div>
    <div class="temperature">
      <div class="grade">${temperature}°C
      <img class= "img" src="${weatherIcon}" />
    </div>
  </div>
  <div class="vremea2">
    <p class="realFeel">Real feel: ${realFeel}°C</p>
    <p class="descriere">${weatherDescription}</p>
    <p class="vant">Vânt:${windspeed} km/h</p>
  </div>`;
    
  })
}
