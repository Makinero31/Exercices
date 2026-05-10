const notes = [12, 15, 8, 10, 17];

console.log(notes);

notes[0] = notes[0] + 2;
notes[1] = notes[1] + 2;
notes[2] = notes[2] + 2;
notes[3] = notes[3] + 2;
notes[4] = notes[4] + 2;

console.log(notes);

let noteSum = notes.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(noteSum);

let mean = noteSum / notes.length;

console.log(mean);

notes.splice(notes.length - 1, 1, 20);

console.log(notes);

let firstNotes = notes.slice(0, 3);

console.log(firstNotes);


/*      MOYENNE PONDEREE  (le plus logique)

let coefTotal =  0

for ( let i = 0;  i < notes.legth; i++)
if (note[i] < 5) {
note[i] = note[i] * 0.5
coeffTotal = coefTotal + 0.5
}
else if (note[i] >= 5 && note[i] <= 10) {
note[i] = note[i] * 1.1
coeffTotal = coefTotal + 1.1
}
let pondererMean = (notes.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / coeffTotal
*/


//      Bonus demandé (même s'il ça n'a pas de sens...)

for (let i = 0; i < notes.length; i++) {
    if (notes[i] < 5)   {
        notes[i] = notes[i] * 0.5
    }
    else if (notes[i] >= 5 && notes[i] <= 10) {
        notes[i] = notes[i] * 1.1
    }
}

let underTen = 0

for (let i = 0; i < notes.length; i++) {
    if (notes[i] < 10) {
        underTen = underTen + 1
    }
}

if (underTen > (notes.length / 2)) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i] > 10) {
            notes[i] = notes[i] * 1.3
        }
    }
}