const apiKey = "uVK9P7zfAWytwtJ5evhaGYwI4IZYp6zv";

async function getCity(city) {
    const endpoint = "https://dataservice.accuweather.com/locations/v1/cities/search?";
    const params = new URLSearchParams({apikey: apiKey, q: city});
    const response = await fetch(endpoint + params, {method: "GET"});
    const data = await response.json();
    return data[0];
}

async function getWeather(locationKey) {
    const endpoint = "https://dataservice.accuweather.com/currentconditions/v1/";
    const params = new URLSearchParams({apikey: apiKey});
    const response = await fetch(endpoint + locationKey + "?" + params, {method: "GET"});
    const data = await response.json();
    return data[0];
}
