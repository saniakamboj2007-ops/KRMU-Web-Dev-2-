const API_KEY = "2c4659f15d3380f7ea8bb7511491d134";

const logArea = document.getElementById("log");

function logger(msg){
console.log(msg);
logArea.innerHTML += msg + "\n";
}

logger("Application Started");

loadHistory();

async function getWeatherData(){

const city = document.getElementById("cityInput").value;

if(city === ""){
alert("Enter city name");
return;
}

logger("Fetching weather...");

try{

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

const response = await fetch(url);

logger("API Response received");

const data = await response.json();

if(data.cod !== 200){
throw new Error(data.message);
}

showWeather(data);

saveCity(city);

}
catch(error){

document.getElementById("weatherResult").innerHTML =
"<p style='color:red'>City not found</p>";

logger("Error: " + error.message);
}

logger("Fetch completed");
}

function showWeather(data){

const html = `
<b>City:</b> ${data.name}<br>
<b>Temperature:</b> ${data.main.temp} °C<br>
<b>Weather:</b> ${data.weather[0].main}<br>
<b>Humidity:</b> ${data.main.humidity}%<br>
<b>Wind Speed:</b> ${data.wind.speed} m/s
`;

document.getElementById("weatherResult").innerHTML = html;

}

function saveCity(city){

let cities = JSON.parse(localStorage.getItem("cityHistory")) || [];

if(!cities.includes(city)){
cities.push(city);
localStorage.setItem("cityHistory",JSON.stringify(cities));
}

loadHistory();

}

function loadHistory(){

let cities = JSON.parse(localStorage.getItem("cityHistory")) || [];

const historyDiv = document.getElementById("history");

historyDiv.innerHTML = "";

cities.forEach(c => {

const btn = document.createElement("button");

btn.innerText = c;

btn.onclick = () => {

document.getElementById("cityInput").value = c;

getWeatherData();

};

historyDiv.appendChild(btn);

});

}