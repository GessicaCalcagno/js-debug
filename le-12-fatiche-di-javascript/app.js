// const input = document.querySelector('input');
// const array = [];

// input.addEventListener('keypress', function(event) {

//     if (event.code != 'Enter') return;
//     if (input.value == '')     return;

//     array.push(input.value);

//     const li = document.createElement('li');
//     li.classList.add('list-group-item');
//     li.innerText = input.value;
//     document.querySelector('ul').append(li);

//     let counter = 0;
//     let max     = 1;
//     let item    = array[0];
//     const elems = [];

//     for (let i = 0; i < array.length; i++) {
//         let val = array[i];

//         if (!elems[val]) {
//             elems[val] = 1;
//         } else {
//             elems[val]++;
//         }

//         for (let j = i; j < array.length; j++) {
//             if (array[i] == array[j]) {
//                 counter++;
//                 if (max < counter) {
//                     max  = counter;
//                     item = array[i];
//                 }
//             }
//         }
//         counter = 0;
//     }

//     const alert = document.getElementsByClassName('alert')[0];

//     alert.classList.remove('d-none');
//     alert.classList.add('d-flex');

//     alert.querySelector('span:first-child').innerText = item;
//     alert.querySelector('span:last-child').innerText = max;

//     console.log(`${item} trovato ${max} volte`);
// });

const input = document.querySelector("input");
console.log(input);
//Array null non ha senso al massimo può essere vuoto
const array = [];
//console.log(array);

//Alt J
input.addEventListener("keypress", function (event) {
  //La funzione prosegue se viene premuto
  if (event.code != "Enter") return;
  //La funzione prosegue se il valore dell'input è diverso da ""
  // input è un number e qui non va scritto .length
  if (input.value == "") return;

  //è push no add per aggiungere l'elemento in un array
  array.push(input.value);

  const li = document.createElement("li");
  li.classList.add("list-group-item");
  //In Js, non puoi impostare il testo di un elemento <li> utilizzando la proprietà text. Posso impostare il testo all'interno dell'elemento <li> utilizzando la proprietà textContent o innerText.
  li.innerText = input.value;
  //Si pusha un elemento ma non gli elementi del DOM
  //push solo per gli array
  //solo append al posto di push
  document.querySelector("ul").append(li);

  //* ripulisco l'input
  input.value = "";

  //Contatore? allora è un numero non una stringa vuota
  let counter = 0;
  let item = array[0];
  /* valore massimo raggiunto da un elemento
    const max - nella condizione coambia il proprio valore*/
  let max = 1;
  //Let non costante
  let elems = [];

  //Devo indicare la lunghezza dell'array -> array.length
  for (let i = 0; i < array.length; i++) {
    let val = array[i];

    //Se val non è presente in elems = 1 altrimenti incrementa
    if (!elems[val]) {
      elems[val] = 1;
    } else {
      elems[val]++;
    }
    // console.log(elems);

    // ciclo per controllare se un elemento è presente altre volte
    // j++ non i++!!
    for (let j = i; j < array.length; j++) {
      // per ogni elemento nell'array uguale a quello preso in considerazione da i il counter aumenta
      if (array[i] == array[j]) {
        counter++;
        if (max < counter) {
          max = counter;
          item = array[i];
        }
      }
    }

    counter = 0;
  }

//   const alert = document.getElementsByClassName("alert")[0];
  //Selezioare l'elemento con il numero con il counter più alto
  //.getElementsByClassName andava bene pure
  const alert = document.querySelector('.alert');

  alert.classList.remove("d-none");
  alert.classList.add("d-flex");

  alert.querySelector("span:first-child").innerText = item;
  alert.querySelector("span:last-child").innerText = max;

  //è sbagliato prendere la variabile cosi
  console.log(`${item} trovato ${max} volte`);
});

