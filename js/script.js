let quadrado = {
    "apiKey": "74d90f8a0dc103698bf1cb634e5dc227",
    fetchWeather: function(){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=74d90f8a0dc103698bf1cb634e5dc227"
        ).then((response) => response.json)
        .then((data) => console.log(data));
    },
}