const apikey = "30e27ab21203a427e80bf95df9a4282c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

let search = document.querySelector(".search button");
async function checkWeather() {
  let cityName = document.querySelector(".search input").value;
  const res = await fetch(
    apiUrl + `&appid=${apikey}&q=${cityName}&units=metric`,
  );
  let data = await res.json();
  console.log(data);
  const error = document.querySelector(".error");

  if (res.status == 404) {
    error.innerText = "City not found";
    return;
  } else {
    let wheatherIcon = document.querySelector(".weather_imgs");
    document.querySelector(".weather h1").innerText = `${data.main.temp}°C`;
    document.querySelector(".weather h2").innerText = data.name;
    document.querySelector(".humidity h3").innerText = data.main.humidity + "%";
    document.querySelector(".windSpeed h3").innerText =
      data.wind.speed + "km/h";

    wheatherIcon.src = `weather_imgs/${data.weather[0].main.toLowerCase()}.png`;

    error.innerText = "";
  }
  error.innerText = "";
}
search.addEventListener("click", checkWeather);
