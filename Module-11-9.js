//todo:     Module no - 11.9        topic:  Loop an object and ways to declare an object.

// এই একটা জিনিস যে করা যায়।তুমি শুধু নোটস নিয়ে রাখো।  মনে না রাখলেও চলবে :

// for of loop : recap :
let  numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];

for( const number of numbers){
    // console.log(number);
}

// *  loop an object use for in loop:

const product = {
    name: 'laptop',
    brand: 'mango',
    prise: 1000000,
    appInDevice: ['facebook', 'youtube', 'neptune', 'instagram'],
    CEO: 'ashraful',
    lusting: true
}

//* how to get object property: 
  const productOfKey = Object.keys(product);
  console.log(productOfKey);


//* loop: for in object.

for( const productKey in product){
      console.log(productKey);
     const value = product[productKey];
     console.log(value);

     console.log(productKey , value);
}



const players = {
    name: 'Neymar . jr',
    jerseyNumber: 10,
    position: "Forward",
    isInjured: false,
    isHeBack: ' যদি ফিরে, তাহলে  ২০৩০ এর প্রতি interest থকবে ⚽',
    heHasWorldCup: false,
      
}
//* loop :  for of loop:    সাধারনত for of use করা হয় array এর ভেতরে: 

const playersKey= Object.keys(players);   // key গুলো কে আমারা array এর ভেতরে পাবো।
console.log(playersKey);

for( const keyStore of playersKey){
        // console.log(keyStore);  // key গুলো কে পেলাম । 
     
        const playersValue = players[keyStore];       // playersValue এর ভেতরে আমাদের কাংক্ষিত value গুলো কে পেলাম .
        // console.log(playersValue);

    console.log(keyStore ,':', playersValue); // key and value কে clg করলাম। 
}



// আরো অনেক ভাবে, কাজ টা করা যায়।  1. for in , 2.for of , 3. normal for loop , 4. while loop, যেহেতু সবেচে বেশি প্রথম দুইটা use করব তাই, for in and for of . দিয়ে করা হয়েছে।









