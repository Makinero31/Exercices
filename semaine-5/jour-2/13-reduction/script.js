let montant = Number(prompt("Quel est le prix de l'article?"));

let client = prompt(
    "Quel est votre niveau de fidélité? (aucun, fidèle, premium)",
);

let newDiscount = document.querySelector("#discount");

let newPrice = document.querySelector("#price");

const reduc =
    client === "fidele" && montant > 100
        ? (newDiscount.textContent = "Vous bénéficiez d'une remise de 10%")
        : client === "premium" && montant > 50
          ? (newDiscount.textContent = "Vous bénéficiez d'une remise de 15%")
          : (newDiscount.textContent = "Vous ne bénéficiez d'aucune remise");

const style =
    client === "fidele" && montant > 100
        ? newDiscount.classList.add("orange")
        : client === "premium" && montant > 50
          ? newDiscount.classList.add("green")
          : newDiscount.classList.add("red");

const total =
    client === "fidele" && montant > 100
        ? (newPrice.textContent = "Total: " + montant * 0.9 + "€")
        : client === "premium" && montant > 50
          ? (newPrice.textContent = "Total: " + montant * 0.85 + "€")
          : (newPrice.textContent = "Total: " + montant + "€");
