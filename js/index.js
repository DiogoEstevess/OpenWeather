let weather = {
  apiKey: "74d90f8a0dc103698bf1cb634e5dc227",

  fetchWeather1: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Lisboa&units=metric&appid=" + this.apiKey + "&lang=pt"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather1(data));
  },

  fetchWeather2: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Algarve&units=metric&appid=" + this.apiKey + "&lang=pt"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather2(data));
  },

  fetchWeather3: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Alcobaça&units=metric&appid=" + this.apiKey + "&lang=pt"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather3(data));
  },

  fetchWeather4: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Porto&units=metric&appid=" + this.apiKey + "&lang=pt"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather4(data));
  },

  fetchWeather5: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Minho&units=metric&appid=" + this.apiKey + "&lang=pt"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather5(data));
  },

  fetchWeather6: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Funchal&units=metric&appid=" + this.apiKey + "&lang=pt"
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather6(data));
  },

  displayWeather1: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".cidade1").innerText = name;
    document.querySelector(".icon1").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".descricao1").innerText = description;
    document.querySelector(".temperatura1").innerText = temp + "°C";
    document.querySelector(".humidade1").innerText = "Humidade: " + humidity + "%";
    document.querySelector(".vento1").innerText = "Vento: " + speed + " km/h";
    document.querySelector(".quadrado").src = "https://source.unsplash.com/1600x900/?" + name;
  },

  displayWeather2: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".cidade2").innerText = name;
    document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".descricao2").innerText = description;
    document.querySelector(".temperatura2").innerText = temp + "°C";
    document.querySelector(".humidade2").innerText = "Humidade: " + humidity + "%";
    document.querySelector(".vento2").innerText = "Vento: " + speed + " km/h";
  },

  displayWeather3: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".cidade3").innerText = name;
    document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".descricao3").innerText = description;
    document.querySelector(".temperatura3").innerText = temp + "°C";
    document.querySelector(".humidade3").innerText = "Humidade: " + humidity + "%";
    document.querySelector(".vento3").innerText = "Vento: " + speed + " km/h";
  },

  displayWeather4: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".cidade4").innerText = name;
    document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".descricao4").innerText = description;
    document.querySelector(".temperatura4").innerText = temp + "°C";
    document.querySelector(".humidade4").innerText = "Humidade: " + humidity + "%";
    document.querySelector(".vento4").innerText = "Vento: " + speed + " km/h";
  },

  displayWeather5: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".cidade5").innerText = name;
    document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".descricao5").innerText = description;
    document.querySelector(".temperatura5").innerText = temp + "°C";
    document.querySelector(".humidade5").innerText = "Humidade: " + humidity + "%";
    document.querySelector(".vento5").innerText = "Vento: " + speed + " km/h";
  },

  displayWeather6: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".cidade6").innerText = name;
    document.querySelector(".icon6").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".descricao6").innerText = description;
    document.querySelector(".temperatura6").innerText = temp + "°C";
    document.querySelector(".humidade6").innerText = "Humidade: " + humidity + "%";
    document.querySelector(".vento6").innerText = "Vento: " + speed + " km/h";
  },

};

weather.fetchWeather1()
weather.fetchWeather2()
weather.fetchWeather3()
weather.fetchWeather4()
weather.fetchWeather5()
weather.fetchWeather6()