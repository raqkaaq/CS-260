document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    const value = document.getElementById("place").value;
    if (value === "")
        return;
    console.log(value);
    const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=6ecc80e81756dd1d7e0100b161a82e6d";
    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            let results = "";
            results += '<h2>Weather in ' + json.name + "</h2>";
            for (let i = 0; i < json.weather.length; i++) {
                results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
            }
            results += '<h2>' + json.main.temp + " &deg;F</h2>"
            results += "<p>"
            for (let i = 0; i < json.weather.length; i++) {
                results += json.weather[i].description
                if (i !== json.weather.length - 1)
                    results += ", "
            }
            results += "</p>";
            document.getElementById("results").innerHTML = results;
        });
    const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=6ecc80e81756dd1d7e0100b161a82e6d";
    fetch(url2)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            for (let i = 0; i < json.list.length; i++) {
                const weather = document.createElement("div");
                weather.classList.add("weather");

                weather.innerHTML = "<h2 class='content' style='width: 100%' >" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
                weather.innerHTML += "<p class= 'content'>Temperature: " + json.list[i].main.temp + "</p>";
                weather.innerHTML += '<img class="content" src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
                console.log(weather);
                document.getElementById("forecast").appendChild(weather);
            }
            //document.getElementById("forecast").innerHTML = forecast;
        });
})