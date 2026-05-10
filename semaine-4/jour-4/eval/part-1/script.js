let firsTName = prompt("Quel est votre prénom?")

alert("Bonjour " + firsTName + ", bienvenue dans votre gestionnaire de tâches.")

let assistant = "Krystof"

console.log("Je suis " + assistant + ". Je vais vous aider à organiser vos tâches.")

let taches = ["faire la vaisselle", "déposer le colis", "récupérer les enfants à l'école"]

console.log("Vos tâches actuelles sont:\n-" + taches[0] + "\n-" + taches[1] + "\n-" + taches[2]);

taches.push(prompt("Quelle tâche voulez-vous ajouter"))

taches.push(prompt("Quelle tâche voulez-vous ajouter"))

console.log("Vos tâches actuelles sont:\n-" + taches[0] + "\n-" + taches[1] + "\n-" + taches[2] + "\n-" + taches[3] + "\n-" + taches[4]);

let statistiques = {
    tasks: taches,
    tasksNumber: taches.length
}

console.log("Vous avez actuellement " + statistiques.tasksNumber + " tâches à effectuer.");

console.log("Vous avez actuellement " + statistiques['tasksNumber'] + " tâches à effectuer.");

let tachesSet = new Set(taches);

console.log(tachesSet);

console.log("Liste des tâches complète")
