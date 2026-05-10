let products = ["produit 1", "produit 2", "produit 3"];

let choice = Number(
    prompt(
        "Choisir une action:\n1. Voir la liste des produits\n2. Ajouter un produit\n3. Supprimer un produit\n4. Quitter",
    ),
);

let jppdecesexos = document.querySelector("#text");
let body = document.querySelector("#body");

switch (choice) {
    case 1:
        jppdecesexos.innerText = products.join(", ");
        break;
    case 2:
        products.push("produit " + (products.length + 1));
        jppdecesexos.innerText = "produit " + products.length + " ajouté.";
        break;
    case 3:
        let toDelete = Number(
            prompt(
                "Quel produit voulez-vous supprimer\n1.Pruduit 1\n2.Produit 2\n3.Produit 3",
            ),
        );
        products.splice(toDelete - 1, 1);
        jppdecesexos.innerText = "Produit " + toDelete + " supprimé.";
        break;
    case 4:
        jppdecesexos.innerText = "Au revoir!";
        body.innerHTML +=
            '<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnkzdGN5OTI3NTZhN3d2OHFtaWZyMTk4Yzk2cG9nYWdpNGp2bWdobyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hmxZRW8mhs4ak/giphy.gif" alt="giscard">';
        break;
}
