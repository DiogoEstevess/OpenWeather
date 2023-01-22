/*var button = document.getElementById("#button_search");
    button.onclick = function() {
      var cidade = $('#barra_pesquisa').val();
      let weather = {
        apiKey: "74d90f8a0dc103698bf1cb634e5dc227",
      
        fetchWeather: function (city) {
          fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&units=metric&appid=" + this.apiKey + "&lang=pt"
          )
            .then((response) => {
              if (!response.ok) {
                alert("No weather found.");
                throw new Error("No weather found.");
              }
              return response.json();
            })
            .then((data) => this.displayWeather(data));
        },
      
        displayWeather: function (data) {
          const { name } = data;
          const { icon, description } = data.weather[0];
          const { temp, humidity } = data.main;
          const { speed } = data.wind;
          document.querySelector(".cidade").innerText = name;
          document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
          document.querySelector(".descricao").innerText = description;
          document.querySelector(".temperatura").innerText = temp + "°C";
          document.querySelector(".humidade").innerText = "Humidade: " + humidity + "%";
          document.querySelector(".vento").innerText = "Vento: " + speed + " km/h";
        },
      };
      weather.fetchWeather(cidade);
    }*/


function Obter_Cidade() {
  alert("Estou aqui..........");
  let cidade = document.getElementById('#barra_pesquisa'); /*$('barra_pesquisa').val();*/
  alert("A cidade inserida foi: " + cidade);
  let weather = {
    apiKey: "74d90f8a0dc103698bf1cb634e5dc227",
  
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&units=metric&appid=" + this.apiKey + "&lang=pt"
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
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".cidade").innerText = name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".descricao").innerText = description;
      document.querySelector(".temperatura").innerText = temp + "°C";
      document.querySelector(".humidade").innerText = "Humidade: " + humidity + "%";
      document.querySelector(".vento").innerText = "Vento: " + speed + " km/h";
    },
  };
  weather.fetchWeather(cidade);
};

/*document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });*/
