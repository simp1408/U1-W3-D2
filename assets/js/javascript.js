 
 //creo una varibile  e la inizializzo

let saluto = "ciao";
console.log(saluto);

 //esempio di concatenazione 
let nome ="simone";
let cognome="ponzani";
let nomeCognome = nome +" "+ cognome;
console.log('mi chiamo '+ nomeCognome);
// creazion variabile numero
let anni = 36;
//concateno stringa + varibile numero
console.log(nome+"  ha  "+ anni);


/*
DIFFERENZA TRA VAR E LET:
esempio :

var pluto="pluto";
let paperino="sberequack";
console.log(window.pluto); //Apparirà "bau"
console.log(window.paperino); //Apparirà un bel "undefined"

var pluto="bau";
var pluto="bau bau"; //Nessun problema: il valore viene rimpiazzato
let paperino="sberequack";
let paperino="qua qua qua"; //Errore di sintassi: non posso utilizzare la stessa variabile stata dichiarata!!!
*/


//valore booleano
let num=10;
console.log(num == '10'); // anche se numero è un numero mi da cmq true

//esempio somma
let number = 36;
console.log(Number(number)+3);

let personaggio = "Cappuccetto";
let colore = "rosso";
const favola = `la favola di : ${personaggio} ${colore}`;
console.log(favola);


// CALCOLATRICE SOTTRAZINE E SOMMA
let x = document.getElementById('x');
let y = document.getElementById('y');
let ris= document.getElementById('ris');
let button = document.querySelector('input');

function somma()
{
    let somma = parseInt(x.value)+ parseInt(y.value);
    ris.value = somma;
}
function sottrazione(){
    let sottrazione= parseInt(x.value) - parseInt(y.value);
    ris.value= sottrazione; 
}

