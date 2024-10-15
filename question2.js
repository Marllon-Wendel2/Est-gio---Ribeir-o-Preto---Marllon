function main(letter, text) {
    const contains = checkIfContainsLetter(letter, text);

    if(contains) {
    const reapt = calculateHowMany(letter, text);
    console.log(`O texto ${text} possuí ${reapt} vezes de ${letter}.`)
    } else {
        console.log(`O texto ${text} NÃO possuí ${letter}.`)
    }
}


function checkIfContainsLetter(letter, text) {
    return text.includes(letter);
}

function calculateHowMany(letter, text) {
    let counter = 0;
    const textLow = text.toLowerCase();
    const letterLow =  letter.toLowerCase();
    let position = text.indexOf(letterLow);

    while(position !== -1) {
        counter++;
        position = text.indexOf(letterLow, position + 1);
    }
    return counter
}

main("a", "aabbac");
main("a", "bbbd");