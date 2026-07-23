// todo:            Module no - 11-4        topic: Reverse a string in two different ways.

// আজকের টপিক টা না বুঝলেও চলবে, শুধু আর দেখে রাখি যে string এ রিভার্স করা যায়। 



// step: 1. 
const  commitment = 'I will work hard  and will never give up .';
console.log(commitment);

const ChangeCommitment = commitment.split('');
const reverseCommitment = ChangeCommitment.reverse();
 const joinCommitment = reverseCommitment.join('')
console.log(joinCommitment);


// step: 2. for loop use : 
const profession = 'I wiil be one of the best full stack web Engineer';

let commit = '';

for( const myProfession  of profession){

    commit = myProfession + commit ;

    console.log(myProfession, '=>',commit);
}