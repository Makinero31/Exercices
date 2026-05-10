let temperature = Number(prompt("Quelle est la température?"));

let newText = document.querySelector("#text");

if (temperature <= 0) {
    newText.innerText = "Gelée";
    newText.classList.add("icy");
} else if (temperature <= 15) {
    newText.innerText = "Froid";
    newText.classList.add("cold");
} else if (temperature < 25) {
    newText.innerText = "Idéal";
    newText.classList.add("lukewarm");
} else {
    newText.innerText = "Chaud";
    newText.classList.add("warm");
}
