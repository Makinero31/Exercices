const trainers = ["Christophe", "Amine", "Ange", "Christophe", "Amine", "Christophe"];

let trainerSet = new Set(trainers);

console.log(trainerSet);

trainerSet.add("Florian");

console.log(trainerSet);

trainerSet.delete("Amine");

console.log(trainerSet);
