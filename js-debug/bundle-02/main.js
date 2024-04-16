/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/

// ESERCIZIO 1
//Questa funzione dovrebbe chiedere quanti anni abbiamo e dire se siamo maggiorenni o meno ma se già impostiamo la constante dentro la funzione in pratica sappia già il risultato quindi non farebbe molto, quindi la modifico
// const myAge = 32;

function checkAge(myAge) {
  //Errato: const message = '';
  //Non è una costante ma una variabile let perchè poi andremo a modificare il messaggio
  // let message = '';

  if (myAge < 18) {
    console.log(`Sei troppo giovane! Hai ${myAge} anni!`);
  } else {
    console.log("Hai più di 18 anni!");
  }
}
checkAge(31);

//ES 1 ERRATO______________________________
// function checkAge() {
//     const myAge = 32;
//     //Errato: const message = '';
//     //Non è una costante ma una variabile let perchè poi andremo a modificare il messaggio
//     let message = '';

//     if (myAge < 18) {
//         message = `Sei troppo giovane! Hai ${myAge} anni!`;
//     } else {
//         message = 'Hai più di 18 anni!';
//     }
// }
// checkAge();
//_________________________________________

// ESERCIZIO 2
//Non è molto utile la funzione scritta così perchè anche senza funzione e solo col console.log stamperebbe
function printColorsNumber() {
  const colors = ["blue", "red", "yellow", "green", "black"];
  //è scritto male lenght --> length
  console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();
//_____________________________________

// ESERCIZIO 3
//Tramite prompt chiedo di inserire un numero ed alla fine sommo il numero chiesto a qualunque numero io voglia quando dichiaro la funzione addNumbers(numeroAcaso)
// //Aggiungo il parametro 'numero da aggiungere'
// function addNumbers(numberToAdd) {
//     //aggiungo parseInt o concatenerebbe
//     const userNumber = parseInt(prompt('Inserisci un numero'));

//     const total = userNumber + numberToAdd;

//     console.log(`Il risultato finale è ${total}`);
// }
// //Aggiungo un numero ()
// addNumbers(11);
//_____________________________________


// ESERCIZIO 4
//Controlla se l'email inserita è nell'array addresses
// function checkAccess() {
//   const addresses = [
//     "mymail@mail.com",
//     "yourmail@mail.com",
//     "hermail@mail.com",
//     "hismail@mail.com",
//   ];
//   const userEmail = prompt("Inserisci il tuo indirizzo email");

//   //Error: 'false' scritto come una stringa invece è booleano
//   // let grantAccess = false;

//   if (addresses.includes(userEmail)) {
//     // grantAccess = true;
//     console.log("Accesso consentito!");
//   } else {
//     console.log("Accesso negato!");
//   }

//   //Questa condizione non serve
//   // if (grantAccess === true) {
//   //     console.log('Accesso consentito!');
//   // } else {
//   //     console.log('Accesso negato!');
//   // }
// }
// checkAccess();
//_________________________________

// ESERCIZIO 5 (suggerimento: c'è un solo errore)
//Inserisco la parentesi graffa per chiudere il ciclo for, come nella funzione precedente il controllo booleano potremmo anche eliminarlo
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];
  

//         //Questa condizione sta meglio fuori dal ciclo for
//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';
//             }

//         }
//     }; //Aggiungere parentesi graffa

//         //Questa condizione sta meglio fuori dal ciclo for per stampare una sola volta
//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();
//______________________________________________________________________________________________

// ES. 5 ERRATO____
// function checkAccessImproved() {
//     const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

//     const userEmail = prompt('Inserisci il tuo indirizzo email');

//     let grantAccess = 'false';

//     for (let i = 0; i < addresses.length; i++) {
//         const email = addresses[i];

//         if (userEmail.length > 5) {

//             if (email === userEmail) {
//                 grantAccess = 'true';

//             }

//         }

//         if (grantAccess) {
//             console.log('Accesso consentito!');
//         } else {
//             console.log('Accesso negato!');
//         }
//     }
//     checkAccessImproved();
// }; //Aggiungere parentesi graffa
