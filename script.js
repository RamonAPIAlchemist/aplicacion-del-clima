// JavaScript
function toggleDarkMode() {
    var container = document.getElementById("container");
    container.classList.toggle("dark-mode");
}

function getWeather() {
    const apiKey = 'fedeb857f5d03651741fa7d63896f06e'; // Reemplaza con tu propia clave API
    const ciudad = document.getElementById('cityInput').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const temperatura = data.main.temp;
                const descripcionClima = data.weather[0];
                const descripcion = descripcionClima.main + ' (' + descripcionClima.description + ')';
                const pais = data.sys.country ? `, ${data.sys.country}` : ''; // Agregar país si está disponible
                document.getElementById('weatherInfo').innerHTML = `
                    <p>Temperatura en ${ciudad}${pais}: ${temperatura}°C</p>
                    <p>Descripción: ${descripcion}</p>
                `;
            } else {
                document.getElementById('weatherInfo').innerHTML = 'Ciudad no encontrada';
            }
        })
        .catch(error => console.log(error));
}
