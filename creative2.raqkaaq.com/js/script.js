document.getElementById("button").addEventListener("click", function () {
    const fullURL = "https://random-words-api.vercel.app/word";
    const word = "Your word: ";
    const definition = "Its definition is: ";
    console.log(fullURL);
    fetch(fullURL)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            console.log(json);
            const wordResponse = json[0]["word"];
            const defineResponse = json[0]["definition"];
            const container = document.getElementById("answer");
            container.textContent = word + wordResponse;
            const second = document.getElementById("def");
            second.textContent = definition + defineResponse;
        });
});