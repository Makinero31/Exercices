let score = Number(prompt("Choisissez un nombre entre 0 et 100"));

let newText = document.querySelector("#text");
let remark = document.querySelector("#remark");

const letter =
    score >= 90
        ? "A"
        : score >= 80
          ? "B"
          : score >= 70
            ? "C"
            : score >= 60
              ? "D"
              : "F";

newText.innerText = "Vous avez choisi la lettre " + letter;
newText.classList.add("jaiplusdimagination");
remark.innerText = "Non, y'a pas de E!";
