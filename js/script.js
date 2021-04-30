//Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var cognomiArray = ["Bianchi", "Neri" , "Rossi", "Verdi", "Gialli"];

// 1. chiedi all'utente il cognome
var cognomeUtente = prompt("Inserisci il tuo cognome:");
console.log(cognomeUtente);

while (!isNaN(cognomeUtente)){
    var cognomeUtente = prompt("Inserisci il tuo cognome:");
}

// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
cognomiArray.push(cognomeUtente);
console.log(cognomiArray);

// 3. stampa la lista ordinata alfabeticamente
var cognomiArray = cognomiArray.sort();
console.log(cognomiArray);

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var cognomeUtentePosizione = cognomiArray.indexOf(cognomeUtente) + 1;
console.log("La posizione del utente:", cognomeUtentePosizione);