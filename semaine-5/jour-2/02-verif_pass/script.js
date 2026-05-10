const PASSWORD = "secret123";

let userPassword = prompt("Entrez votre mot de passe");

let access = document.querySelector("#control");

let body = document.querySelector("#body");

if (userPassword === PASSWORD) {
    access.innerText = "Accès autorisé";
    access.classList.add("authorized");
} else {
    access.innerText = "Accès refusé";
    access.classList.add("unauthorized");
    body.innerHTML +=
        '<img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmR1dXp1MGJxd3BsYzBvM3N0MWM3aHp3Mnk1cnhiNGJiZjQ1OGE2ZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wSSooF0fJM97W/giphy.gif" alt="nedry"></img>';
}
