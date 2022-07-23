
//https://api.openweathermap.org/data/2.5/onecall?lat=39.00&lon=-77.10&exclude=hourly,daily&appid=dc3920461b04771c8cc1a599a987d5e5

// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');
const humidity = document.querySelector('#humidity');

const dayOneTemp = document.querySelector('#day1-temperature');
const dayOneWeatherIcon = document.querySelector('#day1-weather-icon');
const dayOneCaptionDesc = document.querySelector('#day1-condition');
const dayOneHumidity = document.querySelector('#day1-humidity');

const dayTwoTemp = document.querySelector('#day2-temperature');
const dayTwoWeatherIcon = document.querySelector('#day2-weather-icon');
const dayTwoCaptionDesc = document.querySelector('#day2-condition');
const dayTwoHumidity = document.querySelector('#day2-humidity');

const dayThreeTemp = document.querySelector('#day3-temperature');
const dayThreeWeatherIcon = document.querySelector('#day3-weather-icon');
const dayThreeCaptionDesc = document.querySelector('#day3-condition');
const dayThreeHumidity = document.querySelector('#day3-humidity');
const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=39&lon=-77.04&exclude=hourly,minutely&appid=d26cadee2be0b0548e24934fba75e01f&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.current.temp.toFixed(0)}</strong>`;
  
    let iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    let desc = weatherData.current.weather[0].description;
    let humidityDesc = weatherData.current.humidity;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    humidity.textContent = humidityDesc

    dayOneTemp.innerHTML = `<strong>${weatherData.daily[0].temp['day'].toFixed(0)}</strong>`;
  
    iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[0].weather[0].icon}.png`;
    console.log(weatherData.daily[0].weather[0].icon)
    desc = weatherData.daily[0].weather[0].description;
    humidityDesc = weatherData.daily[0].humidity;
    
    dayOneWeatherIcon.setAttribute('src', iconsrc);
    dayOneWeatherIcon.setAttribute('alt', desc);
    dayOneCaptionDesc.textContent = desc;
    dayOneHumidity.textContent = humidityDesc

    dayTwoTemp.innerHTML = `<strong>${weatherData.daily[1].temp['day'].toFixed(0)}</strong>`;
  
    iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[1].weather[0].icon}.png`;
    desc = weatherData.daily[0].weather[0].description;
    humidityDesc = weatherData.daily[0].humidity;
    
    dayTwoWeatherIcon.setAttribute('src', iconsrc);
    dayTwoWeatherIcon.setAttribute('alt', desc);
    dayTwoCaptionDesc.textContent = desc;
    dayTwoHumidity.textContent = humidityDesc

    dayThreeTemp.innerHTML = `<strong>${weatherData.daily[2].temp['day'].toFixed(0)}</strong>`;
  
    iconsrc = `https://openweathermap.org/img/w/${weatherData.daily[2].weather[0].icon}.png`;
    desc = weatherData.daily[0].weather[0].description;
    humidityDesc = weatherData.daily[0].humidity;
    
    dayThreeWeatherIcon.setAttribute('src', iconsrc);
    dayThreeWeatherIcon.setAttribute('alt', desc);
    dayThreeCaptionDesc.textContent = desc;
    dayThreeHumidity.textContent = humidityDesc



  }
