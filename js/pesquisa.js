function Obter_Cidade() {
  var cidade = document.getElementById('barra_pesquisa');
  document.getElementById('cidade').style.visibility = "visible";

  let weather = {
    apiKey: "74d90f8a0dc103698bf1cb634e5dc227",

    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="+ cidade.value+"&units=metric&appid=" + this.apiKey + "&lang=pt"
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
        "http://api.openweathermap.org/data/2.5/forecast?q=Leiria&units=metric&appid=" + this.apiKey + "&lang=pt"
      )
        .then((response) => response.json())
        .then((data) => this.displayForecast(data));
    },

    displayForecast: function (data) {
      for (i = 8; i < data.list.length; i+=8) {
        const { temp, humidity, pressure } = data.list[i].main;
        const { icon, description } = data.list[i].weather[0];
        const { speed } = data.list[i].wind;

        

        document.querySelector(".dia1icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".dia1desc").innerText = description;
        document.querySelector(".dia1temp").innerText = temp + "°C";
        document.querySelector(".dia1press").innerText = "Pressão Atmosférica: " + pressure + "hPa";
        document.querySelector(".dia1hum").innerText = "Humidade: " + humidity + "%";
        document.querySelector(".dia1vento").innerText = "Vento: " + speed + " km/h";
    }
    }
  }
  weather.fetchWeather(cidade);
  forecast.fetchForecast(cidade);
};

/*document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });*/
