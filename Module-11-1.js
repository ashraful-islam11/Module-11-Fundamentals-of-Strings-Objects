// todo:    Module no : 11-1        topic: Introduction to strings and string vs array. 

// * 1. introduction to String :    
const  name     = "Ashraful" ;
const  lastName = ' Islam' ;
const  home     = ` Natore ` ;

console.log(name,lastName,home);


// *    Array vs String:  

// string: 

const food = 'rich';
const drink = 'water milk';
const location = 'Dhaka';

//* string length check: string e কত গুলো জায়গা নিয়েছে এইটা বের করে, string.length.

console.log(food.length);
console.log(drink.length);
console.log(location.length);


//* Array: length check:  Array তে কত গুলো element আছে, এইটা বের করে। 
const numbers = [ 10, 20, 30, 40, 50];
const players = [  1, 2, 3, 4, 5, 6, 7];

console.log(numbers.length);
console.log(players.length);


//* index check:  string e index check kora jay. 

const familyLeader = 'My Dad';
const brother = 'tanvir And abir';

console.log(familyLeader[3]);
console.log(brother[7]);


// array e index check kora jay. 
const familyAge = [42, 35, 20, 11, ];
const phonePrise =[200, 222, 44, 555];

console.log(familyAge[2]);
console.log(phonePrise[3]);


// add index value in array :
familyAge[4] = 5;
console.log(familyAge);

phonePrise[4]= 50000;
console.log(phonePrise);


// string add index value : string e index dhore value add kora jay na. immutable 
const place = 'pabna';
place[5] = 'P';
console.log(place);


/**
 **   this video summery: 
 * 
 * 1. string কিছুটা Array  এর সাথে মিলে যায়।
 * 2. string.length and array.length. 
 * 3. string.index and array.index : দিয়ে মান access করা যায়। 
 * 
 * 4. string: immutable   or  Array : mutable.
 *  
 *  */ 





