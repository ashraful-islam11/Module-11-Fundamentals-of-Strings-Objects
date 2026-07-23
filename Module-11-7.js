// todo:        Module no - 7         topic: Multiple ways to get and set object properties

// multiple ways: 1. dot notation. and  bracket notation []. 

const parson = {
    name : 'hasin',
    age  : 37,
    isSingle: false,
    isDeveloper: true,

    popular: 'yes he is very popular person in developer community',
    founderOf: 'learn whit hasin hyder',
    skills: ['php','laravell', 'sql','etc'],
    
   'her home' : 'bangladesh',
   'isGoodDeveloper' : 'yes he is one of the best developer'

}



// how to access value in parson object: 
// 1. dot notation: . normally we use of dot notation . 
 //* get object value: get object value use dot notation.

let age = parson.age;
console.log(age);
console.log(parson.name);
console.log(parson.skills);
// console.log(parson.'her home');


//* 2. some special case: we use bracket notation [].
// * get object value of bracket notation. 
const specialCase = parson['her home'];
console.log(specialCase);

console.log(parson['isGoodDeveloper']);


let  country ={
    name: 'Argentina',
    bestPlayer: 'messi',
    golkipper: 'emi martinez',
    cup: 3,
    isLoyal: true,
    federation: 'argentina foodball fedaration'

}

// * set value use dot notation : 

 country.name = 'চোরের দল';
 country.bestPlayer= 'লিও মাছি';
 console.log(country);

 //* set value use bracket notation : []

 
 country['cup'] = '3pic';
 country['federation'] = 'afa';
 
 console.log(country);


  



