//todo:         Module no - 11.3       topic:  String slice, join, concatenate and includes

// string in includes:   case sensitive: 
const email = 'ashraful@gimail.com';
const imgName = 'flowers.jpg';

console.log(email.includes('.com'));
console.log(email.includes('.Com'));

console.log(imgName.includes('.jpg'));


// *    starts whit and endsWith: last e and first e word ache kina eitar jonno  use korbo, startsWith and endsWith
console.log('== starts with and end with: ==');

const fileNotation = 'index.js';
const file = ' javaScript er end e likhte hoy .js';

console.log(fileNotation.startsWith('index'));
console.log(file.endsWith('.js'));


//* split : do separet array:. 
console.log('split: ');

const bestPlayers = 'Hamza jamal mursalin mitul ';
const straicar = 'neymer halan ken sala ';

console.log(bestPlayers.split(' '));    // white space.
console.log(straicar.split( ''));       // empty space. 


// * slice : 
console.log('slice is start : ====');

const goldenBall = 'Rodry messi yeamal ';
const goldenBoot = 'Mbappe  haland ken';

// goldenBall.slice(start , end);
console.log(goldenBall.slice( 6 , 12));
console.log(goldenBoot.slice(0 ,6));



// join: ,  ' ' ''  array er vetore join korte hoy not string :

const goodPlaceIs =[ 'Dhaka',' and Rajshah'];

console.log(goodPlaceIs.join(''));
console.log(goodPlaceIs.join(' '));
console.log(goodPlaceIs.join(', '));