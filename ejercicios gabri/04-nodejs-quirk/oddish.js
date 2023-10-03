function oddishOrEvenish(numero) {
    const digitSum = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    
    if (digitSum % 2 === 0) {
      return "Evenish";
    } else {
      return "Oddish";
    }
  }
  

  console.log(oddishOrEvenish(121)); 
  console.log(oddishOrEvenish(41));  