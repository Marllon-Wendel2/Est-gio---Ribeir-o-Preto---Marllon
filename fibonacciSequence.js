function fibonacciSequence(limit){
    let sequence = [];
    let number1 = 0;
    let number2 = 1;
    let memori = number1 + number2;
    sequence.push(memori)
    while(memori < limit) {
        number1 = number2;
        number2 = memori;
        memori = number1 + number2;
        sequence.push(memori);
    }

    return sequence;
}

export default fibonacciSequence;