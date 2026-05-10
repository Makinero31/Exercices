let student = {
    firstName: "",
    lastName: "",
    age: 0
}

student.firstName = prompt("Quel est ton prénom?");
student.lastName = prompt("Quel est ton nom?");
student.age = Number(prompt("Quel âge as-tu?"));


let fullName = student.firstName + " " + student.lastName;


let months = student.age * 12

let monthsRest = months % 10

let noteBonus = 2

noteBonus = noteBonus - 1

let notes = []

notes.push(Number(prompt("Quelle est ta première note")))
notes.push(Number(prompt("Quelle est ta deuxième note")))
notes.push(Number(prompt("Quelle est ta troisième note")))

let note1 = notes.shift()

let newNote1 = note1 + noteBonus

notes.unshift(newNote1)

student.allNotes = notes;

let mean = notes.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / notes.length;

student.allMean = mean;

let noteSet = new Set(notes);

let uniqueNotes = [...noteSet]

let noteMap = new Map();

noteMap.set("Maths", uniqueNotes[0]);
noteMap.set("Physyque", uniqueNotes[1]);
noteMap.set("Techno", uniqueNotes[2]);


alert(fullName + ", " + student.age + " ans, a eu " + noteMap.get("Maths") + " en maths, " + noteMap.get("Physyque") + " en physique et " + noteMap.get("Techno") + " en techno, ce qui fait une moyenne pas terrible de " + student.allMean + ".");
alert("PAS bravo!")

console.log(notes);

console.log(noteMap);

console.log(student);


