let codePostal = prompt("Entrez votre code postal");

let newText = document.querySelector("#text");

if (!isNaN(codePostal) && codePostal.length === 5) {
    newText.textContent = "Code postal valide";
    newText.classList.add("valid");
} else {
    newText.textContent = "Code postal invalide";
    newText.classList.add("notvalid");
}
