let map = new Map();
map.set("100", "Thierry");
map.set("114", "Elo");
map.set("128", "Blandine");
map.set("139", "Mitch");
map.set("143", "Titouan");

console.log(map);

map.set("150", "Bob");

console.log(map);

map.set("114", "Eléonore");

console.log(map);

map.delete("100");

console.log(map);