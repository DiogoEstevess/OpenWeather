function Obter_Cidade() {
  var cidade = document.getElementById('barra_pesquisa');

  document.getElementById('cidade2').style.display = "none";
  document.getElementById('cidade').style.visibility = "visible";

  let weather = {
    apiKey: "74d90f8a0dc103698bf1cb634e5dc227",

    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade.value + "&units=metric&appid=" + this.apiKey + "&lang=pt"
      )
        .then((response) => {
          if (!response.ok) {
            alert("...Cidade não encontrada...");
            throw new Error("...Cidade não encontrada...");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, pressure, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".cidade").innerText = name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".descricao").innerText = description;
      document.querySelector(".temperatura").innerText = temp + "°C";
      document.querySelector(".humidade").innerText = "Humidade: " + humidity + "%";
      document.querySelector(".vento").innerText = "Vento: " + speed + " km/h";
      document.querySelector(".pressao").innerHTML = "Pressão Atmosférica: " + pressure + "hPa";
    },
  };

  let forecast = {
    apiKey: "74d90f8a0dc103698bf1cb634e5dc227",

    fetchForecast: function (city) {
      fetch(
        "http://api.openweathermap.org/data/2.5/forecast?q=" + cidade.value + "&units=metric&appid=" + this.apiKey + "&lang=pt"
      )
        .then((response) => response.json())
        .then((data) => this.displayForecast(data));
    },

    displayForecast: function (data) {
      for (i = 8, j = 2; i < data.list.length; i += 8, j++) {
        document.querySelector('.quadrado' + j).innerHTML = '';

        let flex = document.createElement('div');
        flex.setAttribute('class', 'flex');
        document.querySelector('.quadrado' + j).appendChild(flex);

        let img = document.createElement('img');
        img.setAttribute('class', 'icon');
        img.src = "https://openweathermap.org/img/wn/" + data.list[i].weather[0].icon + ".png";
        flex.appendChild(img);

        navigator.geolocation.getCurrentPosition

        let desc = document.createElement('div');
        desc.setAttribute('class', 'descricao');
        desc.innerText = data.list[i].weather[0].description;
        flex.appendChild(desc);

        let temp = document.createElement('div');
        temp.setAttribute('class', 'temperatura');
        temp.innerText = data.list[i].main.temp + "ºC";
        document.querySelector('.quadrado' + j).appendChild(temp);

        let press = document.createElement('div');
        press.setAttribute('class', 'pressao');
        press.innerText = "Pressão Atmosférica: " + data.list[i].main.pressure + "hPa";
        document.querySelector('.quadrado' + j).appendChild(press);

        let hum = document.createElement('div');
        hum.setAttribute('class', 'humidade');
        hum.innerText = "Humidade: " + data.list[i].main.humidity + "%";
        document.querySelector('.quadrado' + j).appendChild(hum);

        let vento = document.createElement('div');
        vento.setAttribute('class', 'vento');
        vento.innerText = "Vento: " + data.list[i].wind.speed;
        document.querySelector('.quadrado' + j).appendChild(vento);
      }
    }
  }
  weather.fetchWeather(cidade);
  forecast.fetchForecast(cidade);
};

function Localizacao() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&units=metric&appid=74d90f8a0dc103698bf1cb634e5dc227&lang=pt"
    )
      .then((response) => response.json())
      .then((data) => displayWeather2(data));
  })
}

function displayWeather2(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, pressure, humidity } = data.main;
  const { speed } = data.wind;
  document.querySelector(".cidade1").innerText = name;
  document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".descricao1").innerText = description;
  document.querySelector(".temperatura1").innerText = temp + "°C";
  document.querySelector(".humidade1").innerText = "Humidade: " + humidity + "%";
  document.querySelector(".vento1").innerText = "Vento: " + speed + " km/h";
  document.querySelector(".pressao1").innerHTML = "Pressão Atmosférica: " + pressure + "hPa";
}

Localizacao();