function Detalhe() {
    var cidade = document.getElementById('barra_pesquisa'); /*$('barra_pesquisa').val();*/
    document.getElementById('cidade').style.visibility = "visible";

    alert("A cidade inserida foi: " + cidade.value);

    let weather = {
        apiKey: "74d90f8a0dc103698bf1cb634e5dc227",

        fetchWeather: function (city) {
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q=" + cidade.value + "&units=metric&appid=" + this.apiKey + "&lang=pt"
            )
                .then(response => response.json())
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
        displayForecast: function (data) {
            for (i = 0; i < 5; i++) {
                const { temp, humidity } = data.list[i].main;
                const { icon, description } = data.list[i].weather[0];
                const { speed } = data.list[i].wind;
                document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
                document.querySelector(".descricao").innerText = description;
                document.querySelector(".temperatura").innerText = temp + "°C";
                document.querySelector(".humidade").innerText = "Humidade: " + humidity + "%";
                document.querySelector(".vento").innerText = "Vento: " + speed + " km/h";
            }
        }

    };
    weather.fetchWeather(cidade);
};