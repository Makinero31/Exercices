let character = {
    class: "paladin",
    name: "longduzboub",
    level: 99,
    real_name: "Stan Marsh"
}

console.log(character.class);
console.log(character['name']);


let newClass = prompt("Quelle classe est ta préférée?");

character.class = newClass;


alert("nous recherchons un " + character.class + " connu sous le nom de " + character.name);