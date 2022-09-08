let location;

navigator.geolocation.getCurrentPosition(function(position) {
    lat = position.coords.latitude;
    lng = position.coords.longitude;

    let coordinates;

    let weather = document.querySelector('#weather');
    async function place(e) {
        coordinates = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lng}&limit=5&appid=a11f231a7b3e80c9cd6a126aee6f41cc`;
        let response = await fetch(coordinates, { method: 'GET' });
        let responseCoordinates = await fetch(coordinates, { method: 'GET' });
        let responseCoordinatesResult = await response.json();
        if (responseCoordinates.ok) {
            getCoordinates(responseCoordinatesResult);
            loadWeather();
        } else {
            weather.innerHTML = responseCoordinatesResult.message;
        }
    }
    async function loadWeather(e) {
        const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=a11f231a7b3e80c9cd6a126aee6f41cc`
        let response = await fetch(server, { method: 'GET' });
        let responseResult = await response.json();
        if (response.ok) {
            getWeather(responseResult);
        } else {
            weather.innerHTML = responseResult.message;
        }
    }

    function getCoordinates(dataPlace) {
        location = dataPlace[0].name;
    }

    function getWeather(data) {

        let temp = Math.round(data.main.temp);
        let tempFells = Math.round(data.main.temp);
        let weatherStatus = data.weather[0].main;
        let weatherIcon = data.weather[0].icon;
        let humidity = data.main.humidity;
        let template = `
        <div className="weather__header">
            <div class="weater__icon"><img src="https://openweathermap.org/img/w/${weatherIcon}.png" <div class="weather__anotation">${weatherStatus}</div>
        </div>
        <div class="weather__temp">Temp: ${temp}°C</div>
        <div class="weather__tempFells">Feels like temp: ${tempFells}°C</div>

        <div class="weather__city">${location}</div>
        <div class="weather__humidity">Humidity: ${humidity} %</div>
`;

        weather.innerHTML = template;
    }
    place();
});
let buttonWeather = document.querySelector('.weather__button');

buttonWeather.addEventListener('click', () => {

    let city = document.querySelector('.weather__input').value;
    async function loadWeather(e) {

        const server = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=a11f231a7b3e80c9cd6a126aee6f41cc`
        let response = await fetch(server, { method: 'GET' });
        let responseResult = await response.json();
        console.log(responseResult);
        if (response.ok) {
            getWeather(responseResult);
        } else {
            weather.innerHTML = responseResult.message;
        }
    }

    function getWeather(data) {
        let location = data.name;
        let temp = Math.round(data.main.temp);
        let tempFells = Math.round(data.main.temp);
        let weatherStatus = data.weather[0].main;
        let weatherIcon = data.weather[0].icon;
        let humidity = data.main.humidity;
        let template = `
        
        <div className="weather__header">
            <div class="weater__icon"><img src="https://openweathermap.org/img/w/${weatherIcon}.png" <div class="weather__anotation">${weatherStatus}</div>
        </div>
        <div class="weather__temp">Temp: ${temp}°C</div>
        <div class="weather__tempFells">Feels like temp: ${tempFells}°C</div>

        <div class="weather__city">${location}</div>
        <div class="weather__humidity">Humidity: ${humidity} %</div>
 
`;
        weather.innerHTML = template;
    }
    loadWeather();
})