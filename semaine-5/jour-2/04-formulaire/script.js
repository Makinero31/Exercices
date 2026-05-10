let user = {
    email: prompt("Quel est ton email?"),
    age: Number(prompt("Quel âge as-tu?")),
    pays: prompt("Dans quel pays vis-tu?"),
};

let newText = document.querySelector("#text");

if (
    user.email.includes("@") &&
    user.email.includes(".") &&
    user.age >= 18 &&
    user.age <= 99 &&
    (user.pays === "France" ||
        user.pays === "Belgique" ||
        user.pays === "Suisse")
) {
    newText.innerText = "Formulaire valide";
    newText.classList.add("valid");
} else {
    newText.innerText = "Formulaire invalide";
    newText.classList.add("notvalid");
}
