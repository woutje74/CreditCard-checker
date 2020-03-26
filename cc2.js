function validateCred(original){
    console.log('Check this creditcard: ' + original);
    const newArray=Array.from(original);
    const creditCard = [];
    for (let i=0 ; i < newArray.length ; i++){
        creditCard.push(parseInt(newArray[i], 10));
    } 

    let x = creditCard.pop();
    
    creditCard.reverse();
    for (let j=0 ; j < creditCard.length ; (j += 2)){
        creditCard[j] = creditCard[j] * 2;
    if (creditCard[j] >= 10){
        creditCard[j] = creditCard[j] - 9;
        }
    }  

    let sum = (accumulator, currentValue) => accumulator + currentValue;
    let checkDigit = (creditCard.reduce(sum) + x) % 10;

    if (checkDigit > 0) {
        console.log('Credit card is invalid');
      } else { 
        console.log('Credit card is valid');
        }
}

validateCred('36334655797471');