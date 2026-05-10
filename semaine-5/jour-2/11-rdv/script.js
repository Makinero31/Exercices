let rdv = {
    jour: prompt("Quel jour avez vous un rendez vous?"),
    heure: Number(prompt("A quelle heure?")),
    duree: Number(prompt("Combien d'heures va-t-il durer?")),
};

let week = ["lundi", "mardi", "mercredi", "jeudi", "vendredi"];

let newText = document.querySelector("#text");

if (
    week.includes(rdv.jour) &&
    rdv.heure >= 9 &&
    rdv.heure <= 17 &&
    rdv.heure + rdv.duree <= 18
) {
    newText.textContent =
        "Vous avez un rendez-vous " +
        rdv.jour +
        " à " +
        rdv.heure +
        "H pour une durée de " +
        rdv.duree +
        "H. - Fin à " +
        (rdv.heure + rdv.duree) +
        " H.";
    newText.classList.add("green");
} else if (!week.includes(rdv.jour)) {
    newText.textContent =
        "Impossible: vous travaillez seulement du lundi au vendredi.";
    newText.classList.add("red");
} else if (rdv.heure < 9 || rdv.heure > 17) {
    newText.textContent =
        "Impossible: vous travaillez seulement entre 9H et 17H.";
    newText.classList.add("red");
} else {
    newText.textContent =
        "Impossible: votre rendez-vous doit se terminer avant 18H.";
    newText.classList.add("red");
}
