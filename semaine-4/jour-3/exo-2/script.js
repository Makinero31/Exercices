let user = []

user.push(prompt('Quel est ton nom ?'))

user.push(prompt('Quel est ton prénom ?'))

user.push(prompt('Quel est ton âge ?'))

let choice = prompt('Tu veux connaître:\nton nom? Tape 1 \nton prénom? Tape 2\nton âge? tape 3')

alert(user[choice - 1])

