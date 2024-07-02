const temperature = 7; 
const windSpeed = 7; 
const conditions = "Partly cloudy and light rain";
document.getElementById('temperature').textContent = `${temperature} °C`;
document.getElementById('windspeed').textContent = `${windSpeed} km/h`;
document.querySelector("#condition").textContent = conditions;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
}

function displayWeather() {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        document.getElementById('windchill').textContent = windChill.toFixed(2) + ' °C';
    } else {
        document.getElementById('windchill').textContent = 'N/A';
    }
}

document.addEventListener('DOMContentLoaded', displayWeather);