let weather = {
  apiKey: "74d90f8a0dc103698bf1cb634e5dc227",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey + "&lang=pt"
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
    document.querySelector(".cidade").innerText = "Tempo em " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".descricao").innerText = description;
    document.querySelector(".temperatura").innerText = temp + "°C";
    document.querySelector(".humidade").innerText = "Humidade: " + humidity + "%";
    document.querySelector(".vento").innerText = "Vento: " + speed + " km/h";
    document.querySelector(".quadrado").classList.remove("loading");
    //   document.body.style.backgroundImage =
    //     "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },

  search: function () {
    this.fetchWeather(document.querySelector("#pesquisa").value);
  },
};

document.querySelector(".d-flex button").addEventListener("click", function () {
  weather.search();
});

// document.querySelector("#pesquisa").addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//       weather.search();
//     }
//   });

weather.fetchWeather("Torres Vedras");
