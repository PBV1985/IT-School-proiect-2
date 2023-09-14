const bucharest = document.querySelector(".dropdown-menu .bucharest");
const timisoara = document.querySelector(".dropdown-menu .timisoara");
const oradea = document.querySelector(".dropdown-menu .oradea");
const iasi = document.querySelector(".dropdown-menu .iasi");
const sibiu = document.querySelector(".dropdown-menu .sibiu");
const suceava = document.querySelector(".dropdown-menu .suceava")

function updateCurrentCity(city) {
    const currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = city;
}

function updateWeather (city){
    localStorage.setItem("city", city)
    updateCurrentCity(city);
    displayCurrentWeather(city);
    displayWeatherForecast(city);
    
}

if(bucharest){bucharest.addEventListener("click", function(){
    updateWeather("București");
});}
if(timisoara){timisoara.addEventListener("click", function(){
    updateWeather("Timișoara")
});}
if(oradea){oradea.addEventListener("click", function(){
    updateWeather("Oradea");
});}
if(iasi){iasi.addEventListener("click", function(){
    updateWeather("Iași");
});}
if(sibiu){sibiu.addEventListener("click", function(){
    updateWeather("Sibiu");
})}
if(suceava){suceava.addEventListener("click", function(){
    updateWeather("Suceava");
})}
