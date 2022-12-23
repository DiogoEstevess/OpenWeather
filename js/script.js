let weather = {
    apiKey: "74d90f8a0dc103698bf1cb634e5dc227",

    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey + "&lang=pt_br"
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

    displayWeather: function(data) {
    //   const { name } = data;
    //   const { icon, description } = data.weather[0];
    //   const { temp, humidity } = data.main;
    //   const { speed } = data.wind;
    //   document.querySelector(".city").innerText = "Tempo em " + name;
    //   document.querySelector(".icon").src =
    //     "https://openweathermap.org/img/wn/" + icon + ".png";
    //   document.querySelector(".description").innerText = description;
    //   document.querySelector(".temp").innerText = temp + "°C";
    //   document.querySelector(".humidity").innerText =
    //     "Humidade: " + humidity + "%";
    //   document.querySelector(".wind").innerText =
    //     "Vento: " + speed + " km/h";
    //   document.querySelector(".weather").classList.remove("loading");
    //   document.body.style.backgroundImage =
    //     "url('https://source.unsplash.com/1600x900/?" + name + "')";
    },
    
    // search: function () {
    //   this.fetchWeather(document.querySelector(".search-bar").value);
    // },
  };
  
  // document.querySelector(".search button").addEventListener("click", function () {
  //   weather.search();
  // });
  
  // document
  //   .querySelector(".search-bar")
  //   .addEventListener("keyup", function (event) {
  //     if (event.key == "Enter") {
  //       weather.search();
  //     }
  //   });
  
  // weather.fetchWeather("Denver");
  