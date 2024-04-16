/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/

// ESERCIZIO 1
// per incrementare devo scrivere i minore di 5 o il ciclo For non si avvierà
//Errato: for (let i = 0; i > 5; i++)
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ESERCIZIO 2
//la funzione deve restituire un numero pari sommato a 5
// Errore di sintassi: aggiungo 3 uguali
//"=" uno solo è operatore di assegnazione (usato per le variabili);
// '==' ; '===' -> Loro sono operatori di uguaglianza ; uguaglianza e tipo di dato.
function addIfEven(num) {
  //Errato: if (num % 2 = 0)
  if (num % 2 === 0) {
    return num + 5;
  }
  return num;
}

// ESERCIZIO 3
//La funzione crea un loop di 5 elementi e stampa da 0 a 4
function loopToFive() {
    //Errato: for (let i = 0, i < 5, i++) 
    //erroti di sintassi: aggiungo ';'
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// // ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]
