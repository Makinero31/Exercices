let age1 = Number(prompt("Quel âge a la première personne?"));
let age2 = Number(prompt("Quel âge a la deuxième personne?"));

const change = () => {
let newButton = document.querySelector('#changeButton');
let newText = document.querySelector('#text');
newButton.innerText = "Ayé";

if (age1 === age2) {
    newText.innerText = "Les deux personnes ont le même age";
    newText.classList.add('egal');
}
else if (age1 > age2) {
    newText.innerText = "La première personne est plus âgée";
    newText.classList.add('premier')
} 
else {
    newText.innerText = "La deuxième personne est plus âgée";
    newText.classList.add('deuxieme')
}
}