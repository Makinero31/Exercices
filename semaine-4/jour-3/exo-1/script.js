let daysOfTheWeek = ['lunday', 'mardy', 'mercreday', 'jedi', 'vendredi', 'samedi', 'week', 'dimanhce'];

daysOfTheWeek.pop()

console.log(daysOfTheWeek)

daysOfTheWeek.push('dimanche')

daysOfTheWeek.splice(daysOfTheWeek.length - 2, 1)

console.log(daysOfTheWeek[2])

daysOfTheWeek.splice(0, 4, 'lundi', 'mardi', 'mercredi', 'jeudi')

daysOfTheWeek.splice(5, 1, 'samedi')

console.log(daysOfTheWeek)

console.log(daysOfTheWeek.length)

console.log(daysOfTheWeek[daysOfTheWeek.length - 1])

//console.log(daysOfTheWeek[daysOfTheWeek.length - 2] + ' ' + daysOfTheWeek[daysOfTheWeek.length - 1])


console.log(daysOfTheWeek.slice(5))

