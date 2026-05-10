let salaire = Number(prompt("Quel est votre salaire annuel?"))
let anciennete = Number(prompt("combien d'années d'anciennete avez-vous?"))
let age = Number(prompt("Quel âge avez-vous?"))

let text = document.querySelector('#text');

if ((salaire > 30000 && anciennete >= 2) || (age > 35 && salaire > 50000)) {
text.innerText = "Éligible au prêt"
text.classList.add('eligible');
}
else {
    text.innerText = "Non éligible au prêt"
    text.classList.add('noteligible');
}