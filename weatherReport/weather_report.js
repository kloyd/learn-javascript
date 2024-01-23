const apiKey = 'fa55682f6596cbf56987304b0bdd8780'; // Replace 'YOUR_API_KEY' with your actual API key
let city = "";
let apiUrl = "";
function showweatherDetails(event) {
    event.preventDefault();
 
    city = document.getElementById('city').value;
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                          <p>Temperature: ${data.main.temp} &#8451;</p>
                          <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
           console.error('Error fetching weather:', error);
         const weatherInfo = document.getElementById('weatherInfo');
         weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}


document.getElementById('weatherForm').addEventListener('submit', showweatherDetails);
