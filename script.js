let now = new Date();
let hour = now.getHours();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let minutes = now.getMinutes();
let h4 = document.querySelector("h4");
h4.innerHTML = `${day} ${hour}:${minutes}`;
function showTemperature(response) {
  changeCity.innerHTML = response.data.name;
  document.querySelector(".newTemperature").innerHTML = `${Math.round(
    response.data.main.temp
  )}°C`;
  document.querySelector(
    ".smalltext"
  ).innerHTML = `${response.data.main.humidity}%`;
  document.querySelector(
    "#description"
  ).innerHTML = `${response.data.weather[0].description}`;
  document.querySelector("#windSpeed").innerHTML = `Wind: ${Math.round(
    response.data.wind.speed
  )} km/h`;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  if (searchInput.value) {
    changeCity.innerHTML = searchInput.value;
    let newCity = `${searchInput.value}`;
    let apiKey = "e68957dd092b69d6f402650ba1584ada";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
  }
}
function currentTemperature() {}
let form1 = document.querySelector("#search-form");
form1.addEventListener("submit", search);
function showPosition(position) {
  let lat = `${position.coords.latitude}`;
  let lon = `${position.coords.longitude}`;
  let apiKey = "e68957dd092b69d6f402650ba1584ada";
  let apiUrl2 = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl2);
  axios.get(apiUrl2).then(showTemperature);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);
