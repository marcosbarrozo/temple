
//https://api.openweathermap.org/data/2.5/onecall?lat=39.00&lon=-77.10&exclude=hourly,daily&appid=dc3920461b04771c8cc1a599a987d5e5

// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#condition');
const humidity = document.querySelector('#humidity');
Bethesda,
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
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
    const desc = weatherData.current.weather[0].description;
    const humidityDesc = weatherData.current.humidity;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    humidity.textContent = humidityDesc



  }
