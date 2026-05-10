let add = document.querySelector("#ajouter");

let removeAll = document.querySelector("#vider");

add.addEventListener("click", function () {
    let myList = document.querySelector("#liste");
    let newEntry = prompt("Quel est le nom de l'animal?");
    if (newEntry === "" || newEntry === null) {
        alert("Le nom ne peut pas être vide");
    } else {
        let newAnimal = document.createElement("div");
        newAnimal.innerHTML = `
            <div class="card" data-id="1">
                <div class="info"><strong>${newEntry}</strong></div>
                <button>Supprimer</button>
            </div>
        `;
        myList.appendChild(newAnimal);
    }
});

removeAll.addEventListener("click", function () {
    let myList = document.querySelector("#liste");
    myList.replaceChildren();
});
