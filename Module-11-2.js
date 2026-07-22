// todo:        Module no -11-2.    topic: String comparison, lowercase, uppercase and trim.


// String comparison: string is very case sensitive: 

const book = 'English';
const subject = 'english';

// cas sensitive: 
if(book === subject){
    console.log('same books');
}
else{
    console.log('to defferant books ');
}


/** 
 *  toLowerCase: সম্পূর্ণ string এ lower case এ রুপান্তর করে দিবে। 
 *  toUpperCase: সম্পূর্ণ string এ upper case এ রুপান্তর করে দিবে            */

const boyHasPen = 'RED Color pen';
const girlHasPen ='Red Color PEN';

console.log(boyHasPen);
console.log(girlHasPen);

// add lower case: 
console.log(boyHasPen.toLowerCase());
console.log(girlHasPen.toLowerCase());

// add upper case: 
console.log(boyHasPen.toUpperCase());
console.log(girlHasPen.toUpperCase());

//* comparison :  comparison add after to upper case and lower case .

if( boyHasPen.toLowerCase() === girlHasPen.toLowerCase()){
    console.log('boy and girl has same color pen');
}
else{
    console.log('boy and girl has different color pen ');
}


// আমরা চাইলে , upperCase দিয়েও compare করেতে পারি। 

if(boyHasPen.toUpperCase() === girlHasPen.toUpperCase()){
    console.log('they have same color pen');
}
else{
    console.log('they have different color pen');
}


//todo: case sensitive: problem solve - toUpperCase nd toLowerCase. 

//*  space mistake: নিয়ে কাজ করবো , কিভাবে প্রব্লেম গুলো solve করা যায়।

const favoriteSubject = 'my favorite subject is english  ';
const favoriteTopic   = ' my favorite subject is english';

console.log(favoriteSubject);
console.log(favoriteTopic);


//* comparison : 
console.log('comparison =========>');
if( favoriteSubject.toLowerCase() === favoriteTopic.toLowerCase()){
    console.log('my favorite sub and topic same');
}
else{
    console.log('my favorite sub and topic not same');
}

//* solve the space problem : trim
console.log('=== solve the space problem : with use trim : === ');

console.log(favoriteSubject.trim());
console.log(favoriteTopic.trim());

// some mistake : space.
const time = 'time is very fast ';
const day  = ' time is very fast '

if( time.trim() === day.trim()){
    console.log('time and day value is same');
}
else{
    console.log('time and day is not same');
}

/**
 * summery: 
 * case sensitive : er jonno use korlam , toLowerCase. and toUpperCase.
 * space sensitive : er jonno use korlam , trim. 
 * ei duita diye amra akta compare kore dekhi. 
 */


const yourEmail = ' Ashraful10@Gmail.Com ';
const yourMail  = 'ashraful10@gmail.com ';

if( yourEmail.toLowerCase().trim() === yourMail.toLowerCase().trim()){
    console.log('i understand this topic ');
}
else{
    console.log("i don't understand this topic.");
}





