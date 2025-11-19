let API_KEY = "fd54f0a1ff2425995421617e162ce5bd";
let Input = document.getElementById("Input");
let getData = document.getElementById("getresult");
let result = document.getElementById("result");
let error = document.getElementById("error");

getData.addEventListener("click", weatherData);

async function weatherData() {
  const city = Input.value.trim();
  error.textContent = "";

  if (!city) {
    alert("Please Enter City Name");
    return;
  }

  let API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error("City Not Found!");

    const data = await response.json();
    console.log(data);

    result.classList.remove("hidden");

    result.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-lg">
        <h2 class="text-3xl font-bold text-center mb-4">${data.name}, ${data.sys.country}</h2>

        <div class="flex justify-center mb-4">
          <img 
            src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
            class="w-32"
          />
        </div>

        <h3 class="text-xl text-center font-semibold capitalize">
          ${data.weather[0].description}
        </h3>

        <div class="mt-6 grid grid-cols-2 gap-4">

          <div class="p-4 bg-blue-600 rounded-lg text-white text-center">
            <strong>Temperature</strong>
            <p class="text-2xl font-bold">${data.main.temp}°C</p>
          </div>

          <div class="p-4 bg-green-600 rounded-lg text-white text-center">
            <strong>Humidity</strong>
            <p class="text-2xl font-bold">${data.main.humidity}%</p>
          </div>

          <div class="p-4 bg-yellow-500 rounded-lg text-white text-center">
            <strong>Pressure</strong>
            <p class="text-2xl font-bold">${data.main.pressure} hPa</p>
          </div>

          <div class="p-4 bg-red-600 rounded-lg text-white text-center">
            <strong>Wind Speed</strong>
            <p class="text-2xl font-bold">${data.wind.speed} m/s</p>
          </div>

        </div>
      </div>
    `;
  } catch (err) {
    console.log(err);
    error.innerHTML = `<p class="text-red-600 font-bold text-center">City Not Found!</p>`;
  }
}
