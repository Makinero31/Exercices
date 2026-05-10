let toSend = Number(prompt("Combien d'objets à expédier?"))

let capacity = Number(prompt("Quelle est la capacité d'un carton?"))

let fullCardboard = parseInt(toSend / capacity, 10)

let rest = toSend % capacity

alert("Tu peux remplir entièrement " + fullCardboard + " cartons et il te restera " + rest + " objet(s).")