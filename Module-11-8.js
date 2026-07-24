// todo:        Module no : 11-8        topic:  Keys, values, nested objects and delete

const country = {
    name : 'Bangladesh',
    primeMinister : 'Tareq jiya',
    party: 'Bnp',
    relativeOfPrime : 'mirza fokrul',

    oppositionParty :'jamat islami',
    headOfOppositionParty : 'jamat amir',
    trasted : true,

}


// get keys  and values .: dote notation.


const keys = Object.keys(country);
console.log(keys);


// get keys of bracket notation : 
const allKeys = Object['keys'](country)
console.log(allKeys);


// get values of dote notation : 

const getValues = Object.values(country);
console.log(getValues);

// get values of bracket notation : 

const valuesOfBracketNotation =  Object['values'](country);
console.log(valuesOfBracketNotation);


// delate keyWort :  dot notation and bracket notation .

delete country.party;
console.log(country);

delete country['relativeOfPrime'];
console.log(country);



// nasted object : 

const  worldLeader = {
    name : 'tramp and putin',
    dolarCountry : 'america', 

    muslimCountry : {
        fast: 'saudi Arabia',
        second: 'tarkiy',

        muslimBoss : {
            bossName : 'khamini',
            land : 'iran',
            power: true,
            religiousLeader: 'Ali khamini'
        }
    }
}


console.log(worldLeader);

let nasted = worldLeader.muslimCountry.muslimBoss.bossName;
console.log(nasted);

let nastedUseBracket = worldLeader['muslimCountry']['muslimBoss']['power'];
console.log(nastedUseBracket);

// set nested keys value in object: 
 
let setLeaderName =worldLeader.muslimCountry.muslimBoss.religiousLeader ='Mostofa ali khamini ';
console.log(setLeaderName);

console.log(worldLeader);
