import fibonacciSequence from "./fibonacciSequence.js";

function checkIfContainsInSequence(numberToCheck) {
   const sequece =  fibonacciSequence(numberToCheck);

    if(sequece.includes(numberToCheck)){
        console.log(`O número ${numberToCheck} faz parte da sequencia de Fibonnaci`)
    } else {
        console.log(`O número ${numberToCheck} NÃO faz parte da sequencia de Fibonnaci`)
    }
}

checkIfContainsInSequence(100);
checkIfContainsInSequence(144);