const form = document.querySelector("form");
const details = document.querySelector(".details");
const cardInfo = document.querySelector("div .card");
const weatherImg = document.querySelector("img.time");
const weatherIcon = document.querySelector(".icon img");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    cardInfo.classList.remove("d-none");

    const city = form.city.value;
    const weatherData = await getWeatherInfo(city);
    updateUI(city.toUpperCase(), weatherData);

    form.reset();
});

async function getWeatherInfo(city) {
    const cityData = await getCity(city);
    const key = await cityData.Key;
    return await getWeather(key);
}

function updateUI(cityName, weatherData) {
    weatherImg.setAttribute("src", weatherData.isDayTime ? "day.svg" : "night.svg");
    weatherIcon.setAttribute("src", `icons/${weatherData.WeatherIcon}.svg`);

    details.innerHTML = `
  <h5 class="my-3">${cityName}</h5>
  <div class="my-3">${weatherData.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weatherData.Temperature.Metric.Value}</span>
    <span>&deg;C</span>
  </div>`;
}
