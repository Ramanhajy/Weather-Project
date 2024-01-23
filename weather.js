const apikey = "c917d43da58988b570ff54a30e8599ef"; // write the activated api key here
const apiurl = "https://api.openweathermap.org/data/2.5/weather"; // here we should write the api url
// The API has been done by Daryan 

const SearchBox = document.querySelector(".search input");
const SearchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function CheckWeather() {  // checking the current weather from the API
    const response = await fetch(apiurl + `?q=${SearchBox.value}&appid=${apikey}&units=metric`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        console.log("404");
    } else {
        var data = await response.json();


        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            WeatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            WeatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main == "Rain") {
            WeatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            WeatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            WeatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            WeatherIcon.src = "images/snow.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


}

SearchBtn.addEventListener("click", () => {
    CheckWeather();
})

SearchBox.addEventListener('keypress', function (e) {  // Also this part has been done by Daryan
    if (e.key === 'Enter') {
      CheckWeather();
    }
});