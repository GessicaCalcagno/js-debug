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

const input = document.querySelector('input');
console.log(input);
//Array null non ha senso al massimo può essere vuoto
const array = [];
console.log(array);

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;


    //è push no add per aggiungere l'elemento in un array
    array.push(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    //In Js, non puoi impostare il testo di un elemento <li> utilizzando la proprietà text. Posso impostare il testo all'interno dell'elemento <li> utilizzando la proprietà textContent o innerText. 
    li.innerText = input.value;
    //Si pusha un elemento ma non gli elementi del DOM
    //uso appendChild()
    document.querySelector('ul').appendChild(li);

    let counter = '';
    //Gli elementi di un array non si prendono così ??
    let item    = array[0];
    const max   = 1;
    const elems = [];

    //Devo indicare la lunghezza dell'array -> array.length
    for (let i = 0; i < array.length; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        //j = i???
        for (let j = i; j < array.length; i++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    //utilizzare querySelector() anziché getElementsByClassName() perché restituisce una NodeList e non è possibile accedere agli elementi come con un singolo elemento.
    const alert = document.querySelector('alert');

    //Dov'è Alert???
    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    //è sbagliato prendere la variabile cosi non è tra apici ma devo usare il template literals
    console.log(`${item} trovato ${max} volte`);
});

//LO SO CHE AVETE DETTO CHE CI AVETE PASSATO IL CODICE CORRETTO (per sbagli) è COMMENTATO SOPRA! MA COME POTETE NOTARE SONO DA UN ORA QUII A CERCARE DI CAPIRE T-T 
//Se notate la faccina che piange mandatemi una emoji divertente su slack!