let age = Number(prompt("Quel âge as-tu?"));
let height = Number(prompt("Combien tu mesures? (en centimètres)"));
let accompanied = prompt("Es-tu accompagné?");

let newText = document.querySelector("#text");

if (
    (age > 12 && height > 140) ||
    (age >= 8 && age <= 12 && height > 130 && accompanied === "oui")
) {
    newText.textContent = "Accès autorisé";
    newText.classList.add("athorized");
} else {
    newText.textContent = "Accès refusé";
    newText.classList.add("denied");
}
