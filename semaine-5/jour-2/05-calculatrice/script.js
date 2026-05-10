let nombre1 = Number(prompt("Nombre 1"));
let operateur = prompt("Quelle opération souhaitez-vous faire? (+, -, *, /)");
let nombre2 = Number(prompt("Nombre 2"));

let resultat = document.querySelector("#result");
let body = document.querySelector("body");

switch (operateur) {
    case "+":
        resultat.innerText = nombre1 + nombre2;
        resultat.classList.add("add");
        break;
    case "-":
        resultat.innerText = nombre1 - nombre2;
        resultat.classList.add("substract");
        break;
    case "*":
        resultat.innerText = nombre1 * nombre2;
        resultat.classList.add("multiply");
        break;
    case "/":
        if (nombre2 !== 0) {
            resultat.innerText = nombre1 / nombre2;
            resultat.classList.add("divide");
            break;
        } else {
            resultat.innerText = "ça me semble pas très faisable madame!";
            resultat.classList.add("impossible");
            body.innerHTML +=
                '<img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXBtamJ1cDNzZnhnbHozNGRxOWw4N3dtdmpwbXZqeGdxYmQ1bnVjMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7JsEoLWq836gidV6r5/giphy.gif" alt="numerobis"></img>';
            break;
        }
}
