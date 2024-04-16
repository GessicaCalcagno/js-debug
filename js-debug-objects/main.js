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

// ESERCIZIO 1 (suggerimento: ci sono 6 errori)
//
const cars = [
  {
    manufacturer: "Ford",
    model: "Fiesta",
    type: "diesel",
  },
  {
    manufacturer: "Audi",
    model: "A1",
    type: "benzina",
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf",
    type: "Benzina",
  },
  {
    manufacturer: "Fiat",
    model: "Panda",
    type: "metano",
  },
  {
    manufacturer: "Fiat",
    model: "Multipla",
    type: "GPL",
  },
  {
    manufacturer: "Tesla",
    model: "Model 3",
    type: "elettrico",
  },
  {
    manufacturer: "Volkswagen",
    model: "Polo",
    type: "benzina",
  },
  {
    manufacturer: "Ford",
    model: "Kuga",
    type: "Diesel",
  },
  {
    manufacturer: "Seat",
    model: "Ibiza",
    type: "metano",
  }, //aggiungo la virgola
  {
    manufacturer: "Audi",
    model: "R8",
    type: "Benzina",
  },
];
//Ci sono diversi errori di sintassi e nell'object il type è scritto in diversi modi ed aggiungo il 'toLowerCase()'
//Meglio scrivere al plurale cars oppur arCar per indicare che è un array di object
const gasolineCars = cars.filter((cars) => cars.type.toLowerCase() === "benzina");

//è scritta male la sintassi
// const dieselCars = cars.filter( (cars) => {
//     auto.type === 'diesel';
// });
const dieselCars = cars.filter((car) => car.type.toLowerCase() === "diesel");

// const otherCars = cars.filter( (cars) => {
//     //Non è or || ma and &&
//     //Devo aggiungere sempre il controllo di toLowerCase o mi inserisce tutte le auto.type scritte in maniera errata
//     //Non c'è bisogno del return*
//     return cars.type.toLowerCase() !== 'benzina' && cars.type.toLowerCase() !== 'diesel';
// });
const otherCars = cars.filter((cars) => {
  const carType = cars.type.toLowerCase();
  return carType !== "benzina" && carType !== "diesel";
});

console.log("Auto a benzina");
console.log("*******************************");
console.log(gasolineCars);

console.log("Auto a diesel");
console.log("*******************************");
console.log(dieselCars);

console.log("Tutte le altre auto");
console.log(otherCars);

//* Poiché il corpo di una funzione di filtro è costituito da un'unica istruzione di controllo, non è necessario specificare esplicitamente il return. In JavaScript, quando una funzione termina senza un'istruzione return, verrà automaticamente restituito il valore dell'ultima espressione valutata all'interno della funzione.
