const apiKey = '707cdd032cce383eafaa48cc07f37ed7'; 
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');
const weatherIcon = document.getElementById('weather-icon');

// Weather icons mapping
const weatherIcons = {
  '01d': 'wi-day-sunny',
  '01n': 'wi-night-clear',
  '02d': 'wi-day-cloudy',
  '02n': 'wi-night-alt-cloudy',
  '03d': 'wi-cloud',
  '03n': 'wi-cloud',
  '04d': 'wi-cloudy',
  '04n': 'wi-cloudy',
  '09d': 'wi-showers',
  '09n': 'wi-showers',
  '10d': 'wi-day-rain',
  '10n': 'wi-night-alt-rain',
  '11d': 'wi-thunderstorm',
  '11n': 'wi-thunderstorm',
  '13d': 'wi-snow',
  '13n': 'wi-snow',
  '50d': 'wi-fog',
  '50n': 'wi-fog',
};

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  const data = await response.json();

  if (response.status === 404) {
    alert('City not found');
    return;
  }

  cityName.textContent = data.name;
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  description.textContent = data.weather[0].description;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed} km/h`;

  // Set weather icon
  const iconCode = data.weather[0].icon;
  weatherIcon.innerHTML = `<i class="wi ${weatherIcons[iconCode]}"></i>`;
}

searchBtn.addEventListener('click', () => {
  checkWeather(searchBox.value);
});


checkWeather('London');